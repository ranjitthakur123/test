
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { ErrorBoundary } from './ErrorBoundary';

const PageSkeleton = () => (
  <div className="page-skeleton">
    <div className="skeleton-hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="skeleton-line skeleton-title"></div>
            <div className="skeleton-line skeleton-subtitle"></div>
            <div className="skeleton-button"></div>
          </div>
          <div className="col-lg-6">
            <div className="skeleton-image"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="skeleton-content">
      <div className="container">
        <div className="skeleton-section"></div>
        <div className="skeleton-section"></div>
      </div>
    </div>
  </div>
);

const ErrorFallback = ({ error, resetError }) => (
  <div className="error-fallback">
    <div className="container text-center py-5">
      <h2>Something went wrong</h2>
      <p className="text-muted">{error.message}</p>
      <button className="btn btn-primary" onClick={resetError}>
        Try Again
      </button>
    </div>
  </div>
);

const LazyPageWrapper = ({ children, fallback = <PageSkeleton /> }) => {
  const animationsEnabled = useSelector(state => state.ui.animations.enabled);

  return (
    <ErrorBoundary fallback={ErrorFallback}>
      <Suspense fallback={fallback}>
        <div className={`page-wrapper ${animationsEnabled ? 'animations-enabled' : ''}`}>
          {children}
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default LazyPageWrapper;
import React, { memo, Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading, clearError } from '@/store/store';
import { ErrorBoundary } from './ErrorBoundary';
import { PageLoader } from './LoadingComponents';

const LazyPageWrapper = memo(({ children, fallback = null }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loading);

  useEffect(() => {
    // Clear any previous errors when loading a new page
    dispatch(clearError());
    dispatch(setLoading(true));

    // Set loading to false after component mounts
    const timer = setTimeout(() => {
      dispatch(setLoading(false));
    }, 100);

    return () => clearTimeout(timer);
  }, [dispatch]);

  const defaultFallback = fallback || <PageLoader message="Loading page..." />;

  return (
    <ErrorBoundary
      fallback={({ error, resetError }) => (
        <div className="page-error-fallback">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto text-center py-5">
                <h2 className="f-32 f-700 text-danger mb-3">
                  Page Failed to Load
                </h2>
                <p className="f-16 f-400 gray mb-4">
                  We encountered an error while loading this page. Please try again.
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <button 
                    className="btn btn-primary"
                    onClick={resetError}
                  >
                    Try Again
                  </button>
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={() => window.location.href = '/'}
                  >
                    Go Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    >
      <Suspense fallback={defaultFallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
});

LazyPageWrapper.displayName = 'LazyPageWrapper';

export default LazyPageWrapper;
