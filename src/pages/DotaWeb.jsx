import React from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '@/components/PageTemplate';
import { getImagePath } from '@/utils/imageUtils';
import { getPageData } from '@/data/pageData';

const DotaWeb = () => {
  const pageData = getPageData('dotaWeb');

  return (
    <PageTemplate pageKey="dotaWeb" containerFluid>
      {/* Hero Section */}
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
                Increase Global Reach with{" "}
                <span className="blue">AI-powered Website Translation</span>
              </h1>
              <p className="f-400 pb-2 pe-3 wow fadeIn">
                {pageData.hero.description}
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
                  src={getImagePath('products-images/dota-web/dota-web-cta.png')}
                  alt="DOTA Web"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="f-32 f-700 black">Key Features</h2>
            </div>
          </div>
          <div className="row">
            {pageData.features.map((feature, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="feature-card text-center p-4">
                  <h4 className="f-24 f-600 black mb-3">{feature.title}</h4>
                  <p className="f-16 f-400 gray">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="f-32 f-700 black mb-3">Ready to Get Started?</h2>
          <p className="f-18 f-400 gray mb-4">
            Transform your website into a multilingual platform today
          </p>
          <Link to="/book-a-demo">
            <button className="devnagri-btn">Book a Demo</button>
          </Link>
        </div>
      </section>
    </PageTemplate>
  );
};

export default DotaWeb;