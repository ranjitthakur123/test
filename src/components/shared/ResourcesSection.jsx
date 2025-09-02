
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getImagePath } from '@/utils/imageUtils';

const ResourcesSection = ({ 
  title = "Resource Hub",
  data = [],
  showMobile = true 
}) => {
  const navigate = useNavigate();

  const handleResourceClick = (item) => {
    if (item.translation === true || item.type === 'translation') {
      const fromLang = item.fromLanguage || 'english';
      const toLang = item.toLanguage || 'hindi';
      navigate(`/${fromLang}-to-${toLang}-translation`);
      return;
    }

    const link = (item.link || item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'))
      .replace(/^\/+|\/+$/g, '');
    navigate(`/${link}`, {
      state: {
        item: {
          ...item,
          link
        }
      }
    });
  };

  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="f-40 f-600 pb-2 black text-center wow fadeInUp">
          {title.includes('Resource') ? (
            <>Resource <span className="blue">Hub</span></>
          ) : (
            <span dangerouslySetInnerHTML={{ __html: title }} />
          )}
        </h2>
        
        <div className="d-none d-lg-block">
          <div className="row pt-4">
            {data.map((item, index) => (
              <div className="col-md-4 fadeInUp" key={item.id} onClick={() => handleResourceClick(item)}>
                <div className="resource-card wow fadeInUp">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="resource-img"
                  />
                  <div className="p-4">
                    <span className="resource-tag tag-blog f-400">
                      {item.type === "case-studies" ? "Case Studies" :
                        item.type === "success-stories" ? "Success Stories" :
                          item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                    <h3 className="f-20 f-600 black mb-2">{item.title}</h3>
                    <p className="f-16 f-400 para-color mb-0">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {showMobile && (
          <div className="mobile-blogs-section d-block d-lg-none">
            <div className="resources-blogs-slider">
              {data.map((item) => (
                <div className="resource-card" key={item.id} onClick={() => handleResourceClick(item)}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="resource-img"
                  />
                  <div className="p-4">
                    <span className="resource-tag tag-blog f-400">
                      {item.type === "case-studies" ? "Case Studies" :
                        item.type === "success-stories" ? "Success Stories" :
                          item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                    <h3 className="f-20 f-600 black mb-2">{item.title}</h3>
                    <p className="f-16 f-400 para-color mb-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResourcesSection;
