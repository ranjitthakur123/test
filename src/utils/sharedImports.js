
// Consolidated shared imports and utilities with Redux
export { default as React, useEffect, useState, useRef, useCallback, useMemo, memo, Suspense, lazy } from 'react';
export { Link, useNavigate, useLocation } from 'react-router-dom';
export { useSelector, useDispatch } from 'react-redux';
export { default as SEO } from '@/components/SEO';
export { default as PageTemplate } from '@/components/PageTemplate';
export { default as UniversalPage } from '@/components/UniversalPage';
export { default as LazyPageWrapper } from '@/components/LazyPageWrapper';
export { ErrorBoundary } from '@/components/ErrorBoundary';
export { usePageInitialization } from '@/hooks/usePageInitialization';
export { useAdvancedPageData } from '@/hooks/useAdvancedPageData';
export { useScriptLoader } from '@/hooks/useScriptLoader';
export { scrollToTop } from '@/utils/scrollUtils';
export { getImagePath } from '@/utils/imageUtils';
export { initializeAllScripts, initializeSliders, reinitializeSliders } from '@/utils/initScripts';
export { initializeAllAnimations, initializeWow } from '@/utils/initializeAnimations';
export { getSEOData } from '@/data/seoData';
export { getPageData } from '@/data/pageData';

// Redux actions
export { 
  setPageData, 
  setLoading, 
  setError, 
  clearError,
  setSEOData,
  toggleSidebar,
  setAnimationsInitialized
} from '@/store/store';

// Advanced React utilities
export const withErrorBoundary = (Component, fallback) => {
  return React.forwardRef((props, ref) => (
    <ErrorBoundary fallback={fallback}>
      <Component {...props} ref={ref} />
    </ErrorBoundary>
  ));
};

export const withSuspense = (Component, fallback = <div>Loading...</div>) => {
  return React.forwardRef((props, ref) => (
    <Suspense fallback={fallback}>
      <Component {...props} ref={ref} />
    </Suspense>
  ));
};

export const withMemo = (Component, areEqual) => {
  return React.memo(Component, areEqual);
};

// Common utility functions enhanced
export const createSection = (className, children, key) => {
  return React.createElement('section', { className, key }, children);
};

export const createContainer = (children, fluid = false, className = '') => {
  return React.createElement('div', { 
    className: `${fluid ? 'container-fluid' : 'container'} ${className}`.trim()
  }, children);
};

// Performance optimized image component
export const OptimizedImage = memo(({ src, alt, className = '', onError, ...props }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleError = useCallback((e) => {
    setImageError(true);
    if (onError) onError(e);
  }, [onError]);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${imageLoaded ? 'loaded' : 'loading'} ${imageError ? 'error' : ''}`}
      onLoad={handleLoad}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  );
});

OptimizedImage.displayName = 'OptimizedImage';
