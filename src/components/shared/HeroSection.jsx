
import React from 'react';
import { Link } from 'react-router-dom';
import { getImagePath } from '@/utils/imageUtils';

const HeroSection = ({
  title,
  subtitle,
  description,
  ctaText = "Get Started",
  ctaLink = "https://account.devnagri.com/register",
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
  heroImage,
  className = "",
  centerAlign = false
}) => {
  return (
    <section 
      className={`hero-section bg-img ${className}`}
      style={backgroundImage ? { backgroundImage: `url(${getImagePath(backgroundImage)})` } : {}}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className={`${heroImage ? 'col-lg-6' : 'col-lg-12'} ${centerAlign ? 'text-center' : ''}`}>
            {subtitle && (
              <h6 className="f-14 f-500 black pb-3 m-0 wow fadeInUp">{subtitle}</h6>
            )}
            <h1 className="f-40 f-700 black pb-2 wow fadeIn" dangerouslySetInnerHTML={{ __html: title }} />
            {description && (
              <p className="f-400 f-18 para-color m-0 pb-4 wow fadeIn">{description}</p>
            )}
            <div className="d-flex align-items-center gap-3 wow fadeInUp">
              <Link to={ctaLink} className="white">
                <button type="button" className="devnagri-btn">
                  {ctaText}
                </button>
              </Link>
              {secondaryCtaText && secondaryCtaLink && (
                <Link to={secondaryCtaLink} className="white">
                  <button type="button" className="devnagri-btn devnagri-white-btn">
                    {secondaryCtaText}
                  </button>
                </Link>
              )}
            </div>
          </div>
          {heroImage && (
            <div className="col-lg-6 mt-md-5 mt-lg-0 mt-4">
              <img src={getImagePath(heroImage)} alt="Hero" className="img-fluid" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
