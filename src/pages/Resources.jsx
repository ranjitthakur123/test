
import React from 'react';
import UniversalPage from '@/components/UniversalPage';
import { getImagePath } from '@/utils/imageUtils';
import { getPageData } from '@/data/pageData';

const Resources = () => {
  const pageData = getPageData('resources');

  return (
    <UniversalPage 
      pageKey="resources"
      showHero={true}
      showFeatures={false}
      showCTA={true}
    >
      {/* Resources Categories */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {pageData.categories?.map((category, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="resource-card p-4 h-100">
                  <h3 className="f-24 f-600 black mb-3">{category.name}</h3>
                  <p className="f-16 f-400 gray mb-3">{category.description}</p>
                  <span className="f-14 f-500 blue">{category.count} items</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </UniversalPage>
  );
};

export default Resources;
