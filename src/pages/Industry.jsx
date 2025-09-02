
import React, { memo, useMemo, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useAdvancedPageData, OptimizedImage, withErrorBoundary, useSelector } from '@/utils/sharedImports';
import UniversalPage from '@/components/UniversalPage';
import { getImagePath } from '@/utils/imageUtils';
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization';

const IndustryCard = memo(({ industry, index }) => {
  const { measurePerformance } = usePerformanceOptimization();

  return measurePerformance(`IndustryCard-${index}`, () => (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="industry-card text-center p-4 h-100">
        <OptimizedImage 
          src={getImagePath(`industry-icons/${industry.icon}`)} 
          alt={industry.name}
          className="mb-3"
          style={{ width: '60px', height: '60px' }}
          onError={(e) => {
            e.target.src = getImagePath('industry-icons/default.png');
          }}
        />
        <h4 className="f-20 f-600 black mb-3">{industry.name}</h4>
        <p className="f-14 f-400 gray">{industry.description}</p>
      </div>
    </div>
  ));
});

const IndustriesGrid = memo(({ industries }) => (
  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h2 className="f-32 f-700 black">Industries We Serve</h2>
          <p className="f-18 f-400 gray">
            Specialized solutions for every sector
          </p>
        </div>
      </div>
      <div className="row">
        <Suspense fallback={<div className="loading-industries">Loading industries...</div>}>
          {industries?.map((industry, index) => (
            <IndustryCard 
              key={`industry-${industry.name}-${index}`} 
              industry={industry} 
              index={index} 
            />
          ))}
        </Suspense>
      </div>
    </div>
  </section>
));

const IndustryContent = memo(() => {
  const { data: pageData, loading, error } = useAdvancedPageData('industry');
  const animationsEnabled = useSelector(state => state.ui.animations.enabled);

  const memoizedContent = useMemo(() => {
    if (loading) return <div className="page-loading">Loading industry data...</div>;
    if (error) return <div className="page-error">Error: {error}</div>;

    return (
      <UniversalPage 
        pageKey="industry"
        showHero={true}
        showFeatures={false}
        showCTA={true}
        className={animationsEnabled ? 'animations-enabled' : ''}
      >
        <IndustriesGrid industries={pageData.industries} />
      </UniversalPage>
    );
  }, [pageData, loading, error, animationsEnabled]);

  return memoizedContent;
});

IndustryCard.displayName = 'IndustryCard';
IndustriesGrid.displayName = 'IndustriesGrid';
IndustryContent.displayName = 'IndustryContent';

const Industry = withErrorBoundary(IndustryContent, ({ error, resetError }) => (
  <div className="error-fallback">
    <div className="container text-center py-5">
      <h2>Failed to load Industry page</h2>
      <p>{error?.message}</p>
      <button className="btn btn-primary" onClick={resetError}>Try Again</button>
    </div>
  </div>
));

export default Industry;
