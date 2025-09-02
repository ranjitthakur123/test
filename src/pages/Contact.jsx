
import React from 'react';
import UniversalPage from '@/components/UniversalPage';
import { getPageData } from '@/data/pageData';

const Contact = () => {
  const pageData = getPageData('contact');

  return (
    <UniversalPage 
      pageKey="contact"
      showHero={true}
      showFeatures={false}
      showCTA={false}
    >
      {/* Contact Form */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="contact-form-wrapper p-5">
                <h3 className="f-28 f-600 black mb-4 text-center">Get in Touch</h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Your Name" 
                        required 
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Your Email" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Subject" 
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <textarea 
                      className="form-control" 
                      rows="5" 
                      placeholder="Your Message" 
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="devnagri-btn">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="row mt-5">
            <div className="col-lg-4 text-center mb-4">
              <h4 className="f-20 f-600 black mb-3">Email</h4>
              <p className="f-16 f-400 gray">{pageData.contactInfo?.email}</p>
            </div>
            <div className="col-lg-4 text-center mb-4">
              <h4 className="f-20 f-600 black mb-3">Phone</h4>
              <p className="f-16 f-400 gray">{pageData.contactInfo?.phone}</p>
            </div>
            <div className="col-lg-4 text-center mb-4">
              <h4 className="f-20 f-600 black mb-3">Address</h4>
              <p className="f-16 f-400 gray">{pageData.contactInfo?.address}</p>
            </div>
          </div>
        </div>
      </section>
    </UniversalPage>
  );
};

export default Contact;
