import React from 'react';
import UniversalPage from '@/components/UniversalPage';

const PrivacyPolicy = () => {
  return (
    <UniversalPage 
      pageKey="privacyPolicy"
      showHero={false}
      showFeatures={false}
      showCTA={false}
    >
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h1 className="f-36 f-700 black mb-4">Privacy Policy</h1>
              <div className="legal-content">
                <p className="f-16 f-400 gray mb-4">
                  Last updated: [Date]
                </p>

                <h3 className="f-24 f-600 black mb-3">Information We Collect</h3>
                <p className="f-16 f-400 gray mb-4">
                  We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
                </p>

                <h3 className="f-24 f-600 black mb-3">How We Use Your Information</h3>
                <p className="f-16 f-400 gray mb-4">
                  We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
                </p>

                <h3 className="f-24 f-600 black mb-3">Information Sharing</h3>
                <p className="f-16 f-400 gray mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                </p>

                <h3 className="f-24 f-600 black mb-3">Contact Us</h3>
                <p className="f-16 f-400 gray">
                  If you have any questions about this Privacy Policy, please contact us at privacy@devnagri.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </UniversalPage>
  );
};

export default PrivacyPolicy;