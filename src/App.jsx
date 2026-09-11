import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToSection from './components/ScrollToSection';
import { usePageViews } from './components/analytics';
import LandingPage from './pages/LandingPage';
import ServicesPage, { CapabilityPage } from './pages/ServicesPage';
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
import CaseStudiesPage, { CaseStudyDetailPage } from './pages/CaseStudiesPage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * Router-agnostic application shell. The browser entry wraps this in a
 * BrowserRouter; the build-time prerender wraps the same tree in a
 * StaticRouter, so both render identical markup.
 */
export default function App() {
  usePageViews();

  return (
    <div className="min-h-screen bg-white text-primary flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:top-3 focus:left-3 focus:rounded-full focus:bg-black focus:px-5 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <ScrollToSection />
      <main id="main-content" className="pt-20 flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<CapabilityPage />} />
          <Route path="/systems" element={<SystemsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Governance and legal */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/delivery-policy" element={<DeliveryPolicyPage />} />
          <Route path="/risk-mitigation" element={<RiskMitigationPage />} />
          <Route path="/data-handling" element={<DataHandlingPage />} />
          <Route path="/ip-policy" element={<IpPolicyPage />} />

          {/* Retired route. Also redirected at the edge in vercel.json so the
              server answers with a 308 rather than a client-side bounce. */}
          <Route path="/technology" element={<Navigate to="/services#tech" replace />} />

          <Route path="/community" element={<CommunityPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
