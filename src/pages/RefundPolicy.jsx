
import React from 'react';
import UniversalPage from '@/components/UniversalPage';

const RefundPolicy = () => {
  return (
    <UniversalPage 
      pageKey="refundPolicy"
      showHero={false}
      showFeatures={false}
      showCTA={false}
    >
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h1 className="f-36 f-700 black mb-4">Refund and Cancellation Policy</h1>
              <div className="legal-content">
                <p className="f-16 f-400 gray mb-4">
                  Last updated: [Date]
                </p>
                
                <h3 className="f-24 f-600 black mb-3">Refund Eligibility</h3>
                <p className="f-16 f-400 gray mb-4">
                  Refunds are available within 30 days of purchase for annual plans, subject to our fair usage policy.
                </p>
                
                <h3 className="f-24 f-600 black mb-3">Cancellation Process</h3>
                <p className="f-16 f-400 gray mb-4">
                  You can cancel your subscription at any time through your account dashboard or by contacting our support team.
                </p>
                
                <h3 className="f-24 f-600 black mb-3">Processing Time</h3>
                <p className="f-16 f-400 gray mb-4">
                  Refunds typically take 5-10 business days to process and appear in your original payment method.
                </p>
                
                <h3 className="f-24 f-600 black mb-3">Contact Support</h3>
                <p className="f-16 f-400 gray">
                  For refund requests or questions, please contact us at support@devnagri.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </UniversalPage>
  );
};

export default RefundPolicy;
