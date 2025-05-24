import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Portfolio from './components/Portfolio';
import Benefits from './components/Benefits';
import AICustomer from './components/AICustomer';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Contact from './pages/Contact';
import SEO from './components/SEO';

const HomePage = () => (
  <>
    <SEO 
      title="Website Hotel & AI Customer Service"
      description="Solusi website profesional untuk penginapan Anda dengan harga terjangkau. Dilengkapi AI Customer Service 24/7 dan fitur booking WhatsApp."
    />
    <Hero />
    <Partners />
    <Portfolio />
    <Benefits />
    <AICustomer />
    <FAQ />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;