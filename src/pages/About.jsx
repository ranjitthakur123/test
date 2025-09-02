import React, { memo, useMemo, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { initializeSliders1 } from '@/utils/initScripts';
import { 
  Link, 
  getImagePath, 
  HeroSection,
  BrandSection,
  CTASection 
} from '@/utils/sharedImports';
import { useAdvancedPageData, useSelector, withErrorBoundary, withSuspense } from '@/utils/sharedImports';
import UniversalPage from '@/components/UniversalPage';
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const LazyTeamSection = memo(() => {
  const { targetRef, hasIntersected } = useIntersectionObserver();

  return (
    <div ref={targetRef} className="team-section">
      {hasIntersected && (
        <Suspense fallback={<div className="loading-team">Loading team...</div>}>
          {/* Original team section content is moved here and potentially wrapped or processed by UniversalPage */}
          {/* For now, just a placeholder */}
          <section
            className="our-team py-5 bg-img"
            style={{ backgroundImage: `url(${getImagePath('testimonil-bg.png')})` }}
          >
            <div className="container">
              <div className=" row justify-content-center">
                <div className="col-md-8">
                  <h2 className="f-40 f-600 black text-center pb-2 wow fadeInUp">
                    Our <span className="blue">Team</span>
                  </h2>
                  <p className="f-400 para-color m-0 pb-4 text-center wow fadeInUp">
                    We are a diverse group of AI engineers, product designers,
                    linguists, and strategists who all work together to make
                    communication possible in every language.
                  </p>
                </div>
              </div>
              <div className="team-slider position-relative wow fadeInUp">
                {/* Testimonial 1 */}
                <div>
                  <div className="team-card rounded-4">
                    <div className="team-card-img">
                      <img
                        src={getImagePath('aboutus-image/arpit.jpg')}
                        alt="team"
                        className="w-100 rounded-4"
                      />
                    </div>
                    <div className="team-card-detils">
                      <div className="team-car-detils-left">
                        <h6 className="f-18 f-600 black m-0">Arpit Sharma</h6>
                        <p className="m-0 para-color f-400">
                          SVP- Customer Acquisition
                        </p>
                      </div>
                      <div className="team-car-detils-right">
                        <span className="follow-icon">
                          <Link to="https://www.linkedin.com/in/arpit-sharma-51884b50/">
                            <i className="bi bi-linkedin" />
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="team-card rounded-4">
                    <div className="team-card-img">
                      <img
                        src={getImagePath('aboutus-image/manmeet-kaur.jpg')}
                        alt="team"
                        className="w-100 rounded-4"
                      />
                    </div>
                    <div className="team-card-detils">
                      <div className="team-car-detils-left">
                        <h6 className="f-18 f-600 black m-0">Manmeet Kaur</h6>
                        <p className="m-0 para-color f-400">SVP – Customer Success</p>
                      </div>
                      <div className="team-car-detils-right">
                        <span className="follow-icon">
                          <Link to="https://www.linkedin.com/in/manmeetka/">
                            <i className="bi bi-linkedin" />
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="team-card rounded-4">
                    <div className="team-card-img">
                      <img
                        src={getImagePath('aboutus-image/Michael-Singh.jpg')}
                        alt="team"
                        className="w-100 rounded-4"
                      />
                    </div>
                    <div className="team-card-detils">
                      <div className="team-car-detils-left">
                        <h6 className="f-18 f-600 black m-0">Michael Singh</h6>
                        <p className="m-0 para-color f-400">VP-CRM</p>
                      </div>
                      <div className="team-car-detils-right">
                        <span className="follow-icon">
                          <Link to="#">
                            <i className="bi bi-linkedin" />
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="team-card rounded-4">
                    <div className="team-card-img">
                      <img
                        src={getImagePath('aboutus-image/jaspreet-oberoi.jpg')}
                        alt="team"
                        className="w-100 rounded-4"
                      />
                    </div>
                    <div className="team-card-detils">
                      <div className="team-car-detils-left">
                        <h6 className="f-18 f-600 black m-0">Jaspreet Singh</h6>
                        <p className="m-0 para-color f-400">Head of Engineering</p>
                      </div>
                      <div className="team-car-detils-right">
                        <span className="follow-icon">
                          <Link to="https://www.linkedin.com/in/jasoberoi/">
                            <i className="bi bi-linkedin" />
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="team-card rounded-4">
                    <div className="team-card-img">
                      <img
                        src={getImagePath('aboutus-image/shima-m-kundra.png')}
                        alt="team"
                        className="w-100 rounded-4"
                      />
                    </div>
                    <div className="team-card-detils">
                      <div className="team-car-detils-left">
                        <h6 className="f-18 f-600 black m-0">Shima M Kundra</h6>
                        <p className="m-0 para-color f-400">HR Head</p>
                      </div>
                      <div className="team-car-detils-right">
                        <span className="follow-icon">
                          <Link to="https://www.linkedin.com/in/shima-m-kundra-a113961aa/">
                            <i className="bi bi-linkedin" />
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Suspense>
      )}
    </div>
  );
});


const AboutContent = memo(() => {
  const { data, loading, error } = useAdvancedPageData('about');
  const { measurePerformance } = usePerformanceOptimization();
  const animationsEnabled = useSelector(state => state.ui.animations.enabled);

  const memoizedContent = useMemo(() => {
    if (loading) return <div className="content-loading">Loading about data...</div>;
    if (error) return <div className="content-error">Error loading about content: {error}</div>;

    return (
      <UniversalPage 
        pageKey="about"
        showHero={true}
        showFeatures={true}
        showCTA={true}
        className={animationsEnabled ? 'animations-enabled' : ''}
      >
        {/* Head and meta tags are typically handled in a layout or _document.js */}
        {/* <head>
          <title>About - Devnagri</title>
          <meta
            name="description"
            content="Learn about Devnagri, India's leading AI-powered translation platform, and our mission to break language barriers for businesses."
          />
          <meta
            name="keywords"
            content="About Devnagri, Devnagri Mission"
          />
        </head> */}

        {/* Hero Section */}
        <HeroSection
          title="We Make Multilingual Communication <span class='blue'>Smart and Local</span>"
          backgroundImage="simple-banner-background.png"
          ctaText="Join Us"
          ctaLink="/careers"
          centerAlign={true}
        />
        {/*our major brand*/}
        <BrandSection className="mb-5" />
        {/*Our Story*/}
        <section
          className="our-story py-5 position-relative bg-img"
          style={{ backgroundImage: `url(${getImagePath('testimonil-bg.png')})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 wow fadeInUp">
                <h2 className="f-40 f-600 black m-0 pb-4 text-start wow fadeInUp">
                  Our <span className="blue">Story</span>
                </h2>
                <p className="f-400 m-0 pb-3 para-color">
                  Nakul Kundra and Himanshu Sharma, our co-founders, thought that
                  digital communication was a huge challenge. A lot of the stuff on
                  the internet was in English, which meant that a lot of people who
                  would have liked to read it in their language couldn't. They knew
                  that businesses had problems trusting people and talking to those
                  who lived outside of big cities. Businesses have trouble reaching
                  Tier 2 and Tier 3 markets and talking to customers in diverse
                  regions because of the language barrier.
                </p>
                <p className="f-400 m-0 para-color">
                  Businesses that need to talk to each other well, both locally and on
                  a broad scale, use our solutions. They might be anything from
                  digital banking dashboards to regulatory advisories. We provide
                  in-depth coverage with industry-level accuracy in over 20 Indian
                  languages and over 20 other languages from around the world.
                </p>
              </div>
              <div className="col-lg-6 z-1 mt-4 mt-md-5 mt-lg-0">
                <div className="row">
                  <div className="col-md-12 pb-4 wow fadeInUp">
                    <img
                      src={getImagePath('aboutus-image/Our-Story.jpg')}
                      className="w-100 rounded-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*our values*/}
        <section className="What-we-do" style={{ backgroundColor: "#EEF5FF" }}>
          <div className="container">
            <h2 className="text-center pb-4 f-40 f-600 black wow fadeInUp">
              Devnagri is a movement,{" "}
              <span className="blue">fuelled by Innovation and AI Tech</span>
            </h2>
            <div className="">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-4 col-md-6 text-center wow fadeInUp">
                  <div className="what-we-do-main">
                    <div className="what-we-do-inner">
                      <div className="icons">
                        <img
                          src={getImagePath('aboutus-image/Innovation.png')}
                          alt=""
                          style={{ maxWidth: "50%" }}
                        />
                      </div>
                      <h5 className="f-22 f-600 black pt-3">
                        Language Inclusion for All
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center wow fadeInUp">
                  <div className="what-we-do-main">
                    <div className="what-we-do-inner">
                      <div className="icons">
                        <img
                          src={getImagePath('aboutus-image/integrity.png')}
                          alt=""
                          style={{ maxWidth: "50%" }}
                        />
                      </div>
                      <h5 className="f-22 f-600 black pt-3">
                        Bridge Digital Divides
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center wow fadeInUp">
                  <div className="what-we-do-main">
                    <div className="what-we-do-inner">
                      <div className="icons">
                        <img
                          src={getImagePath('aboutus-image/simple-scable.png')}
                          alt=""
                          style={{ maxWidth: "50%" }}
                        />
                      </div>
                      <h5 className="f-22 f-600 black pt-3">Empower Rural Voices</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center wow fadeInUp">
                  <div className="what-we-do-main">
                    <div className="what-we-do-inner">
                      <div className="icons">
                        <img
                          src={getImagePath('aboutus-image/customer-approch.png')}
                          alt=""
                          style={{ maxWidth: "41%" }}
                        />
                      </div>
                      <h5 className="f-22 f-600 black pt-3">
                        Preserving Linguistic Diversity
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center wow fadeInUp">
                  <div className="what-we-do-main">
                    <div className="what-we-do-inner">
                      <div className="icons">
                        <img
                          src={getImagePath('aboutus-image/Online-world-pana.png')}
                          alt=""
                          style={{ maxWidth: "63%" }}
                        />
                      </div>
                      <h5 className="f-22 f-600 black pt-3">
                        Accessible Public Information
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center wow fadeInUp">
                  <div className="what-we-do-main">
                    <div className="what-we-do-inner">
                      <div className="icons">
                        <img
                          src={getImagePath('aboutus-image/Online-world-cuate.png')}
                          alt=""
                          style={{ maxWidth: "50%" }}
                        />
                      </div>
                      <h5 className="f-22 f-600 black pt-3">Tech for Social Good</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Co-founders*/}
        <section className="our-cofounders py-5">
          <div className="container">
            <h2 className="f-40 f-600 black text-center pb-3 wow fadeInUp">
              Meet the <span className="blue">Founders</span>
            </h2>
            <div className="row">
              <div className="col-lg-6 col-md-6 wow fadeInUp">
                <div className="row co-founder-card align-items-center">
                  <div className="col-xl-6 col-lg-12">
                    <div className="co-founder-section">
                      <div className="co-founder-img">
                        <img
                          src={getImagePath('aboutus-image/nakul-kundra.png')}
                          alt="co-founder"
                          className="w-100 rounded-5 pb-2"
                        />
                        <h6 className="f-18 f-600 black m-0 ps-0 ps-xl-3">
                          Nakul Kundra
                        </h6>
                        <p className="m-0 para-color f-400 ps-0 ps-xl-3">
                          Co-Founder
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <p className="m-0 para-color f-400">
                      Nakul drives market strategy, collaborations, and client growth
                      across regulated areas since he knows a lot about what
                      businesses require. His experience in scaling B2B platforms
                      ensures that Devnagri AI stays in line with the changing needs
                      of both public and private organizations.
                    </p>
                    <span className="follow-icon">
                      <Link to="https://www.linkedin.com/in/kundra-nakul/">
                        <i className="bi bi-linkedin" />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 wow fadeInUp mt-4 mt-md-0 mt-lg-0">
                <div className="row co-founder-card align-items-center">
                  <div className="col-xl-6 col-lg-12">
                    <div className="co-founder-section">
                      <div className="co-founder-img">
                        <img
                          src={getImagePath('aboutus-image/himanshu-sharma.png')}
                          alt="co-founder"
                          className="w-100 rounded-5 pb-2"
                        />
                        <h6 className="f-18 f-600 black m-0 ps-0 ps-xl-3">
                          Himanshu Sharma
                        </h6>
                        <p className="m-0 para-color f-400 ps-0 ps-xl-3">
                          Co-Founder
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <p className="m-0 para-color f-400">
                      Himanshu is in charge of our product and technical teams. He
                      makes sure that every solution is strong, safe, and able to work
                      in the real world. Devnagri AI is reliable on a large scale
                      since it focuses on the integrity of tech infrastructure and
                      systems.
                    </p>
                    <span className="follow-icon">
                      <Link to="https://www.linkedin.com/in/ihimansh/">
                        <i className="bi bi-linkedin" />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*get started section*/}
        <CTASection 
          stats={[
            { value: 60, suffix: "%", label: "Improvement in sales" },
            { value: 5, suffix: "x", label: "Faster Operations", isDecimal: true },
            { value: 45, suffix: "%", label: "Reduction In Operational Costs" }
          ]}
        />
      </UniversalPage>
    );
  }, [data, loading, error, animationsEnabled]);

  return measurePerformance('About page render', () => memoizedContent);
});

LazyTeamSection.displayName = 'LazyTeamSection';
AboutContent.displayName = 'AboutContent';

const About = withErrorBoundary(
  withSuspense(AboutContent, <div>Loading About page...</div>),
  ({ error, resetError }) => (
    <div className="error-fallback">
      <div className="container text-center py-5">
        <h2>Failed to load About page</h2>
        <p>{error?.message}</p>
        <button className="btn btn-primary" onClick={resetError}>Try Again</button>
      </div>
    </div>
  )
);

export default About;