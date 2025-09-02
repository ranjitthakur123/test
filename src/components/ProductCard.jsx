
import React from 'react';
import { Link } from 'react-router-dom';
import { getImagePath } from '../utils/imageUtils';

const ProductCard = ({ 
  icon, 
  title, 
  description, 
  features = [], 
  testimonial, 
  link, 
  mediaSrc, 
  mediaType = 'video',
  isActive = false 
}) => {
  return (
    <div className="inner_tab_content">
      <div className="main_tab_content">
        <div className="row">
          <div className="col-md-12">
            <div className="product-viedo-box">
              {mediaType === 'video' ? (
                <video
                  autoPlay
                  className="rounded-4"
                  style={{ width: "100%", height: "100%" }}
                >
                  <source
                    src={getImagePath(mediaSrc)}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={getImagePath(mediaSrc)}
                  alt={title}
                  className="rounded-4"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
            </div>
          </div>
          <div className="col-md-12">
            <p className="m-0 f-400 para-color pt-3 pb-3">
              {description}
            </p>
            {features.length > 0 && (
              <ul className="check-list p-0 product-showcase-feature">
                {features.map((feature, index) => (
                  <li key={index} className="f-400 para-color mb-2 d-flex gap-2">
                    <div className="width-8">
                      <img
                        src={getImagePath('tick-circle.png')}
                        className="w-100"
                        alt="tick"
                      />
                    </div>
                    <div>{feature}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="pt-2">
          {testimonial && (
            <h6 className="f-600 f-20 black">
              {testimonial}
            </h6>
          )}
          <div className="register-btn">
            <Link to={link} className="white">
              <button
                type="btn"
                className="devnagri-btn mt-3"
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
