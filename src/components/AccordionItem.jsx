
import React from 'react';
import { Link } from 'react-router-dom';
import { getImagePath } from '../utils/imageUtils';

const AccordionItem = ({ 
  id, 
  title, 
  icon, 
  description, 
  features = [], 
  testimonial, 
  link, 
  mediaSrc, 
  mediaType = 'video',
  isExpanded = false 
}) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading_${id}`}>
        <button
          className={`accordion-button ${!isExpanded ? 'collapsed' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded={isExpanded}
          aria-controls={`collapse${id}`}
        >
          <div className="tab_innerimg_icon">
            <img
              src={getImagePath(icon)}
              alt={title}
            />
          </div>
          <div className="nav_btncontent f-20 f-600">{title}</div>
        </button>
      </h2>
      <div
        id={`collapse${id}`}
        className={`accordion-collapse collapse ${isExpanded ? 'show' : ''}`}
        aria-labelledby={`heading_${id}`}
      >
        <div className="accordion-body">
          <div className="inner_tab_content">
            <div className="main_mobile_tab_content">
              <div className="row">
                <div className="col-md-12">
                  {mediaType === 'video' ? (
                    <video
                      autoPlay
                      loop
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
                <div className="col-md-12">
                  <p className="m-0 f-400 para-color pt-3 pb-3">
                    {description}
                  </p>
                  {features.length > 0 && (
                    <ul className="check-list p-0">
                      {features.map((feature, index) => (
                        <li key={index} className="f-400 para-color mb-2 d-flex gap-2">
                          <div className="width-3">
                            <img
                              src={getImagePath('tick-circle.png')}
                              className="w-100"
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
                    <button type="btn" className="devnagri-btn mt-3">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
