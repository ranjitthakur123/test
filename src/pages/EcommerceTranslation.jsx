import React from 'react';
import UniversalPage from '@/components/UniversalPage';
import { getImagePath } from '@/utils/imageUtils';

const EcommerceTranslation = () => {
  return (
    <UniversalPage 
      pageKey="ecommerce"
      showHero={true}
      showFeatures={true}
      showCTA={true}
    >
      {/* Custom E-commerce Content */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <h2 className="f-32 f-700 black mb-4">Global E-commerce Solutions</h2>
              <p className="f-16 f-400 gray mb-4">
                Expand your online business globally with our specialized e-commerce translation and localization services.
              </p>
            </div>
            <div className="col-lg-6">
              <img 
                src={getImagePath('industry-icons/ecommerce/e-commerce.png')} 
                alt="E-commerce" 
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </UniversalPage>
  );
};

export default EcommerceTranslation;