
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import AreasPage from './pages/AreasPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import PublicAffairsPage from './pages/PublicAffairsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/areas" element={<AreasPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/public-affairs" element={<PublicAffairsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster position="bottom-right" />
      </Router>
    </LanguageProvider>
  );
}

export default App;
