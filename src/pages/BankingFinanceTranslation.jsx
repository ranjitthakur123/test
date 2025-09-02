import React from 'react';
import UniversalPage from '@/components/UniversalPage';
import { getImagePath } from '@/utils/imageUtils';

const BankingFinanceTranslation = () => {
  return (
    <UniversalPage
      pageKey="bankingFinance"
      showHero={true}
      showFeatures={true}
      showCTA={true}
    >
      {/* Custom Banking Finance Content */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <h2 className="f-32 f-700 black mb-4">Industry-Specific Solutions</h2>
              <p className="f-16 f-400 gray mb-4">
                Our banking and finance translation services ensure compliance with regulatory requirements while maintaining the highest levels of security and accuracy.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src={getImagePath('industry-icons/BFSI/BFSI.png')}
                alt="Banking Finance"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </UniversalPage>
  );
};

export default BankingFinanceTranslation;