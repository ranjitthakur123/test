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

// HOC utilities
export const withErrorBoundary = (Component, fallback) => {
  const WrappedComponent = (props) => (
    <ErrorBoundary fallback={fallback}>
      <Component {...props} />
    </ErrorBoundary>
  );
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

export const withSuspense = (Component, fallback) => {
  const WrappedComponent = (props) => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
  WrappedComponent.displayName = `withSuspense(${Component.displayName || Component.name})`;
  return WrappedComponent;
};