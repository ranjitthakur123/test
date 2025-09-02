
import React, { memo, useMemo, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PageTemplate from './PageTemplate';
import { getImagePath } from '@/utils/imageUtils';
import { useAdvancedPageData } from '@/hooks/useAdvancedPageData';
import { ErrorBoundary } from './ErrorBoundary';

// Memoized components for better performance
const HeroSection = memo(({ pageData, pageKey }) => (
  <section
    className="hero-section bg-img"
    style={{
      backgroundImage: `url(${getImagePath('simple-banner-background.png')})`
    }}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1 className="f-40 f-700 black pb-2 wow fadeIn">
            {pageData.hero.title}
          </h1>
          <p className="f-400 pb-2 pe-3 wow fadeIn">
            {pageData.hero.subtitle || pageData.hero.description}
          </p>
          <div className="d-flex flex-wrap align-items-center justify-content-start gap-3 wow fadeIn">
            <Link to="/book-a-demo" className="white">
              <button type="button" className="devnagri-btn mt-3">
                <img
                  src={getImagePath('video-play-btn.png')}
                  className="pe-2"
                  alt="play"
                />
                Book a Demo
              </button>
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="text-center wow fadeIn">
            <img
              src={getImagePath(`products-images/${pageKey}/${pageKey}-cta.png`)}
              alt={pageData.hero.title}
              className="img-fluid"
              onError={(e) => {
                e.target.src = getImagePath('hero-bg.png');
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
));

const FeatureCard = memo(({ feature, index }) => (
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="feature-card text-center p-4">
      <h4 className="f-24 f-600 black mb-3">{feature.title}</h4>
      <p className="f-16 f-400 gray">{feature.description}</p>
    </div>
  </div>
));

const FeaturesSection = memo(({ features }) => (
  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h2 className="f-32 f-700 black">Key Features</h2>
        </div>
      </div>
      <div className="row">
        <ErrorBoundary>
          <Suspense fallback={<div className="loading-features">Loading features...</div>}>
            {features?.map((feature, index) => (
              <FeatureCard key={`feature-${index}`} feature={feature} index={index} />
            ))}
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  </section>
));

const CTASection = memo(() => (
  <section className="py-5 bg-light">
    <div className="container text-center">
      <h2 className="f-32 f-700 black mb-3">Ready to Get Started?</h2>
      <p className="f-18 f-400 gray mb-4">
        Transform your business with AI-powered translation
      </p>
      <Link to="/book-a-demo">
        <button className="devnagri-btn">Book a Demo</button>
      </Link>
    </div>
  </section>
));

const UniversalPage = memo(({ 
  pageKey, 
  customSEO = null,
  showHero = true,
  showFeatures = true,
  showCTA = true,
  children 
}) => {
  const { data: pageData, loading, error } = useAdvancedPageData(pageKey);
  const animationsEnabled = useSelector(state => state.ui.animations.enabled);

  const memoizedContent = useMemo(() => {
    if (loading) {
      return <div className="page-loading">Loading page content...</div>;
    }

    if (error) {
      return (
        <div className="page-error">
          <div className="container text-center py-5">
            <h3>Unable to load page content</h3>
            <p className="text-muted">{error}</p>
          </div>
        </div>
      );
    }

    return (
      <>
        {showHero && pageData?.hero && (
          <ErrorBoundary>
            <Suspense fallback={<div className="loading-hero">Loading hero...</div>}>
              <HeroSection pageData={pageData} pageKey={pageKey} />
            </Suspense>
          </ErrorBoundary>
        )}

        {showFeatures && pageData?.features && (
          <ErrorBoundary>
            <FeaturesSection features={pageData.features} />
          </ErrorBoundary>
        )}

        <ErrorBoundary>
          <Suspense fallback={<div className="loading-content">Loading content...</div>}>
            {children}
          </Suspense>
        </ErrorBoundary>

        {showCTA && (
          <ErrorBoundary>
            <Suspense fallback={<div className="loading-cta">Loading CTA...</div>}>
              <CTASection />
            </Suspense>
          </ErrorBoundary>
        )}
      </>
    );
  }, [pageData, loading, error, showHero, showFeatures, showCTA, children, pageKey]);

  return (
    <PageTemplate 
      pageKey={pageKey} 
      customSEO={customSEO} 
      containerFluid
      className={animationsEnabled ? 'animations-enabled' : ''}
    >
      {memoizedContent}
    </PageTemplate>
  );
});

UniversalPage.displayName = 'UniversalPage';
HeroSection.displayName = 'HeroSection';
FeatureCard.displayName = 'FeatureCard';
FeaturesSection.displayName = 'FeaturesSection';
CTASection.displayName = 'CTASection';

export default UniversalPage;
