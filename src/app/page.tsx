import React from 'react';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Portfolio from '../components/Portfolio';
import Benefits from '../components/Benefits';
import AICustomer from '../components/AICustomer';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';

export default function Page() {
  return (
    <>
      <SEO 
        title="Website Hotel & AI Customer Service"
        description="Solusi website profesional untuk penginapan Anda dengan harga terjangkau. Dilengkapi AI Customer Service 24/7 dan fitur booking WhatsApp."
      />
      <main>
        <Hero />
        <Partners />
        <Portfolio />
        <Benefits />
        <AICustomer />
        <FAQ />
      </main>
    </>
  );
}