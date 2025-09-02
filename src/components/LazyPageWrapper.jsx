
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
