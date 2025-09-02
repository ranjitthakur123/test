import React from 'react';
import UniversalPage from '@/components/UniversalPage';
import { getImagePath } from '@/utils/imageUtils';

const Govt = () => {
  return (
    <UniversalPage 
      pageKey="government"
      showHero={true}
      showFeatures={true}
      showCTA={true}
    >
      {/* Custom Government Content */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <h2 className="f-32 f-700 black mb-4">Government Translation Solutions</h2>
              <p className="f-16 f-400 gray mb-4">
                Secure and compliant translation services for government agencies and public sector organizations.
              </p>
            </div>
            <div className="col-lg-6">
              <img 
                src={getImagePath('industry-icons/gov/GOV.png')} 
                alt="Government" 
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </UniversalPage>
  );
};

export default Govt;