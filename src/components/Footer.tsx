'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { RiThreadsLine } from 'react-icons/ri';
import Chat from './Chat';

const Footer: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const promos = [
    {
      title: "Promo Spesial Terbatas! 🔥",
      description: "Tingkatkan Peringkat Website Hotel Anda di Google dengan Layanan SEO Profesional GRATIS (Rp300.000) untuk 10 klien pertama!",
      bgColor: "from-blue-600 to-blue-400",
      code: "SEOFREE",
      message: "Halo, saya tertarik dengan promo SEO GRATIS (kode: SEOFREE). Apakah masih tersedia?"
    },
    {
      title: "Bonus Eksklusif!",
      description: "Gratis 1 bulan trial AI Customer Service Hotel untuk semua pembeli paket website",
      bgColor: "from-purple-600 to-purple-400",
      code: "AIGRATIS",
      message: "Halo, saya tertarik dengan promo AI CS GRATIS (kode: AIGRATIS). Boleh info lebih lanjut?"
    },
    {
      title: "Promo Terbatas!",
      description: "Gratis domain .com untuk 10 pendaftar pertama",
      bgColor: "from-green-600 to-green-400",
      code: "DOMAIN10",
      message: "Halo, saya tertarik dengan promo domain GRATIS (kode: DOMAIN10). Apakah masih tersedia?"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/6285198526632?text=${encodeURIComponent(message)}`;
  };

  return (
    <footer className="relative bg-white text-gray-600">
      {/* AI Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
      >
        <div className="relative">
          <img
            src="https://ik.imagekit.io/4hotelsolution/Ellipse%201.webp?updatedAt=1747834374892"
            alt="AI Assistant"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium">Chat dengan Ratna</span>
          <span className="text-xs text-blue-100">Online 24/7</span>
        </div>
      </button>

      {/* Chat Window */}
      <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Main Footer Content */}
      <div className="px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-4">
              <img 
                src="https://ik.imagekit.io/4hotelsolution/ChatGPT%20Image%20May%2022,%202025,%2005_35_44%20PM.webp?updatedAt=1747910289562" 
                alt="Citra Digital Hotel Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm mb-6">
              Solusi website profesional untuk penginapan Anda dengan harga terjangkau dan kualitas premium.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/people/Citra-DigitalHotel/61576269524386/"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/citradigitalhotel/"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://www.threads.net/@citradigitalhotel"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <RiThreadsLine size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Layanan Kami</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('benefits')} className="hover:text-gray-900 transition-colors">Website Hotel</button></li>
              <li><button onClick={() => scrollToSection('ai-customer')} className="hover:text-gray-900 transition-colors">AI Customer Service</button></li>
              <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-gray-900 transition-colors">Portfolio</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Bantuan</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('faq')} className="hover:text-gray-900 transition-colors">FAQ</button></li>
              <li><Link href="/privacy-policy" className="hover:text-gray-900 transition-colors">Kebijakan Privasi</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-gray-900 transition-colors">Syarat & Ketentuan</Link></li>
              <li><Link href="/contact" className="hover:text-gray-900 transition-colors">Kontak Kami</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" />
                <span>Karanganyar, Jawa Tengah, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gray-400" />
                <span>+62 851 9852 6632</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gray-400" />
                <span>admin@citradigitalhotel.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 text-sm text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Citra Digital Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;