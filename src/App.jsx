import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ChatBots from './pages/ChatBots';
import Industry from './pages/Industry';
import Resources from './pages/Resources';
import ResourcesDetail from './pages/ResourcesDetail';
import TextTotext from './components/textTotext';

// Import CSS and JS
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Added Bootstrap JS import
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import BankingFinanceTranslation from './pages/BankingFinanceTranslation';
import Careers from './pages/Careers';
import D2C from './pages/D2C';
import DocumentTranslationWorkflow from './pages/DocumentTranslationWorkflow';
import DotaApp from './pages/DotaApp';
import MachineTranslationApi from './pages/MachineTranslationApi';
import MachineTranslitrationApi from './pages/MachineTranslitrationApi';
import Ocr from './pages/Ocr';
import Voicebot from './pages/Voicebot';
import DotaWeb from './pages/DotaWeb';
import EcommerceTranslation from './pages/EcommerceTranslation';
import Govt from './pages/Govt';
import BookDemo from './pages/BookDemo';
import TermsandConditions from './pages/TermsandConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';

import { initializeWow } from './utils/initializeAnimations';
import { initializeCounters, initializeFAQs } from './utils/homeUtils';
import { ScrollToTop } from './components/common/ScrollToTop';
import { updateBackgroundImages } from './utils/cssUtils';
import NotFound from './pages/NotFound';


function App() {
  useEffect(() => {
    // Initialize global features once when app mounts
    initializeWow();
    initializeFAQs();
    updateBackgroundImages();
  }, []);

    

  return (
    
      <Router>
        <ScrollToTop />
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              {/* Main routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about-devnagri" element={<About />} />
              <Route path="/banking-finance-translation" element={<BankingFinanceTranslation />} /> 
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/direct-to-consumer-translation" element={<D2C />} />
              <Route path="/document-translation" element={<DocumentTranslationWorkflow />} />
              <Route path="/app-localization" element={<DotaApp />} />
              <Route path="/website-translation" element={<DotaWeb />} />
              <Route path="/ecommerce-translation" element={<EcommerceTranslation />} />  {/* Fixed typo in route */}
              <Route path="/government-translation" element={<Govt />} />
              <Route path="/translation-api" element={<MachineTranslationApi />} />
              <Route path="/transliteration-api" element={<MachineTranslitrationApi />} />
              <Route path="/chatbot" element={<ChatBots />} />
              <Route path="/ocr" element={<Ocr />} />
              <Route path="/voice-bot" element={<Voicebot />} />
              <Route path="/industry" element={<Industry />} />
              <Route path="/blogs" element={<Resources />} />
              <Route path="/book-a-demo" element={<BookDemo />} />
              <Route path="/terms-and-conditions" element={<TermsandConditions />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/refund-and-cancellation-policy" element={<RefundPolicy />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/pricing" element={<Navigate to="https://devnagri.com/pricing" replace />} />

              {/* Translation routes */}
              <Route path="/english-to-hindi-translation" element={<TextTotext />} />
              <Route path="/english-to-marathi-translation" element={<TextTotext />} />
              <Route path="/english-to-tamil-translation" element={<TextTotext />} />
              <Route path="/english-to-telugu-translation" element={<TextTotext />} />
              <Route path="/english-to-kannada-translation" element={<TextTotext />} />
              <Route path="/english-to-malayalam-translation" element={<TextTotext />} />
              <Route path="/english-to-punjabi-translation" element={<TextTotext />} />
              <Route path="/english-to-gujarati-translation" element={<TextTotext />} />
              <Route path="/english-to-bengali-translation" element={<TextTotext />} />
              <Route path="/english-to-odia-translation" element={<TextTotext />} />
              <Route path="/english-to-assamese-translation" element={<TextTotext />} />
              <Route path="/english-to-urdu-translation" element={<TextTotext />} />

              {/* Transliteration routes */}
              <Route path="/english-to-hindi-transliteration" element={<TextTotext />} />
              <Route path="/english-to-marathi-transliteration" element={<TextTotext />} />
              <Route path="/english-to-tamil-transliteration" element={<TextTotext />} />
              <Route path="/english-to-telugu-transliteration" element={<TextTotext />} />
              <Route path="/english-to-kannada-transliteration" element={<TextTotext />} />
              <Route path="/english-to-malayalam-transliteration" element={<TextTotext />} />
              <Route path="/english-to-punjabi-transliteration" element={<TextTotext />} />
              <Route path="/english-to-gujarati-transliteration" element={<TextTotext />} />
              <Route path="/english-to-bengali-transliteration" element={<TextTotext />} />
              <Route path="/english-to-odia-transliteration" element={<TextTotext />} />
              <Route path="/english-to-assamese-transliteration" element={<TextTotext />} />
              <Route path="/english-to-urdu-transliteration" element={<TextTotext />} />
              
              {/* Blog post routes - exclude paths containing 'to' */}
              <Route path="/:link" element={<ResourcesDetail />} />
              <Route path="/404" element={<NotFound />} />
              
              {/* Catch-all redirect */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
