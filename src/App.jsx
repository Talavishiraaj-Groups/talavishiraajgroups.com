import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToSection from './components/ScrollToSection';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage';
import TechnologyPage from './pages/TechnologyPage';
import AboutPage from './pages/AboutPage';
import PartnershipsPage from './pages/PartnershipsPage';
import ContactPage from './pages/ContactPage';
import CommunityPage from './pages/CommunityPage';
import ProductsPage from './pages/ProductsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import IpPolicyPage from './pages/IpPolicyPage';
import CaseStudiesPage from './pages/CaseStudiesPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => setIsLoading(false);

  return (
    <>
      <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      <AnimatePresence>
        {!isLoading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <BrowserRouter>
              <div className="min-h-screen bg-white text-primary">
                <Navbar />
                <ScrollToSection />
                <main className="pt-20">
                  <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/technology" element={<TechnologyPage />} />
                    <Route path="/partnerships" element={<PartnershipsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/community" element={<CommunityPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/ip-policy" element={<IpPolicyPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </BrowserRouter>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;