import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, MessageSquare, Clock, Shield } from 'lucide-react';

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

  const packages = [
    {
      name: "Starter",
      price: "Rp 299.000",
      duration: "/bulan",
      features: [
        "AI CS 24/7 Unlimited",
        "Integrasi WhatsApp",
        "Dashboard Analytics",
        "1000 percakapan/bulan",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "Rp 499.000",
      duration: "/bulan",
      popular: true,
      features: [
        "Semua fitur Starter",
        "3000 percakapan/bulan",
        "Kustomisasi jawaban AI",
        "Multi-bahasa",
        "Priority support 24/7"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      duration: "",
      features: [
        "Semua fitur Professional",
        "Percakapan unlimited",
        "API Integration",
        "Custom AI Training",
        "Dedicated support"
      ]
    }
  ];

  return (
    <div className="py-16">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <span>/</span>
          <span className="text-gray-900">AI Customer Service</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          AI Customer Service untuk Hotel Anda
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Tingkatkan pelayanan hotel Anda dengan asisten AI yang siap melayani tamu 24/7
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Packages Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pilih Paket AI Customer Service
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-8 ${
                  pkg.popular ? 'ring-2 ring-blue-500 shadow-lg' : 'border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <span className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block">
                    Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  <span className="text-gray-500 ml-1">{pkg.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-3 transition-colors duration-200">
                  Pilih Paket
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICustomer;