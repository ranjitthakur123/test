
import React from 'react';
import { getImagePath } from '@/utils/imageUtils';

const BrandSection = ({ 
  showStats = false, 
  className = "",
  backgroundColor = "" 
}) => {
  const brands = [
    'brand-meesho.png',
    'brand-icici-bank.png', 
    'brand-idfc.png',
    'brand-yes-bank.png',
    'brand-sbi-mutual.png',
    'brand-tataia.png',
    'brand-nestle.png',
    'brand-my-gov.png',
    'brand-nitiayog.png'
  ];

  return (
    <section className={`brand-stats-section-home brand-stats-section bg-img ${className}`} style={backgroundColor ? { backgroundColor } : {}}>
      <div className="container">
        <div className="swiper brand-slider">
          <div className="brand-slider-wrapper">
            {brands.map((brand, index) => (
              <div key={index} className="brand-item-slide">
                <img
                  src={getImagePath(brand)}
                  alt={`Brand ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        
        {showStats && (
          <div className="stats-box mt-4">
            <p className="m-0 f-28 f-600 black wow fadeInUp text-center">
              Digitizing Multilingual{" "}
              <span className="blue">Business Communications</span>
            </p>
            <div className="row py-3">
              <div className="col-lg-4 col-md-6 col-12 mb-4 mb-md-0">
                <div className="stat">
                  <h3 className="f-34 f-600 black pb-2 wow fadeInUp">
                    <span className="counter f-600 black" data-target={40} data-suffix="+">0</span>
                  </h3>
                  <div className="d-flex align-items-center gap-3">
                    <div className="icon-box wow fadeInUp">
                      <img src={getImagePath('menu-icon/language.png')} />
                    </div>
                    <div className="counter-text">
                      <p className="f-18 black f-500 m-0 wow fadeInUp">
                        Languages<br />(Indian &amp; International)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4 mb-md-0">
                <div className="stat">
                  <h3 className="f-34 f-600 black pb-2 wow fadeInUp">
                    <span className="counter f-600 black" data-target={200} data-suffix="+">0</span>
                  </h3>
                  <div className="d-flex align-items-center gap-3">
                    <div className="icon-box wow fadeInUp">
                      <img src={getImagePath('menu-icon/customer.png')} />
                    </div>
                    <div className="counter-text">
                      <p className="f-18 black f-500 m-0 wow fadeInUp">Customers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12">
                <div className="">
                  <h3 className="f-34 f-600 black pb-2 wow fadeInUp">
                    <span className="counter f-600 black" data-target={500} data-format="short" data-suffix="M+">0</span>
                  </h3>
                  <div className="d-flex align-items-center gap-3">
                    <div className="icon-box wow fadeInUp">
                      <img src={getImagePath('menu-icon/words.png')} />
                    </div>
                    <div className="counter-text">
                      <p className="f-18 black f-500 m-0 wow fadeInUp">Words localized</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrandSection;
