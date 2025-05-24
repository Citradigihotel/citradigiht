import React from 'react';
import { FaCheck, FaWhatsapp } from 'react-icons/fa';

const PriceCard: React.FC<{
  title: string;
  price: string;
  originalPrice: string;
  features: string[];
  icon: string;
  isPopular?: boolean;
}> = ({ title, price, originalPrice, features, icon, isPopular }) => {
  const createWhatsAppLink = (packageTitle: string) => {
    const message = encodeURIComponent(
      `Halo, saya tertarik dengan paket ${packageTitle} untuk website penginapan saya. Boleh tahu informasi lebih detail?`
    );
    return `https://wa.me/6285198526632?text=${message}`;
  };

  return (
    <div className={`bg-white rounded-2xl p-8 ${isPopular ? 'ring-2 ring-[#00AFFF]' : 'border border-gray-200'}`}>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      
      <div className="mb-6">
        <span className="text-gray-500 line-through text-sm">{originalPrice}</span>
        <div className="text-3xl font-bold">{price}</div>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <FaCheck className="text-[#00AFFF] mt-1 flex-shrink-0" />
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      <a 
        href={createWhatsAppLink(title)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 transition-colors duration-200"
      >
        <FaWhatsapp />
        Pesan Sekarang
      </a>
    </div>
  );
};

const Benefits: React.FC = () => {
  const packages = [
    {
      title: "Instant",
      icon: "⚡",
      originalPrice: "Rp 700.000",
      price: "Rp 499.000",
      features: [
        "1 halaman responsif",
        "Bebas Konsultasi Template",
        "Revisi 1x",
        "Waktu pengerjaan 1-3 hari kerja cepat",
        "Gratis Domain .my.id",
        "Masa Aktif 3 bulan + 1 bulan gratis",
        "Gratis WhatsApp booking",
        "1 bulan dukungan ringan (optional maintenance)"
      ]
    },
    {
      title: "Medium",
      icon: "⭐",
      originalPrice: "Rp 900.000",
      price: "Rp 699.000",
      isPopular: true,
      features: [
        "1 halaman responsif premium",
        "Desain Bebas Gratis Konsultasi",
        "2x revisi ringan",
        "Gratis AI Customer Service 24/7 (3 bulan)",
        "Waktu pengerjaan 3-5 hari kerja",
        "Gratis Domain .com",
        "Masa Aktif 4 + 2 Bulan gratis",
        "Google Analytics",
        "Gratis WhatsApp booking",
        "3 bulan dukungan ringan gratis"
      ]
    },
    {
      title: "Custom",
      icon: "💎",
      price: "Dapatkan Harga Spesial",
      features: [
        "5+ halaman sesuai kebutuhan",
        "Desain Kustom Penuh",
        "3x revisi",
        "Gratis AI Customer Service 24/7 (6 bulan)",
        "Waktu pengerjaan 5-7 hari kerja",
        "Gratis Domain .com",
        "Hosting 12 Bulan Penuh",
        "Google Analytics",
        "WhatsApp Integration",
        "SEO Optimization",
        "6 bulan dukungan ringan gratis",
        "Social media integration",
        "Priority support"
      ]
    }
  ];

  return (
    <div id="benefits" className="px-6 py-16">
      <p className="text-center text-gray-600 mb-4">Pilih Paket Landing Page</p>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Sesuai Kebutuhan Brand Anda</h2>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {packages.map((pkg, index) => (
          <PriceCard key={index} {...pkg} />
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <div className="text-sm text-gray-600 space-y-2">
          <p>*Harga sudah termasuk PPN</p>
          <p>*Pembayaran pada paket Custom bisa dicicil 3x</p>
          <p>*Garansi uang kembali 14 hari</p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-3">👉 Pesan Sekarang dan Dapatkan Bonus:</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaCheck className="text-[#00AFFF]" />
              <span>Free SSL Certificate</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-[#00AFFF]" />
              <span>Free Setup</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-[#00AFFF]" />
              <span>Free Konsultasi Digital Brand untuk Hotel Anda</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Benefits;