import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css';
import { getImagePath } from '../utils/imageUtils';

const Footer = () => {

  const handleRefreshClick = () => {
    window.location.reload();
  };

  return (
    <>
      {/* Footer */}
      <footer className="footer mt-5">
        <div className="container">
          <div className="row text-start justify-content-between">
            <div className="col-lg-4 col-12">
              <div className="logo mb-2 d-inline-block">
                <Link to="/" className="footer-logo">
                  <img src={getImagePath('Devnagri-Logo-Blue.svg')} alt="Devnagri Logo" />
                </Link>
              </div>
              <p className="f-400 para-color">
                Each solution we deliver aims to empower the Multilingual voices of
                people, who make up more than half of the world population.
              </p>
              <div className="footer-contact-details d-flex gap-2">
                <div className="address-icon-footer">
                  <i className="bi bi-geo-alt-fill blue f-18" />
                </div>
                <div className="address-detils-footer">
                  <Link
                    to="https://maps.app.goo.gl/WjaPjaTE9xWqe19o9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="f-400 para-color">
                      BGR Building Plot No. 1, 3rd Floor, Film City, Sector 16A, Noida
                    </p>
                  </Link>
                </div>
              </div>
              <div className="footer-contact-details d-flex gap-2">
                <div className="phone-icon-footer">
                  <i className="bi bi-telephone-fill blue f-18" />
                </div>
                <div className="phone-detils-footer">
                  {/* <p className="f-400 para-color">+91-7302020284</p> */}
                  <a href="tel:+917302020284" className="f-400 para-color text-decoration-none">
                    +91-7302020284
                  </a>
                </div>
              </div>
              <div className="footer-contact-details d-flex gap-2">
                <div className="email-icon-footer">
                  <i className="bi bi-envelope-fill blue f-18" />
                </div>
                <div className="email-detils-footer">
                  {/* <p className="f-400 para-color">sales@devnagri.com</p> */}
                  <a href="mailto:sales@devnagri.com" className="f-400 para-color text-decoration-none">
                    sales@devnagri.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="row justify-content-end">
                <div className="col-lg-5 col-6">
                  <div className="mb-4">
                    <h6 className="f-600 f-20 blue pb-2 m-0">Company</h6>
                    <ul className="p-0">
                      <Link to="/about-devnagri" reloadDocument onClick={handleRefreshClick} >
                        <li className="para-color f-400 mb-2">About</li>
                      </Link>
                      <Link to="/careers">
                        <li className="para-color f-400 mb-2">Careers</li>
                      </Link>
                      <Link to="/blogs?tab=blogs">
                        <li className="para-color f-400 mb-2">Blog</li>
                      </Link>
                      <Link to="/blogs?tab=announcements">
                        <li className="para-color f-400 mb-2">News</li>
                      </Link>
                      <Link to="/blogs?tab=case-studies">
                        <li className="para-color f-400 mb-2">Case Studies</li>
                      </Link>
                      {/* Keep external links as a tags */}
                      <Link to="https://docs.devnagri.com/">
                        <li className="para-color f-400 mb-2">Developer Hub</li>
                      </Link>
                      <Link to="/contact-us">
                        <li className="para-color f-400 mb-2">Contact Us</li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-7 col-6">
                  <div className="mb-4">
                    <h6 className="f-600 f-20 blue pb-2 m-0">
                      Machine Translation
                    </h6>
                    <ul className="p-0">
                      <Link to="/website-translation">
                        <li className="para-color f-400 mb-2">DOTA (Web)</li>
                      </Link>
                      <Link to="/app-localization">
                        <li className="para-color f-400 mb-2">DOTA (APP)</li>
                      </Link>
                      <Link to="/translation-api">
                        <li className="para-color f-400 mb-2">Translation API</li>
                      </Link>
                      <Link to="/transliteration-api">
                        <li className="para-color f-400 mb-2">
                          Transliteration API
                        </li>
                      </Link>
                      <Link to="/document-translation">
                        <li className="para-color f-400 mb-2">Document Engine</li>
                      </Link>
                      <Link to="/english-to-hindi-translation">
                        <li className="para-color f-400 mb-2">Translate Any Text</li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="row justify-content-end">
                <div className="col-lg-7 col-6">
                  <div className="">
                    <h6 className="f-600 f-20 blue pb-2 m-0">Multilingual Bots</h6>
                    <ul className="p-0">
                      <Link to="/chatbot">
                        <li className="para-color f-400 mb-2">Chat Bot</li>
                      </Link>
                      <Link to="/voice-bot">
                        <li className="para-color f-400 mb-2">Voice Bot</li>
                      </Link>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <ul className="p-0">
                      <Link to="/ocr">
                        <li className="para-color f-20 f-600 mb-2 blue">OCR Workflow</li>
                      </Link>
                      <Link to="/brain-slms">
                        <li className="para-color f-20 f-600 mb-2 blue">Brain SLM's</li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-6">
                  <div className="mb-4">
                    <h6 className="f-600 f-20 blue pb-2 m-0">Industries</h6>
                    <ul className="p-0">
                      <Link to="/banking-finance-translation">
                        <li className="para-color f-400 mb-2">BFSI</li>
                      </Link>
                      <Link to="/government-translation">
                        <li className="para-color f-400 mb-2">Government</li>
                      </Link>
                      <Link to="/direct-to-consumer-translation">
                        <li className="para-color f-400 mb-2">D2C</li>
                      </Link>
                      <Link to="/ecommerce-translation">
                        <li className="para-color f-400 mb-2">E&#8209;commerce</li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-section py-2 d-none d-lg-block mt-0 mt-md-4">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-4">
                <p className="f-400 white m-0">
                  © 2025 Devnagri AI Pvt Ltd. All Rights Reserved
                </p>
              </div>
              <div className="col-lg-5">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <ul className="p-0 m-0">
                      <Link to="/privacy-policy">
                        <li className="f-400 white m-0 text-end">Privacy Policy</li>
                      </Link>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="p-0 m-0">
                      <Link to="/terms-and-conditions">
                        <li className="f-400 white m-0 text-end">
                          Terms &amp; Conditions
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="p-0 m-0">
                      <Link to="/refund-and-cancellation-policy">
                        <li className="f-400 white m-0">Refund Policy</li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="social-icons d-flex gap-3 justify-content-end">
                  {/* Keep social media links as a tags since they're external */}
                  <Link to="https://in.linkedin.com/company/devnagriai">
                    <i className="bi bi-linkedin f-18" />
                  </Link>
                  <Link to="https://www.facebook.com/DevnagriAI">
                    <i className="bi bi-facebook f-18" />
                  </Link>
                  <Link to="https://x.com/devnagriai">
                    <i className="fab fa-x-twitter f-18" />
                  </Link>
                  <Link to="https://www.instagram.com/devnagriai/">
                    <i className="bi bi-instagram f-18" />
                  </Link>
                  <Link to="https://www.youtube.com/@devnagriAI">
                    <i className="bi bi-youtube f-18" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-section py-2 d-block d-lg-none">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-4">
                <ul className="p-0 m-0">
                  <Link to="/privacy-policy">
                    <li className="f-400 white m-0 f-12">Privacy Policy</li>
                  </Link>
                </ul>
              </div>
              <div className="col-lg-4 col-4">
                <ul className="p-0 m-0">
                  <Link to="/terms-and-conditions">
                    <li className="f-400 white m-0 f-12">Terms &amp; Conditions</li>
                  </Link>
                </ul>
              </div>
              <div className="col-lg-4 col-4">
                <ul className="p-0 m-0">
                  <Link to="/refund-and-cancellation-policy">
                    <li className="f-400 white m-0 f-12">Refund Policy</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-12 mt-2">
                <p className="f-400 white m-0">
                  © 2025 Devnagri AI Pvt Ltd. All Rights Reserved
                </p>
              </div>
              <div className="col-lg-6 col-12 mt-2">
                <div className="social-icons d-flex gap-3 justify-content-start">
                  {/* Keep social media links as a tags since they're external */}
                  <Link to="https://in.linkedin.com/company/devnagriai">
                    <i className="bi bi-linkedin f-18" />
                  </Link>
                  <Link to="https://www.facebook.com/DevnagriAI">
                    <i className="bi bi-facebook f-18" />
                  </Link>
                  <Link to="https://x.com/devnagriai">
                    <i className="fab fa-x-twitter f-18" />
                  </Link>
                  <Link to="https://www.instagram.com/devnagriai/">
                    <i className="bi bi-instagram f-18" />
                  </Link>
                  <Link to="https://www.youtube.com/@devnagriAI">
                    <i className="bi bi-youtube f-18" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;