import React, { memo, useMemo, Suspense } from 'react';
import { useAdvancedPageData, useSelector, withErrorBoundary, withSuspense } from '@/utils/sharedImports';
import UniversalPage from '@/components/UniversalPage';
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const LazyD2CDemo = memo(() => {
  const { targetRef, hasIntersected } = useIntersectionObserver();

  return (
    <div ref={targetRef} className="d2c-demo-section">
      {hasIntersected && (
        <Suspense fallback={<div className="loading-demo">Loading D2C demo...</div>}>
          <div className="d2c-demo-content">
            {/* D2C specific content would go here */}
            <p>D2C Demo Content</p>
          </div>
        </Suspense>
      )}
    </div>
  );
});

const D2CContent = memo(() => {
  const { data, loading, error } = useAdvancedPageData('d2c');
  const { measurePerformance } = usePerformanceOptimization();
  const animationsEnabled = useSelector(state => state.ui.animations.enabled);

  const memoizedContent = useMemo(() => {
    if (loading) return <div className="content-loading">Loading D2C data...</div>;
    if (error) return <div className="content-error">Error loading D2C content: {error}</div>;

    return (
      <UniversalPage 
        pageKey="d2c"
        showHero={true}
        showFeatures={true}
        showCTA={true}
        className={animationsEnabled ? 'animations-enabled' : ''}
      >
        <Suspense fallback={<div className="loading-d2c-demo">Loading D2C demo...</div>}>
          <LazyD2CDemo />
        </Suspense>
      </UniversalPage>
    );
  }, [data, loading, error, animationsEnabled]);

  return measurePerformance('D2C page render', () => memoizedContent);
});

LazyD2CDemo.displayName = 'LazyD2CDemo';
D2CContent.displayName = 'D2CContent';

const D2C = withErrorBoundary(
  withSuspense(D2CContent, <div>Loading D2C page...</div>),
  ({ error, resetError }) => (
    <div className="error-fallback">
      <div className="container text-center py-5">
        <h2>Failed to load D2C page</h2>
        <p>{error?.message}</p>
        <button className="btn btn-primary" onClick={resetError}>Try Again</button>
      </div>
    </div>
  )
);

export default D2C;