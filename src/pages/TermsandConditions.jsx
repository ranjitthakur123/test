import React from 'react';
import UniversalPage from '@/components/UniversalPage';

const TermsandConditions = () => {
  return (
    <UniversalPage 
      pageKey="termsConditions"
      showHero={false}
      showFeatures={false}
      showCTA={false}
    >
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h1 className="f-36 f-700 black mb-4">Terms and Conditions</h1>
              <div className="legal-content">
                <p className="f-16 f-400 gray mb-4">
                  Last updated: [Date]
                </p>

                <h3 className="f-24 f-600 black mb-3">Acceptance of Terms</h3>
                <p className="f-16 f-400 gray mb-4">
                  By accessing and using Devnagri's services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h3 className="f-24 f-600 black mb-3">Use License</h3>
                <p className="f-16 f-400 gray mb-4">
                  Permission is granted to temporarily use Devnagri's services for personal, non-commercial transitory viewing only.
                </p>

                <h3 className="f-24 f-600 black mb-3">Service Availability</h3>
                <p className="f-16 f-400 gray mb-4">
                  We strive to maintain service availability but do not guarantee uninterrupted access to our services.
                </p>

                <h3 className="f-24 f-600 black mb-3">Contact Information</h3>
                <p className="f-16 f-400 gray">
                  For questions about these Terms and Conditions, please contact us at legal@devnagri.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </UniversalPage>
  );
};

export default TermsandConditions;