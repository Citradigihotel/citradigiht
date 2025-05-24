import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { RiThreadsLine } from 'react-icons/ri';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = encodeURIComponent(
      `Nama: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subjek: ${formData.subject}\n\n` +
      `Pesan:\n${formData.message}`
    );
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/6285198526632?text=${message}`, '_blank');
  };

  return (
    <>
      <SEO 
        title="Hubungi Kami"
        description="Hubungi tim Citra Digital Hotel untuk konsultasi website hotel, dukungan teknis, atau pertanyaan seputar layanan kami. Tersedia melalui WhatsApp, email, dan telepon."
        canonical="https://citradigitalhotel.com/contact"
      />
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-500">Beranda</Link>
            <span>/</span>
            <span className="text-gray-900">Hubungi Kami</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-8">Hubungi Kami</h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Informasi Kontak</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Alamat</h3>
                  <p className="text-gray-600">Karanganyar, Jawa Tengah, Indonesia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Telepon</h3>
                  <p className="text-gray-600">+62 851 9852 6632</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-gray-600">info@citradigitalhotel.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Jam Operasional</h3>
                  <p className="text-gray-600">Senin - Jumat: 06:00 - 23:00</p>
                  <p className="text-gray-600">Sabtu - Minggu: 06.00 - 00:00</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Ikuti Kami</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/people/Citra-DigitalHotel/61576269524386/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaFacebook size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/citradigitalhotel/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaInstagram size={24} />
                </a>
                <a 
                  href="https://www.threads.net/@citradigitalhotel"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <RiThreadsLine size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Kirim Pesan</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subjek
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Pilih Subjek</option>
                  <option value="Pertanyaan Umum">Pertanyaan Umum</option>
                  <option value="Dukungan Teknis">Dukungan Teknis</option>
                  <option value="Pembayaran">Pembayaran</option>
                  <option value="Kerjasama">Kerjasama</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg py-3 flex items-center justify-center gap-2 transition-colors duration-200"
              >
                Kirim via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;