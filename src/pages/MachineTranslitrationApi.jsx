
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

const TransliterationAPIContent = memo(() => {
  const { data: pageData, loading, error } = useAdvancedPageData('transliterationApi');
  const { measurePerformance } = usePerformanceOptimization();
  const animationsEnabled = useSelector(state => state.ui.animations.enabled);

  const memoizedFeatures = useMemo(() => pageData?.features || [], [pageData?.features]);

  const handleImageError = useCallback((e) => {
    e.target.src = getImagePath('hero-bg.png');
  }, []);

  if (loading) return <div className="content-loading">Loading Transliteration API data...</div>;
  if (error) return <div className="content-error">Error loading content: {error}</div>;

  return measurePerformance('TransliterationAPIContent render', () => (
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
            <div className="col-lg-6">
              <h1 className={`f-40 f-700 black pb-2 ${animationsEnabled ? 'wow fadeIn' : ''}`}>
                {pageData?.hero?.title || 'Real-Time Transliteration at Scale'}
              </h1>
              <p className={`f-400 pb-2 pe-3 ${animationsEnabled ? 'wow fadeIn' : ''}`}>
                {pageData?.hero?.subtitle || pageData?.hero?.description || 
                'Convert text from one script to another while preserving pronunciation and meaning across 40+ languages'}
              </p>
              <div className={`d-flex flex-wrap align-items-center justify-content-start gap-3 ${animationsEnabled ? 'wow fadeIn' : ''}`}>
                <Link to="/book-a-demo" className="white">
                  <button type="button" className="devnagri-btn mt-3">
                    <img
                      src={getImagePath("video-play-btn.png")}
                      className="pe-1"
                      style={{ filter: "brightness(0) invert(1)" }}
                      alt="play"
                    />
                    Book a Demo
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`text-center ${animationsEnabled ? 'wow fadeIn' : ''}`}>
                <img
                  src={getImagePath("products-images/transletration-api/Transliteration-cta.png")}
                  alt="Transliteration API"
                  className="img-fluid"
                  loading="lazy"
                  onError={handleImageError}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Suspense fallback={<div className="loading-features">Loading features...</div>}>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 className="f-32 f-700 black">Transliteration API Features</h2>
              </div>
            </div>
            <div className="row">
              {memoizedFeatures.map((feature, index) => (
                <div key={`transliteration-feature-${index}`} className="col-lg-4 col-md-6 mb-4">
                  <div className="feature-card text-center p-4">
                    <h4 className="f-24 f-600 black mb-3">{feature.title}</h4>
                    <p className="f-16 f-400 gray">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Suspense>

      {/* Video Demo Section */}
      <Suspense fallback={<div className="loading-video">Loading video...</div>}>
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="f-32 f-700 black mb-4">Transliteration API Demo</h2>
                <div className="video-container">
                  <video 
                    controls 
                    className="img-fluid rounded"
                    poster={getImagePath("products-images/transletration-api/Transliteration-cta.png")}
                  >
                    <source src="/assets/videos/Transliteration-API.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </>
  ));
});

TransliterationAPIContent.displayName = 'TransliterationAPIContent';

const MachineTranslitrationApi = withErrorBoundary(
  withSuspense(
    memo(() => (
      <UniversalPage 
        pageKey="transliterationApi"
        showHero={false}
        showFeatures={false}
        showCTA={true}
      >
        <TransliterationAPIContent />
      </UniversalPage>
    )),
    <div>Loading Transliteration API page...</div>
  ),
  ({ error, resetError }) => (
    <div className="error-fallback">
      <h2>Failed to load Transliteration API page</h2>
      <button onClick={resetError}>Try Again</button>
    </div>
  )
);

export default MachineTranslitrationApi;
