
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

const DocumentWorkflowSteps = memo(({ steps }) => (
  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h2 className="f-32 f-700 black">Translation Workflow</h2>
        </div>
      </div>
      <div className="row">
        {steps?.map((step, index) => (
          <div key={`workflow-step-${index}`} className="col-lg-3 col-md-6 mb-4">
            <div className="workflow-step text-center p-4">
              <div className="step-number mb-3">
                <span className="badge bg-primary rounded-circle p-3 f-18 f-600">
                  {index + 1}
                </span>
              </div>
              <h4 className="f-20 f-600 black mb-3">{step.title}</h4>
              <p className="f-16 f-400 gray">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
));

const DocumentTranslationContent = memo(() => {
  const { data: pageData, loading, error } = useAdvancedPageData('documentTranslation');
  const { measurePerformance } = usePerformanceOptimization();
  const animationsEnabled = useSelector(state => state.ui.animations.enabled);

  const memoizedSteps = useMemo(() => pageData?.workflow?.steps || [], [pageData?.workflow?.steps]);

  const handleImageError = useCallback((e) => {
    e.target.src = getImagePath('hero-bg.png');
  }, []);

  if (loading) return <div className="content-loading">Loading Document Translation data...</div>;
  if (error) return <div className="content-error">Error loading content: {error}</div>;

  return measurePerformance('DocumentTranslationContent render', () => (
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
                {pageData?.hero?.title || 'Document Translation Workflow'}
              </h1>
              <p className={`f-400 pb-2 pe-3 ${animationsEnabled ? 'wow fadeIn' : ''}`}>
                {pageData?.hero?.subtitle || pageData?.hero?.description || 
                'Streamlined document translation process that maintains formatting and ensures accuracy'}
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
                  src={getImagePath("products-images/document-translation/document-translation-cta.png")}
                  alt="Document Translation"
                  className="img-fluid"
                  loading="lazy"
                  onError={handleImageError}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <Suspense fallback={<div className="loading-workflow">Loading workflow...</div>}>
        <DocumentWorkflowSteps steps={memoizedSteps} />
      </Suspense>

      {/* Video Demo Section */}
      <Suspense fallback={<div className="loading-video">Loading video...</div>}>
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="f-32 f-700 black mb-4">Document Translation Demo</h2>
                <div className="video-container">
                  <video 
                    controls 
                    className="img-fluid rounded"
                    poster={getImagePath("products-images/document-translation/document-translation-cta.png")}
                  >
                    <source src="/assets/videos/document-tranlation-product.mp4" type="video/mp4" />
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
DocumentWorkflowSteps.displayName = 'DocumentWorkflowSteps';

const DocumentTranslationWorkflow = withErrorBoundary(
  withSuspense(
    memo(() => (
      <UniversalPage 
        pageKey="documentTranslation"
        showHero={false}
        showFeatures={true}
        showCTA={true}
      >
        <DocumentTranslationContent />
      </UniversalPage>
    )),
    <div>Loading Document Translation page...</div>
  ),
  ({ error, resetError }) => (
    <div className="error-fallback">
      <h2>Failed to load Document Translation page</h2>
      <button onClick={resetError}>Try Again</button>
    </div>
  )
);

export default DocumentTranslationWorkflow;
