
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

const BankingFinanceContent = memo(() => {
  const { data: pageData, loading, error } = useAdvancedPageData('bankingFinance');
  const { measurePerformance } = usePerformanceOptimization();
  const animationsEnabled = useSelector(state => state.ui.animations.enabled);

  const memoizedSolutions = useMemo(() => pageData?.solutions || [], [pageData?.solutions]);

  const handleImageError = useCallback((e) => {
    e.target.src = getImagePath('hero-bg.png');
  }, []);

  if (loading) return <div className="content-loading">Loading Banking & Finance data...</div>;
  if (error) return <div className="content-error">Error loading content: {error}</div>;

  return measurePerformance('BankingFinanceContent render', () => (
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
                {pageData?.hero?.title || 'Banking & Finance Translation Solutions'}
              </h1>
              <p className={`f-400 pb-2 pe-3 ${animationsEnabled ? 'wow fadeIn' : ''}`}>
                {pageData?.hero?.subtitle || pageData?.hero?.description || 
                'Secure, compliant, and accurate translations for financial institutions'}
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
                  src={getImagePath("industry-icons/BFSI/BFSI.png")}
                  alt="Banking Finance"
                  className="img-fluid"
                  loading="lazy"
                  onError={handleImageError}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <Suspense fallback={<div className="loading-solutions">Loading solutions...</div>}>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 className="f-32 f-700 black">BFSI Solutions</h2>
              </div>
            </div>
            <div className="row">
              {memoizedSolutions.map((solution, index) => (
                <div key={`bfsi-solution-${index}`} className="col-lg-4 col-md-6 mb-4">
                  <div className="solution-card text-center p-4 h-100">
                    <h4 className="f-24 f-600 black mb-3">{solution.title}</h4>
                    <p className="f-16 f-400 gray">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Suspense>

      {/* Video Section */}
      <Suspense fallback={<div className="loading-video">Loading video...</div>}>
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="f-32 f-700 black mb-4">BFSI in Action</h2>
                <div className="video-container">
                  <video 
                    controls 
                    className="img-fluid rounded"
                    poster={getImagePath("industry-icons/BFSI/BFSI.png")}
                  >
                    <source src="/assets/videos/bfsi-viedo.mp4" type="video/mp4" />
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

DocumentTranslationContent.displayName = 'DocumentTranslationContent';

const BankingFinanceTranslation = withErrorBoundary(
  withSuspense(
    memo(() => (
      <UniversalPage 
        pageKey="bankingFinance"
        showHero={false}
        showFeatures={true}
        showCTA={true}
      >
        <DocumentTranslationContent />
      </UniversalPage>
    )),
    <div>Loading Banking & Finance page...</div>
  ),
  ({ error, resetError }) => (
    <div className="error-fallback">
      <h2>Failed to load Banking & Finance page</h2>
      <button onClick={resetError}>Try Again</button>
    </div>
  )
);

export default BankingFinanceTranslation;
