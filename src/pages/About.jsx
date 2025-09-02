import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initializeCounters, initializeSliders } from '@/utils/initializeAnimations';
import { initializeSliders1 } from '@/utils/initScripts';
import { 
  Link, 
  getImagePath, 
  HeroSection,
  BrandSection,
  CTASection 
} from '@/utils/sharedImports';



const About = () => {
const location = useLocation();


useEffect(() => {
    initializeSliders();
    initializeSliders1();
  }, []);

  useEffect(() => {
    // Match your exact path
    if (location.pathname === "/about-devnagri") {
      const hasReloaded = sessionStorage.getItem("reloadedOnce1");

      if (!hasReloaded) {
        sessionStorage.setItem("reloadedOnce1", "true");

        // Force hard reload after route has fully changed
        setTimeout(() => {
          window.location.href = window.location.href;
        }, 50);
      }
    }
  }, [location]);

(function() {
    if (window.localStorage) {
        if (!localStorage.getItem('alreadyReloaded')) {
            localStorage.setItem('alreadyReloaded', 'true');
            window.location.reload();
        }
    }
})();

  useEffect(() => {
    const $ = window.$; // assuming jQuery is available globally

    if ($ && $('.team-slider').length && !$('.team-slider').hasClass('slick-initialized')) {
      $('.team-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 1399.99,
            settings: { slidesToShow: 3 },
          },
          {
            breakpoint: 1080,
            settings: { slidesToShow: 2 },
          },
          {
            breakpoint: 768.99,
            settings: { slidesToShow: 1 },
          },
        ],
      });
    }

    // Optional: Cleanup on unmount
    return () => {
      if ($ && $('.team-slider').hasClass('slick-initialized')) {
        $('.team-slider').slick('unslick');
      }
    };
  }, []);

  return (
    <>
      <head>
        <title>About - Devnagri</title>
        <meta
          name="description"
          content="Learn about Devnagri, India's leading AI-powered translation platform, and our mission to break language barriers for businesses."
        />
        <meta
          name="keywords"
          content="About Devnagri, Devnagri Mission"
        />
      </head>
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
                {/* <div class="col-md-6 wow fadeInUp">
        <img src={getImagePath('about-2.jpg')}" class="w-100 rounded-4">
      </div>
      <div class="col-md-6 wow fadeInUp">
        <img src={getImagePath('about-3.jpg')}" class="w-100 rounded-4">
      </div> */}
              </div>
            </div>
          </div>
          {/* <img src={getImagePath(Blob.png" class="story-bg" alt="bg-img"> */}
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
                    {/* <p class="f-400 para-color m-0">We embrace technology and constantly push the boundaries of AI and machine learning to create cutting-edge language solutions.</p> */}
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
                    {/* <p class="f-400 para-color m-0">Our platform enables businesses to automate and manage localization of
            their websites, apps, documents, and multimedia content in regional Indian languages.</p> */}
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
                    {/* <p class="f-400 para-color m-0">We offer tailored solutions for: E-commerce, Government & Public Sector,
            Education & eLearning, Healthcare, Media & Entertainment</p> */}
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
                    {/* <p class="f-400 para-color m-0">Developers can integrate Devnagri’s API to automatically translate and
            publish content across platforms.
          </p> */}
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
                    {/* <p class="f-400 para-color m-0">Using OCR and NLP, we convert regional printed/scanned documents into
            usable digital formats with language understanding.</p> */}
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
                    {/* <p class="f-400 para-color m-0">Using OCR and NLP, we convert regional printed/scanned documents into
            usable digital formats with language understanding.</p> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="text-center wow fadeInUp">
    <button type="btn" class="devnagri-btn mt-3">
      <Link to="#" class="white"><img src={getImagePath('video-play-btn.png')}" class="pe-1"
          style="filter: brightness(0) invert(1);"> Request a Demo </a>
    </button>
  </div> */}
          </div>
        </div>
      </section>
      {/*Our mission and vission*/}
      {/* <section class="mission-vission bg-img pb-5" style="background-image: url(/assets/images/awards-bg.png);">
    <div class="container">
<div class="row">
  <div class="col-md-6">
    <img src={getImagePath('Online-world-amico.png')}" alt="mission-vission" class="w-100">
  </div>
  <div class="col-md-6">
    <h2 class="f-40 f-600 black pb-2">Mission & <span class="blue">Vission</span></h2>
    <p class="para-color f-400 m-0 pb-2">At Devnagri, we aim to make every Indian language digitally accessible.
      Our
      mission is to break language barriers by combining the power of AI with human intelligence to deliver fast,
      accurate, and scalable translations. We envision a future where businesses, governments, and individuals can
      easily communicate and grow in their own language — creating a truly inclusive digital India.</p>
    <h6 class="f-18 f-600 black pb-2">What Drives Us Forward:</h6>
    <ul class="check-list p-0">
      <li class="f-400 black mb-2 d-flex gap-1">
        <div class="width-5"><img src={getImagePath('tick-circle.png')}" width="26" height="26"></div>
        <div>
          <p class="f-400 m-0"><b>AI + Human Expertise:</b> Smart tech meets human touch for accurate,
            culturally-aware translations.</p>
        </div>
      </li>
      <li class="f-400 black mb-2 d-flex gap-1">
        <div class="width-5"><img src={getImagePath('tick-circle.png')}" width="26" height="26"></div>
        <div>
          <p class="f-400 m-0"><b>Fast & Scalable:</b> Instant API responses built to handle high-volume
            translation needs.</p>
        </div>
      </li>
      <li class="f-400 black mb-2 d-flex gap-1">
        <div class="width-5"><img src={getImagePath('tick-circle.png')}" width="26" height="26"></div>
        <div>
          <p class="f-400 m-0"><b>Native Language Growth:</b> Helping brands grow by speaking their audience's
            language.</p>
        </div>
      </li>
      <li class="f-400 black mb-2 d-flex gap-1">
              <div class="width-5"><img src={getImagePath('tick-circle.png')}" width="26" height="26"></div>
        <div>
          <p class="f-400 m-0"><b>Easy Integration:</b> Developer-friendly APIs that plug right into your
            workflow.</p>
        </div>
      </li>
    </ul>
    <div class="register-btn">
      <button type="btn" class="devnagri-btn mt-3"><Link to="#" class="white">Contact Us</Link></button>
    </div>
  </div>
</div>
    </div>
  </section> */}
      {/*Keytakeaways section*/}
      {/* <section class="keytakeaways" style="background-color: #EEF5FF;">
    <div class="container">
<div class="text-center">
  <h2 class="f-40 f-600 pb-3">Key <span class="blue">Takeaways</span></h2>
  <p class="f-400 m-0 para-color">At Devnagri, we combine advanced AI technology with human expertise to
    <br>deliver fast, scalable, and accurate translations across Indian languages.
  </p>
</div>
    </div>
  </section> */}
      {/*inner keytakeaways*/}
      {/* <section class="main-inner-keytakeawys py-3">
    <div class="container">
<div class="inner-keytakeaways p-5">
  <div class="row align-items-center justify-content-between">
    <div class="col-md-4">
      <div class="keytakeaways-feature me-4">
        <h5 class="black f-20 f-600">Scalability</h5>
        <p class="f-400 m-0 para-color">Designed to handle millions of words with ease across Indian languages.
        </p>
      </div>
      <div class="keytakeaways-feature mt-4 me-4">
        <h5 class="black f-20 f-600">Speed</h5>
        <p class="f-400 m-0 para-color">Real-time API responses in less than 1 second.</p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="keytakeaways-img rounded-circle">
        <img src={getImagePath('Innovation.gif')}" class="w-100">
      </div>
    </div>
    <div class="col-md-4">
      <div class="keytakeaways-feature ms-4">
        <h5 class="black f-20 f-600">Accuracy</h5>
        <p class="f-400 m-0 para-color">AI + human proofreading ensures high translation quality.</p>
      </div>
      <div class="keytakeaways-feature mt-4 ms-4">
        <h5 class="black f-20 f-600">Context-Awareness</h5>
        <p class="f-400 m-0 para-color">Understands tone, intent, and domain-specific usage.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  </section> */}
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
                      {/* <p class="m-0 para-color f-400 ps-3">Sales & Marketing</p> */}
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
                      {/* <p class="m-0 para-color f-400 ps-3">Operations & Technology</p> */}
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
      {/*our team*/}
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
      {/*get started section*/}
      <CTASection 
        stats={[
          { value: 60, suffix: "%", label: "Improvement in sales" },
          { value: 5, suffix: "x", label: "Faster Operations", isDecimal: true },
          { value: 45, suffix: "%", label: "Reduction In Operational Costs" }
        ]}
      />


    </>


  );
};

export default About; 