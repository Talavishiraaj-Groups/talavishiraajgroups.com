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
import SystemsPage from './pages/SystemsPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import DeliveryPolicyPage from './pages/DeliveryPolicyPage';
import RiskMitigationPage from './pages/RiskMitigationPage';
import DataHandlingPage from './pages/DataHandlingPage';
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
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/systems" element={<SystemsPage />} />
                    <Route path="/partnerships" element={<PartnershipsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/refund-policy" element={<RefundPolicyPage />} />
                    <Route path="/delivery-policy" element={<DeliveryPolicyPage />} />
                    <Route path="/risk-mitigation" element={<RiskMitigationPage />} />
                    <Route path="/data-handling" element={<DataHandlingPage />} />
                    <Route path="/ip-policy" element={<IpPolicyPage />} />
                    {/* Secondary pages */}
                    <Route path="/technology" element={<TechnologyPage />} />
                    <Route path="/community" element={<CommunityPage />} />
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