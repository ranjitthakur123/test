
import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import { getImagePath } from '@/utils/imageUtils';
import { getPageData } from '@/data/pageData';

const Careers = () => {
  const pageData = getPageData('careers');

  return (
    <PageTemplate pageKey="careers">
      {/* Hero Section */}
      <section
        className="hero-section bg-img py-5"
        style={{
          backgroundImage: `url(${getImagePath('simple-banner-background.png')})`
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="f-40 f-700 black pb-2 wow fadeIn">
                {pageData.hero.title}
              </h1>
              <p className="f-18 f-400 pb-3 wow fadeIn">
                {pageData.hero.subtitle}
              </p>
              <p className="f-16 f-400 gray wow fadeIn">
                {pageData.hero.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="f-32 f-700 black">Why Join Devnagri?</h2>
            </div>
          </div>
          <div className="row">
            {pageData.benefits.map((benefit, index) => (
              <div key={index} className="col-lg-6 col-md-6 mb-3">
                <div className="d-flex align-items-center">
                  <img
                    src={getImagePath('tick-circle.png')}
                    alt="tick"
                    className="me-3"
                    width="24"
                    height="24"
                  />
                  <p className="f-16 f-400 black mb-0">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="f-32 f-700 black">Open Positions</h2>
            </div>
          </div>
          <div className="row">
            {pageData.openPositions.map((position, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="position-card bg-white p-4 rounded shadow-sm">
                  <h4 className="f-20 f-600 black mb-2">{position.title}</h4>
                  <p className="f-14 f-400 blue mb-1">{position.department}</p>
                  <p className="f-14 f-400 gray mb-3">{position.location} • {position.type}</p>
                  <button className="devnagri-btn-outline w-100">Apply Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="f-32 f-700 black mb-3">Don't See Your Role?</h2>
          <p className="f-18 f-400 gray mb-4">
            We're always looking for talented individuals. Send us your resume!
          </p>
          <a href="mailto:careers@devnagri.com">
            <button className="devnagri-btn">Send Your Resume</button>
          </a>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Careers;
