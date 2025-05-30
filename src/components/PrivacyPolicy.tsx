'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import SEO from './SEO';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <SEO 
        title="Kebijakan Privasi"
        description="Kebijakan privasi Citra Digital Hotel menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda. Baca selengkapnya tentang komitmen kami terhadap privasi."
        canonical="https://citradigitalhotel.com/privacy-policy"
        type="article"
      />
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-500">Beranda</Link>
            <span>/</span>
            <span className="text-gray-900">Kebijakan Privasi</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-8">Kebijakan Privasi</h1>

        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Pengumpulan Informasi</h2>
            <p className="mb-4">
              Kami mengumpulkan informasi ketika Anda:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Mendaftar di website kami</li>
              <li>Melakukan pemesanan</li>
              <li>Berlangganan newsletter</li>
              <li>Mengisi survei atau formulir kontak</li>
            </ul>
            <p>
              Informasi yang kami kumpulkan meliputi nama, alamat email, nomor telepon, dan informasi demografis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Penggunaan Informasi</h2>
            <p className="mb-4">
              Informasi yang kami kumpulkan digunakan untuk:
            </p>
            <ul className="list-disc pl-6">
              <li>Personalisasi pengalaman Anda</li>
              <li>Peningkatan layanan website</li>
              <li>Pemrosesan transaksi</li>
              <li>Pengiriman email periodik</li>
              <li>Penanganan masalah layanan pelanggan</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Perlindungan Informasi</h2>
            <p className="mb-4">
              Kami menerapkan berbagai langkah keamanan untuk menjaga keamanan informasi pribadi Anda, termasuk:
            </p>
            <ul className="list-disc pl-6">
              <li>Enkripsi data sensitif</li>
              <li>Firewall dan sistem keamanan terkini</li>
              <li>Akses terbatas ke informasi pribadi</li>
              <li>Pemantauan keamanan 24/7</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
            <p className="mb-4">
              Kami menggunakan cookies untuk:
            </p>
            <ul className="list-disc pl-6">
              <li>Memahami preferensi pengguna</li>
              <li>Melacak aktivitas situs</li>
              <li>Meningkatkan pengalaman pengguna</li>
            </ul>
            <p>
              Anda dapat memilih untuk menonaktifkan cookies melalui pengaturan browser Anda.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Pembagian Informasi dengan Pihak Ketiga</h2>
            <p>
              Kami tidak menjual, menukar, atau mentransfer informasi pribadi Anda kepada pihak ketiga tanpa izin Anda, kecuali untuk tujuan pengiriman produk atau layanan yang Anda minta.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Hak Pengguna</h2>
            <p className="mb-4">
              Anda memiliki hak untuk:
            </p>
            <ul className="list-disc pl-6">
              <li>Mengakses data pribadi Anda</li>
              <li>Memperbarui atau mengoreksi data</li>
              <li>Meminta penghapusan data</li>
              <li>Menolak penggunaan data untuk tujuan tertentu</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Perubahan Kebijakan Privasi</h2>
            <p>
              Kami berhak untuk memperbarui kebijakan privasi ini sewaktu-waktu. Perubahan akan diumumkan di halaman ini dengan tanggal pembaruan terakhir yang diperbarui.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Kontak</h2>
            <p>
              Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami melalui:
            </p>
            <div className="mt-4">
              <p>Email: privacy@citradigitalhotel.com</p>
              <p>Telepon: +62 851 9852 6632</p>
              <p>Alamat: Karanganyar, Jawa Tengah, Indonesia</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;