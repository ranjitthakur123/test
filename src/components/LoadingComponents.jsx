
import React, { memo } from 'react';
import { useSelector } from 'react-redux';

const LoadingSkeleton = memo(({ lines = 3, height = '20px' }) => (
  <div className="loading-skeleton">
    {Array.from({ length: lines }, (_, i) => (
      <div 
        key={i}
        className="skeleton-line"
        style={{ 
          height, 
          marginBottom: '10px',
          width: i === lines - 1 ? '60%' : '100%'
        }}
      />
    ))}
  </div>
));

const PageLoader = memo(({ message = "Loading..." }) => {
  const theme = useSelector(state => state.ui.theme.mode);
  
  return (
    <div className={`page-loader ${theme}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="loading-content text-center py-5">
              <div className="spinner-border text-primary mb-3" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="f-16 f-400 gray">{message}</p>
              <LoadingSkeleton lines={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const ContentLoader = memo(({ type = "content", lines = 2 }) => (
  <div className={`content-loader loading-${type}`}>
    <div className="d-flex align-items-center mb-3">
      <div className="spinner-border spinner-border-sm text-primary me-2" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="f-14 f-400 gray">Loading {type}...</span>
    </div>
    <LoadingSkeleton lines={lines} />
  </div>
));

const LazyComponentLoader = memo(({ componentName = "component" }) => (
  <div className="lazy-component-loader">
    <div className="d-flex justify-content-center align-items-center py-4">
      <div className="text-center">
        <div className="spinner-grow text-primary mb-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="f-14 f-400 gray mb-0">Loading {componentName}...</p>
      </div>
    </div>
  </div>
));

LoadingSkeleton.displayName = 'LoadingSkeleton';
PageLoader.displayName = 'PageLoader';
ContentLoader.displayName = 'ContentLoader';
LazyComponentLoader.displayName = 'LazyComponentLoader';

export { LoadingSkeleton, PageLoader, ContentLoader, LazyComponentLoader };
export default PageLoader;
