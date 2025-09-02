
import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

// Import core components (not lazy loaded for better UX)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LazyPageWrapper from './components/LazyPageWrapper';
import { ScrollToTop } from './components/common/ScrollToTop';

// Lazy load all pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const ChatBots = lazy(() => import('./pages/ChatBots'));
const Industry = lazy(() => import('./pages/Industry'));
const Resources = lazy(() => import('./pages/Resources'));
const ResourcesDetail = lazy(() => import('./pages/ResourcesDetail'));
const TextTotext = lazy(() => import('./components/textTotext'));
const BankingFinanceTranslation = lazy(() => import('./pages/BankingFinanceTranslation'));
const Careers = lazy(() => import('./pages/Careers'));
const D2C = lazy(() => import('./pages/D2C'));
const DocumentTranslationWorkflow = lazy(() => import('./pages/DocumentTranslationWorkflow'));
const DotaApp = lazy(() => import('./pages/DotaApp'));
const MachineTranslationApi = lazy(() => import('./pages/MachineTranslationApi'));
const MachineTranslitrationApi = lazy(() => import('./pages/MachineTranslitrationApi'));
const Ocr = lazy(() => import('./pages/Ocr'));
const Voicebot = lazy(() => import('./pages/Voicebot'));
const DotaWeb = lazy(() => import('./pages/DotaWeb'));
const EcommerceTranslation = lazy(() => import('./pages/EcommerceTranslation'));
const Govt = lazy(() => import('./pages/Govt'));
const BookDemo = lazy(() => import('./pages/BookDemo'));
const TermsandConditions = lazy(() => import('./pages/TermsandConditions'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Import CSS and utilities
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

import { initializeWow } from './utils/initializeAnimations';
import { initializeFAQs } from './utils/homeUtils';
import { updateBackgroundImages } from './utils/cssUtils';

// Custom page loading component
const PageLoader = () => (
  <div className="page-loader">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="loading-skeleton">
            <div className="skeleton-hero-section">
              <div className="skeleton-line skeleton-title"></div>
              <div className="skeleton-line skeleton-subtitle"></div>
              <div className="skeleton-button"></div>
            </div>
            <div className="skeleton-content-section">
              <div className="skeleton-line"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line short"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  useEffect(() => {
    // Initialize global features once when app mounts
    const initializeApp = async () => {
      try {
        await Promise.all([
          initializeWow(),
          initializeFAQs(),
          updateBackgroundImages()
        ]);
      } catch (error) {
        console.error('Failed to initialize app:', error);
      }
    };

    initializeApp();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Main routes with lazy loading */}
              <Route path="/" element={
                <LazyPageWrapper>
                  <Home />
                </LazyPageWrapper>
              } />
              <Route path="/about-devnagri" element={
                <LazyPageWrapper>
                  <About />
                </LazyPageWrapper>
              } />
              <Route path="/banking-finance-translation" element={
                <LazyPageWrapper>
                  <BankingFinanceTranslation />
                </LazyPageWrapper>
              } />
              <Route path="/careers" element={
                <LazyPageWrapper>
                  <Careers />
                </LazyPageWrapper>
              } />
              <Route path="/contact-us" element={
                <LazyPageWrapper>
                  <Contact />
                </LazyPageWrapper>
              } />
              <Route path="/direct-to-consumer-translation" element={
                <LazyPageWrapper>
                  <D2C />
                </LazyPageWrapper>
              } />
              <Route path="/document-translation" element={
                <LazyPageWrapper>
                  <DocumentTranslationWorkflow />
                </LazyPageWrapper>
              } />
              <Route path="/app-localization" element={
                <LazyPageWrapper>
                  <DotaApp />
                </LazyPageWrapper>
              } />
              <Route path="/website-translation" element={
                <LazyPageWrapper>
                  <DotaWeb />
                </LazyPageWrapper>
              } />
              <Route path="/ecommerce-translation" element={
                <LazyPageWrapper>
                  <EcommerceTranslation />
                </LazyPageWrapper>
              } />
              <Route path="/government-translation" element={
                <LazyPageWrapper>
                  <Govt />
                </LazyPageWrapper>
              } />
              <Route path="/translation-api" element={
                <LazyPageWrapper>
                  <MachineTranslationApi />
                </LazyPageWrapper>
              } />
              <Route path="/transliteration-api" element={
                <LazyPageWrapper>
                  <MachineTranslitrationApi />
                </LazyPageWrapper>
              } />
              <Route path="/chatbot" element={
                <LazyPageWrapper>
                  <ChatBots />
                </LazyPageWrapper>
              } />
              <Route path="/ocr" element={
                <LazyPageWrapper>
                  <Ocr />
                </LazyPageWrapper>
              } />
              <Route path="/voice-bot" element={
                <LazyPageWrapper>
                  <Voicebot />
                </LazyPageWrapper>
              } />
              <Route path="/industry" element={
                <LazyPageWrapper>
                  <Industry />
                </LazyPageWrapper>
              } />
              <Route path="/blogs" element={
                <LazyPageWrapper>
                  <Resources />
                </LazyPageWrapper>
              } />
              <Route path="/book-a-demo" element={
                <LazyPageWrapper>
                  <BookDemo />
                </LazyPageWrapper>
              } />
              <Route path="/terms-and-conditions" element={
                <LazyPageWrapper>
                  <TermsandConditions />
                </LazyPageWrapper>
              } />
              <Route path="/privacy-policy" element={
                <LazyPageWrapper>
                  <PrivacyPolicy />
                </LazyPageWrapper>
              } />
              <Route path="/refund-and-cancellation-policy" element={
                <LazyPageWrapper>
                  <RefundPolicy />
                </LazyPageWrapper>
              } />
              <Route path="/resources" element={
                <LazyPageWrapper>
                  <Resources />
                </LazyPageWrapper>
              } />
              <Route path="/pricing" element={<Navigate to="https://devnagri.com/pricing" replace />} />

              {/* Translation routes */}
              <Route path="/english-to-hindi-translation" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              <Route path="/english-to-marathi-translation" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              <Route path="/english-to-tamil-translation" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              <Route path="/english-to-telugu-translation" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              <Route path="/english-to-kannada-translation" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              <Route path="/english-to-malayalam-translation" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              <Route path="/english-to-punjabi-translation" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              <Route path="/english-to-gujarati-translation" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              <Route path="/english-to-bengali-translation" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              <Route path="/english-to-odia-translation" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              <Route path="/english-to-assamese-translation" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              <Route path="/english-to-urdu-translation" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />

              {/* Transliteration routes */}
              <Route path="/english-to-hindi-transliteration" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              <Route path="/english-to-marathi-transliteration" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              <Route path="/english-to-tamil-transliteration" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              <Route path="/english-to-telugu-transliteration" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              <Route path="/english-to-kannada-transliteration" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              <Route path="/english-to-malayalam-transliteration" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              <Route path="/english-to-punjabi-transliteration" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              <Route path="/english-to-gujarati-transliteration" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              <Route path="/english-to-bengali-transliteration" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              <Route path="/english-to-odia-transliteration" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              <Route path="/english-to-assamese-transliteration" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              <Route path="/english-to-urdu-transliteration" element={
                <LazyPageWrapper>
                  <TextTotext />
                </LazyPageWrapper>
              } />
              
              {/* Blog post routes */}
              <Route path="/:link" element={
                <LazyPageWrapper>
                  <ResourcesDetail />
                </LazyPageWrapper>
              } />
              <Route path="/404" element={
                <LazyPageWrapper>
                  <NotFound />
                </LazyPageWrapper>
              } />
              
              {/* Catch-all redirect */}
              <Route path="*" element={
                <LazyPageWrapper>
                  <NotFound />
                </LazyPageWrapper>
              } />
            </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
