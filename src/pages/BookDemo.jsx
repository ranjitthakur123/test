import React from 'react';
import UniversalPage from '@/components/UniversalPage';
import { getPageData } from '@/data/pageData';

const BookDemo = () => {
  const pageData = getPageData('bookDemo');

  return (
    <UniversalPage 
      pageKey="bookDemo"
      showHero={true}
      showFeatures={false}
      showCTA={false}
    >
      {/* Demo Booking Form */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="demo-form-wrapper p-5">
                <h3 className="f-28 f-600 black mb-4 text-center">Schedule Your Demo</h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="First Name" 
                        required 
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Last Name" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Business Email" 
                        required 
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input 
                        type="tel" 
                        className="form-control" 
                        placeholder="Phone Number" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Company Name" 
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <select className="form-control" required>
                      <option value="">Select Use Case</option>
                      <option value="website">Website Translation</option>
                      <option value="app">App Localization</option>
                      <option value="documents">Document Translation</option>
                      <option value="api">API Integration</option>
                    </select>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="devnagri-btn">Schedule Demo</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Demo Benefits */}
          <div className="row mt-5">
            <div className="col-12 text-center mb-4">
              <h3 className="f-24 f-600 black">What You'll Get</h3>
            </div>
            {pageData.benefits?.map((benefit, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-3">
                <div className="benefit-item text-center">
                  <p className="f-16 f-400 gray">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </UniversalPage>
  );
};

export default BookDemo;