import React, { memo, useMemo, Suspense, useCallback } from 'react';
import { useAdvancedPageData, useSelector, withErrorBoundary, withSuspense, getImagePath, Link } from '@/utils/sharedImports';
import UniversalPage from '@/components/UniversalPage';
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const ResourceCard = memo(({ resource, index }) => (
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="resource-card h-100">
      <img 
        src={getImagePath(`blog-${index + 1}.png`)}
        alt={resource.title}
        className="card-img-top"
        loading="lazy"
        onError={(e) => {
          e.target.src = getImagePath('hero-bg.png');
        }}
      />
      <div className="card-body p-4">
        <h5 className="f-20 f-600 black mb-3">{resource.title}</h5>
        <p className="f-16 f-400 gray mb-3">{resource.excerpt}</p>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">{resource.date}</small>
          <Link to={`/${resource.slug}`} className="btn btn-outline-primary btn-sm">
            Read More
          </Link>
        </div>
      </div>
    </div>
  </div>
));

const LazyResourceGrid = memo(() => {
  const { targetRef, hasIntersected } = useIntersectionObserver();
  const { data: pageData } = useAdvancedPageData('resources');

  const memoizedResources = useMemo(() => pageData?.resources || [], [pageData?.resources]);
  const memoizedCategories = useMemo(() => pageData?.categories || [], [pageData?.categories]);

  const handleFilterClick = useCallback((category) => {
    console.log('Filter by category:', category);
  }, []);

  return (
    <div ref={targetRef} className="resources-grid-section">
      {hasIntersected && (
        <Suspense fallback={<div className="loading-resources">Loading resources...</div>}>
          <section className="py-5">
            <div className="container">
              <div className="row">
                {memoizedResources.map((resource, index) => (
                  <ResourceCard 
                    key={`resource-${index}`} 
                    resource={resource} 
                    index={index} 
                  />
                ))}
              </div>
            </div>
          </section>
        </Suspense>
      )}
    </div>
  );
});

const ResourcesContent = memo(() => {
  const { data: pageData, loading, error } = useAdvancedPageData('resources');
  const { measurePerformance } = usePerformanceOptimization();
  const animationsEnabled = useSelector(state => state.ui.animations.enabled);

  const memoizedContent = useMemo(() => {
    if (loading) return <div className="content-loading">Loading resources data...</div>;
    if (error) return <div className="content-error">Error loading resources content: {error}</div>;

    return (
      <>
        <section
          className="hero-section bg-img"
          style={{
            backgroundImage: `url(${getImagePath("simple-banner-background.png")})`
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 mx-auto text-center">
                <h1 className={`f-40 f-700 black pb-2 ${animationsEnabled ? 'wow fadeIn' : ''}`}>
                  {pageData?.hero?.title || 'Resources & Insights'}
                </h1>
                <p className={`f-18 f-400 pb-3 ${animationsEnabled ? 'wow fadeIn' : ''}`}>
                  {pageData?.hero?.subtitle || pageData?.hero?.description || 
                  'Stay updated with the latest trends in AI translation and localization'}
                </p>
              </div>
            </div>
          </div>
        </section>

        <Suspense fallback={<div className="loading-categories">Loading categories...</div>}>
          <section className="py-3 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    <button 
                      className="btn btn-outline-primary active"
                      onClick={() => handleFilterClick('all')}
                    >
                      All
                    </button>
                    {memoizedCategories.map((category, index) => (
                      <button 
                        key={`category-${index}`}
                        className="btn btn-outline-primary"
                        onClick={() => handleFilterClick(category.slug)}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Suspense>
        
        <LazyResourceGrid />
      </>
    );
  }, [pageData, loading, error, animationsEnabled, handleFilterClick, memoizedCategories]);

  return measurePerformance('ResourcesContent render', () => memoizedContent);
});

ResourceCard.displayName = 'ResourceCard';
LazyResourceGrid.displayName = 'LazyResourceGrid';
ResourcesContent.displayName = 'ResourcesContent';

const Resources = withErrorBoundary(
  withSuspense(ResourcesContent, <div>Loading Resources page...</div>),
  ({ error, resetError }) => (
    <div className="error-fallback">
      <div className="container text-center py-5">
        <h2>Failed to load Resources page</h2>
        <p>{error?.message}</p>
        <button className="btn btn-primary" onClick={resetError}>Try Again</button>
      </div>
    </div>
  )
);

export default Resources;