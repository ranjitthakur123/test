
import React, { memo, useMemo, Suspense } from 'react';
import { useAdvancedPageData, useSelector, withErrorBoundary, withSuspense } from '@/utils/sharedImports';
import UniversalPage from '@/components/UniversalPage';
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const LazyHomeFeatures = memo(() => {
  const { targetRef, hasIntersected } = useIntersectionObserver();

  return (
    <div ref={targetRef} className="home-features-section">
      {hasIntersected && (
        <Suspense fallback={<div className="loading-features">Loading features...</div>}>
          <div className="home-features-content">
            {/* Home features content would go here */}
            <p>Home Features Content</p>
          </div>
        </Suspense>
      )}
    </div>
  );
});

const HomeContent = memo(() => {
  const { data, loading, error } = useAdvancedPageData('home');
  const { measurePerformance } = usePerformanceOptimization();
  const animationsEnabled = useSelector(state => state.ui.animations.enabled);

  const memoizedContent = useMemo(() => {
    if (loading) return <div className="content-loading">Loading home data...</div>;
    if (error) return <div className="content-error">Error loading home content: {error}</div>;

    return (
      <UniversalPage 
        pageKey="home"
        showHero={true}
        showFeatures={true}
        showCTA={true}
        className={animationsEnabled ? 'animations-enabled' : ''}
      >
        <Suspense fallback={<div className="loading-home-features">Loading home features...</div>}>
          <LazyHomeFeatures />
        </Suspense>
      </UniversalPage>
    );
  }, [data, loading, error, animationsEnabled]);

  return measurePerformance('Home page render', () => memoizedContent);
});

LazyHomeFeatures.displayName = 'LazyHomeFeatures';
HomeContent.displayName = 'HomeContent';

const Home = withErrorBoundary(
  withSuspense(HomeContent, <div>Loading Home page...</div>),
  ({ error, resetError }) => (
    <div className="error-fallback">
      <div className="container text-center py-5">
        <h2>Failed to load Home page</h2>
        <p>{error?.message}</p>
        <button className="btn btn-primary" onClick={resetError}>Try Again</button>
      </div>
    </div>
  )
);

export default Home;
