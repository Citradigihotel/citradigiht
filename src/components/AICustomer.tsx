import React from 'react';
import { Bot, MessageSquare, Clock, Shield, Globe, Zap, Users } from 'lucide-react';
import SEO from './SEO';

const AICustomer: React.FC = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8 text-blue-500" />,
      title: "AI Customer Service 24/7",
      description: "Layani tamu hotel Anda secara otomatis sepanjang waktu tanpa perlu operator manusia."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      title: "Respon Cepat & Akurat",
      description: "Jawaban instan untuk pertanyaan umum tamu dengan akurasi tinggi dan bahasa natural."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Hemat Waktu & Biaya",
      description: "Tidak perlu lagi membayar staff CS tambahan untuk shift malam atau akhir pekan."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Aman & Terpercaya",
      description: "Teknologi AI terkini dengan perlindungan data privasi yang ketat."
    }
  ];

  const benefits = [
    {
      icon: <Globe className="w-12 h-12 text-blue-500" />,
      title: "Multi-Bahasa",
      description: "Berkomunikasi dalam berbagai bahasa untuk melayani tamu internasional"
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      title: "Respon Instan",
      description: "Jawaban cepat dan akurat dalam hitungan detik"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Personalisasi",
      description: "Layanan yang disesuaikan dengan kebutuhan setiap tamu"
    }
  ];

  return (
    <>
      <SEO 
        title="AI Customer Service untuk Hotel"
        description="Tingkatkan pelayanan hotel Anda dengan AI Customer Service 24/7. Respon cepat, multi-bahasa, dan hemat biaya. Solusi otomatis untuk layanan tamu hotel Anda."
        canonical="https://citradigitalhotel.com/ai-customer-service"
      />
      <div id="ai-customer" className="py-16 bg-gradient-to-b from-white to-blue-50">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Harga Paling Murah! AI Customer Service untuk Hotel Anda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tingkatkan pelayanan hotel Anda dengan asisten AI yang siap melayani tamu 24/7
            </p>
          </div>

          {/* Main Feature Display */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src="https://ik.imagekit.io/4hotelsolution/Ellipse%201.webp?updatedAt=1747834374892"
                      alt="AI Assistant"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <h3 className="text-2xl font-bold">Ratna CS</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-gray-700">👋 Selamat datang! Ada yang bisa saya bantu?</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 ml-8">
                    <p className="text-gray-700">Saya ingin tahu tentang ketersediaan kamar untuk tanggal 25 Juni</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-gray-700">Untuk tanggal 25 Juni, kami memiliki beberapa tipe kamar yang tersedia:
                      - Deluxe Room (2 kamar)
                      - Suite Room (1 kamar)
                      Apakah Anda ingin informasi lebih detail?</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -bottom-4 -left-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl -z-10"></div>
            </div>
            
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">Transformasi Digital untuk Layanan Hotel</h3>
              <p className="text-gray-600 mb-8">
                Dengan AI Customer Service, hotel Anda dapat memberikan:
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-xl">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <a
              href="https://wa.me/6285198526632?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20AI%20Customer%20Service%20untuk%20hotel%20saya.%20Boleh%20dibantu%20info%20lebih%20lanjut%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors duration-300"
            >
              <MessageSquare className="w-5 h-5" />
              Mulai Gunakan AI CS Sekarang
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AICustomer;