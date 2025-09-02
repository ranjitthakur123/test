
import React, { memo, useEffect, useMemo, Suspense } from 'react';
import { useSelector } from 'react-redux';
import SEO from './SEO';
import { usePageInitialization } from '@/hooks/usePageInitialization';
import { useScriptLoader } from '@/hooks/useScriptLoader';
import { ErrorBoundary } from './ErrorBoundary';

const PageTemplate = memo(({ 
  pageKey, 
  customSEO = null, 
  containerFluid = false, 
  children,
  className = '',
  requiresScripts = []
}) => {
  const { loadMultipleScripts } = useScriptLoader();
  const animationsInitialized = useSelector(state => state.ui.animations.initialized);
  
  // Initialize page with advanced features
  usePageInitialization(pageKey);

  // Load required scripts with error handling
  useEffect(() => {
    if (requiresScripts.length > 0) {
      loadMultipleScripts(requiresScripts).catch(error => {
        console.warn(`Some scripts failed to load for page ${pageKey}:`, error);
      });
    }
  }, [pageKey, requiresScripts, loadMultipleScripts]);

  const containerClass = useMemo(() => {
    const base = containerFluid ? 'container-fluid' : 'container';
    const animations = animationsInitialized ? 'animations-ready' : 'animations-loading';
    return `${base} ${animations} ${className}`.trim();
  }, [containerFluid, animationsInitialized, className]);

  const pageContent = useMemo(() => (
    <div className={containerClass}>
      <ErrorBoundary>
        <Suspense fallback={
          <div className="content-loading">
            <div className="loading-spinner"></div>
            <p>Loading content...</p>
          </div>
        }>
          {children}
        </Suspense>
      </ErrorBoundary>
    </div>
  ), [containerClass, children]);

  return (
    <>
      <SEO pageKey={pageKey} customSEO={customSEO} />
      {pageContent}
    </>
  );
});

PageTemplate.displayName = 'PageTemplate';

export default PageTemplate;
