
import React, { memo, Suspense, useMemo, useCallback } from 'react';
import { 
  Link, 
  useAdvancedPageData, 
  useSelector, 
  withErrorBoundary, 
  withSuspense,
  getImagePath
} from '@/utils/sharedImports';
import UniversalPage from '@/components/UniversalPage';
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization';
import FAQAccordion from '@/components/FAQAccordion';
import fullDataset from '@/data/howWeHelpData.json';

const TranslationAPIContent = memo(() => {
  const { data: pageData, loading, error } = useAdvancedPageData('translationApi');
  const { measurePerformance } = usePerformanceOptimization();
  const animationsEnabled = useSelector(state => state.ui.animations.enabled);

  const memoizedFAQData = useMemo(() => 
    fullDataset.TranslationApi?.faq || [], 
    [fullDataset.TranslationApi?.faq]
  );

  const handleVideoError = useCallback((e) => {
    console.warn('Video failed to load:', e.target.src);
    e.target.style.display = 'none';
  }, []);

  if (loading) return <div className="content-loading">Loading Translation API data...</div>;
  if (error) return <div className="content-error">Error loading content: {error}</div>;

  return measurePerformance('TranslationAPIContent render', () => (
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
                Localize 5x Faster with{" "}
                <span className="blue">Machine Translation API</span>
              </h1>
              <p className={`f-400 pb-2 pe-3 ${animationsEnabled ? 'wow fadeIn' : ''}`}>
                Designed for organizations handling high volumes of content, our API
                enables fast and accurate translation into 40+ languages at scale.
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
                  src={getImagePath("products-images/translation-api/Translation-cta.png")}
                  alt="Translation API"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Suspense fallback={<div className="loading-faq">Loading FAQ...</div>}>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 className="f-32 f-700 black">Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <FAQAccordion faqData={memoizedFAQData} />
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </>
  ));
});

TranslationAPIContent.displayName = 'TranslationAPIContent';

const MachineTranslationApi = withErrorBoundary(
  withSuspense(
    memo(() => (
      <UniversalPage 
        pageKey="translationApi"
        showHero={false}
        showFeatures={true}
        showCTA={true}
      >
        <TranslationAPIContent />
      </UniversalPage>
    )),
    <div>Loading Translation API page...</div>
  ),
  ({ error, resetError }) => (
    <div className="error-fallback">
      <h2>Failed to load Translation API page</h2>
      <button onClick={resetError}>Try Again</button>
    </div>
  )
);

export default MachineTranslationApi;
