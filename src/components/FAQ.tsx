'use client';

import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-start gap-4 text-left"
      >
        <h3 className="text-xl font-semibold">{question}</h3>
        <div className={`p-2 rounded-full bg-gray-100 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>
      <div 
        className={`mt-4 text-gray-600 transition-all duration-200 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      question: "Berapa lama waktu yang dibutuhkan untuk membuat website?",
      answer: "Kami kerjakan cepat sesuai paket yang Anda pilih:\n• Paket Instant: 1–3 hari kerja\n• Paket Medium: 3–5 hari kerja\n• Paket Custom: 5–7 hari kerja\nKami pastikan Anda bisa segera online dan mulai menerima tamu!"
    },
    {
      question: "Saya gaptek, apakah bisa tetap bikin website?",
      answer: "Tentu bisa! Anda tidak perlu paham teknis sama sekali. Kami akan bantu dari awal hingga selesai. Cukup kirim isi konten (teks & foto), dan kami urus semuanya."
    },
    {
      question: "Apakah saya bisa mengubah konten website setelah jadi?",
      answer: "Tentu. Semua paket menyediakan revisi gratis sesuai ketentuan:\n• Instant: 1× revisi ringan\n• Medium: 2× revisi ringan\n• Custom: Hingga 3× revisi + dukungan penuh\n\nSetelah website jadi dan masa dukungan habis, Anda tetap bisa mengajukan perubahan melalui layanan maintenance opsional."
    },
    {
      question: "Apa itu AI Customer Service Live Chat 24/7 dan kenapa penting?",
      answer: "Teknologi Canggih dan terbaru menggantikan peran Customer Service Hotel dan jadi otomatis di website Anda. Ia menjawab secara cepat dan tepat terkait pertanyaan umum tamu, memberi informasi kamar, dan membantu proses booking 24 jam nonstop, tanpa Anda harus standby terus.\n\nFitur ini tersedia gratis selama 3–6 bulan di paket Medium dan Custom."
    },
    {
      question: "Apakah ada biaya tambahan setelah website selesai?",
      answer: "Tidak ada biaya tambahan selama masa aktif. Setelah masa aktif habis, Anda bisa memperpanjang layanan hanya dengan 50% dari harga awal untuk 6 bulan ke depan.\n\nLayanan tambahan seperti halaman baru, copywriting, atau perpanjangan chatbot juga tersedia secara opsional dan fleksibel."
    },
    {
      question: "Bagaimana dengan fitur booking online?",
      answer: "Setiap website dilengkapi dengan tombol booking via WhatsApp, sehingga tamu bisa memesan langsung ke nomor hotel anda.\n\nUntuk paket Medium & Custom, kami juga tambahkan fitur Google Analytics untuk memantau pengunjung website Anda."
    },
    {
      question: "Apakah bisa melakukan pembayaran secara cicilan?",
      answer: "Untuk saat ini, semua paket menggunakan pembayaran satu kali (one-time payment) di awal. Tapi jangan khawatir, harga kami sangat terjangkau dan bisa diperpanjang dengan biaya ringan setelah masa aktif berakhir."
    },
    {
      question: "Apakah saya perlu punya logo atau foto sendiri?",
      answer: "Idealnya, ya. Tapi jika Anda belum punya logo atau foto hotel, kami bisa bantu carikan gambar umum atau bantu buatkan logo sederhana (melalui layanan tambahan). Anda juga bebas konsultasi desain di awal secara gratis."
    },
    {
      question: "Apakah website ini bisa dibuka lewat HP?",
      answer: "Ya. Semua website yang kami buat sudah responsif — tampil optimal di smartphone, tablet, maupun laptop. Cocok untuk tamu yang mengakses lewat Google atau WhatsApp."
    },
    {
      question: "Apa bisa saya lihat contoh dulu sebelum memesan?",
      answer: "Bisa. Kami menyediakan demo website hotel yang bisa Anda lihat langsung. Silakan hubungi kami untuk melihat contoh tampilannya."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <div id="faq" className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Pertanyaan Umum</h2>
        
        <div className="space-y-4">
          {visibleFaqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

        {!showAll && faqs.length > 5 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors duration-200"
            >
              Lihat Pertanyaan Lainnya
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;