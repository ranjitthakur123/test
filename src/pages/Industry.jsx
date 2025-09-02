
import React, { memo, Suspense, useMemo, useCallback } from 'react';
import { 
  useAdvancedPageData, 
  useSelector, 
  withErrorBoundary, 
  withSuspense,
  getImagePath,
  Link
} from '@/utils/sharedImports';
import UniversalPage from '@/components/UniversalPage';
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization';

const IndustryCard = memo(({ industry, index }) => (
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="industry-card text-center p-4 h-100">
      <img 
        src={getImagePath(`industry-icons/${industry.icon || 'default-industry.png'}`)}
        alt={industry.title}
        className="img-fluid mb-3"
        style={{ maxHeight: '80px' }}
        loading="lazy"
      />
      <h4 className="f-24 f-600 black mb-3">{industry.title}</h4>
      <p className="f-16 f-400 gray mb-3">{industry.description}</p>
      {industry.link && (
        <Link to={industry.link} className="btn btn-outline-primary">
          Learn More
        </Link>
      )}
    </div>
  </div>
));

const IndustryContent = memo(() => {
  const { data: pageData, loading, error } = useAdvancedPageData('industry');
  const { measurePerformance } = usePerformanceOptimization();
  const animationsEnabled = useSelector(state => state.ui.animations.enabled);

  const memoizedIndustries = useMemo(() => pageData?.industries || [], [pageData?.industries]);

  const handleImageError = useCallback((e) => {
    e.target.src = getImagePath('hero-bg.png');
  }, []);

  if (loading) return <div className="content-loading">Loading Industry data...</div>;
  if (error) return <div className="content-error">Error loading content: {error}</div>;

  return measurePerformance('IndustryContent render', () => (
    <>
      {/* Hero Section */}
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
                {pageData?.hero?.title || 'Industry-Specific Translation Solutions'}
              </h1>
              <p className={`f-18 f-400 pb-3 ${animationsEnabled ? 'wow fadeIn' : ''}`}>
                {pageData?.hero?.subtitle || pageData?.hero?.description || 
                'Tailored localization solutions for every industry vertical'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <Suspense fallback={<div className="loading-industries">Loading industries...</div>}>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 className="f-32 f-700 black">Industries We Serve</h2>
              </div>
            </div>
            <div className="row">
              {memoizedIndustries.map((industry, index) => (
                <IndustryCard 
                  key={`industry-${index}`} 
                  industry={industry} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </section>
      </Suspense>

      {/* Stats Section */}
      <Suspense fallback={<div className="loading-stats">Loading statistics...</div>}>
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-3 col-md-6 mb-4">
                <h3 className="f-36 f-700 blue">100+</h3>
                <p className="f-16 f-400 gray">Industries Served</p>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <h3 className="f-36 f-700 blue">1000+</h3>
                <p className="f-16 f-400 gray">Projects Completed</p>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <h3 className="f-36 f-700 blue">40+</h3>
                <p className="f-16 f-400 gray">Languages Supported</p>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <h3 className="f-36 f-700 blue">99.5%</h3>
                <p className="f-16 f-400 gray">Accuracy Rate</p>
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </>
  ));
});

IndustryContent.displayName = 'IndustryContent';
IndustryCard.displayName = 'IndustryCard';

const Industry = withErrorBoundary(
  withSuspense(
    memo(() => (
      <UniversalPage 
        pageKey="industry"
        showHero={false}
        showFeatures={false}
        showCTA={true}
      >
        <IndustryContent />
      </UniversalPage>
    )),
    <div>Loading Industry page...</div>
  ),
  ({ error, resetError }) => (
    <div className="error-fallback">
      <h2>Failed to load Industry page</h2>
      <button onClick={resetError}>Try Again</button>
    </div>
  )
);

export default Industry;
