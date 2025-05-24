'use client';

import React, { useState, useEffect } from 'react';
import { Hotel } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Hero: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('benefits');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="px-6 py-16 relative">
      {showPopup && (
        <div className="absolute top-10 left-0 md:left-[130px] animate-bounce">
          <div className="bg-[#FF3366] text-white px-6 py-3 rounded-lg shadow-lg transform -rotate-12">
            <p className="text-sm font-bold">Mulai dari</p>
            <p className="text-2xl font-black">Rp 499K!</p>
          </div>
          <div className="w-4 h-4 bg-[#FF3366] absolute -bottom-2 left-8 transform rotate-45"></div>
        </div>
      )}
      <div className="flex flex-col items-center gap-2 mb-8">
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5 text-sm">
          <Hotel className="h-4 w-4" />
          <span>Lebih dari 64+ Hotel & Penginapan Pilih Citra Digital Hotel</span>
        </div>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-center leading-tight mb-6 bg-gradient-to-b from-[#0066FF] via-[#00AFFF] to-[#00D4FF] text-transparent bg-clip-text">
        Wujudkan Brand Digital<br />
        untuk Hotel Anda
      </h1>
      <p className="text-center max-w-2xl mx-auto text-gray-700 mb-10">
        <span className="font-bold underline">Layanan pembuatan website dan AI automatisasi CS khusus penginapan</span> <br />
        — harga termurah, mulai dari 499k, kualitas tetap profesional dan terpercaya.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <button 
          onClick={scrollToBenefits}
          className="gradient-blue text-white rounded px-6 py-3"
        >
          Dapatkan, Harga Termurah!
        </button>
        <a 
          href="https://wa.me/6285198526632?text=Halo%2C%20saya%20tertarik%20membuat%20website%20untuk%20penginapan%20saya.%20Boleh%20dibantu%20info%20lebih%20lanjut%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded px-6 py-3 flex items-center justify-center transition-colors duration-200"
        >
          <FaWhatsapp className="mr-2" />
          Pesan Sekarang!
        </a>
      </div>
    </div>
  );
};

export default Hero;