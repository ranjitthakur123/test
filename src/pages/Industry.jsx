import React from 'react';
import { Link } from 'react-router-dom';
import UniversalPage from '@/components/UniversalPage';
import { getImagePath } from '@/utils/imageUtils';
import { getPageData } from '@/data/pageData';

const Industry = () => {
  const pageData = getPageData('industry');

  return (
    <UniversalPage 
      pageKey="industry"
      showHero={true}
      showFeatures={false}
      showCTA={true}
    >
      {/* Industries Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="f-32 f-700 black">Industries We Serve</h2>
              <p className="f-18 f-400 gray">
                Specialized solutions for every sector
              </p>
            </div>
          </div>
          <div className="row">
            {pageData.industries?.map((industry, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="industry-card text-center p-4 h-100">
                  <img 
                    src={getImagePath(`industry-icons/${industry.icon}`)} 
                    alt={industry.name}
                    className="mb-3"
                    style={{ width: '60px', height: '60px' }}
                  />
                  <h4 className="f-20 f-600 black mb-3">{industry.name}</h4>
                  <p className="f-14 f-400 gray">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </UniversalPage>
  );
};

export default Industry;