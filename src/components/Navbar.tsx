'use client';

import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-between items-center py-5 px-6">
      <div className="flex items-center gap-2">
        <img 
          src="https://ik.imagekit.io/4hotelsolution/ChatGPT%20Image%20May%2022,%202025,%2005_35_44%20PM.webp?updatedAt=1747910289562" 
          alt="Citradigi Hotel Logo" 
          className="h-16 w-auto"
        />
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <button onClick={() => scrollToSection('benefits')} className="text-sm hover:text-lime-500 transition-colors">Services</button>
        <button onClick={() => scrollToSection('ai-customer')} className="text-sm hover:text-lime-500 transition-colors">AI Customer</button>
        <button onClick={() => scrollToSection('portfolio')} className="text-sm hover:text-lime-500 transition-colors">Portfolio</button>
        <button onClick={() => scrollToSection('benefits')} className="text-sm hover:text-lime-500 transition-colors">Pricing</button>
        <button onClick={() => scrollToSection('faq')} className="text-sm hover:text-lime-500 transition-colors">FAQ</button>
      </div>
      
      <a 
        href="https://www.instagram.com/citradigitalhotel/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center gap-2 bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500 text-white rounded-full px-4 py-2 text-sm hover:opacity-90 transition-opacity"
      >
        <FaInstagram className="text-lg" />
        Ikuti Kami
      </a>
    </nav>
  );
};

export default Navbar;