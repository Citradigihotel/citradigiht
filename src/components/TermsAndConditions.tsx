'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import SEO from './SEO';

const TermsAndConditions: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <SEO 
        title="Syarat & Ketentuan"
        description="Syarat dan ketentuan penggunaan layanan Citra Digital Hotel. Pelajari ketentuan layanan website hotel, AI customer service, dan kebijakan pembayaran kami."
        canonical="https://citradigitalhotel.com/terms-and-conditions"
        type="article"
      />
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-500">Beranda</Link>
            <span>/</span>
            <span className="text-gray-900">Syarat & Ketentuan</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-8">Syarat & Ketentuan</h1>

        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Ketentuan Umum</h2>
            <p className="mb-4">
              Dengan mengakses dan menggunakan layanan Citra Digital Hotel, Anda menyetujui untuk terikat dengan syarat dan ketentuan ini. Jika Anda tidak setuju dengan bagian apapun dari ketentuan ini, Anda tidak diperkenankan menggunakan layanan kami.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Layanan</h2>
            <p className="mb-4">
              Kami menyediakan layanan pembuatan website dan sistem manajemen hotel dengan ketentuan:
            </p>
            <ul className="list-disc pl-6">
              <li>Waktu pengerjaan sesuai dengan paket yang dipilih</li>
              <li>Revisi sesuai dengan ketentuan paket</li>
              <li>Dukungan teknis selama masa aktif layanan</li>
              <li>Perpanjangan layanan dengan biaya yang ditentukan</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Kewajiban Pengguna</h2>
            <p className="mb-4">
              Sebagai pengguna layanan, Anda bertanggung jawab untuk:
            </p>
            <ul className="list-disc pl-6">
              <li>Menyediakan informasi yang akurat dan lengkap</li>
              <li>Menjaga kerahasiaan akun dan password</li>
              <li>Tidak melakukan tindakan ilegal atau merugikan</li>
              <li>Mematuhi hukum yang berlaku</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Pembayaran</h2>
            <p className="mb-4">
              Ketentuan pembayaran meliputi:
            </p>
            <ul className="list-disc pl-6">
              <li>Pembayaran dilakukan di muka</li>
              <li>Harga sudah termasuk pajak</li>
              <li>Tidak ada pengembalian dana setelah proyek dimulai</li>
              <li>Metode pembayaran sesuai yang tersedia di sistem</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Hak Kekayaan Intelektual</h2>
            <p>
              Seluruh konten, desain, dan kode yang kami buat adalah hak milik Citra Digital Hotel. Setelah pembayaran lunas, klien mendapatkan lisensi penggunaan sesuai ketentuan yang disepakati.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Batasan Tanggung Jawab</h2>
            <p>
              Kami tidak bertanggung jawab atas kerugian yang timbul akibat:
            </p>
            <ul className="list-disc pl-6">
              <li>Kesalahan penggunaan sistem oleh klien</li>
              <li>Force majeure atau kejadian di luar kendali kami</li>
              <li>Perubahan kebijakan pihak ketiga</li>
              <li>Konten yang disediakan oleh klien</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Penghentian Layanan</h2>
            <p>
              Kami berhak menghentikan layanan jika:
            </p>
            <ul className="list-disc pl-6">
              <li>Terjadi pelanggaran terhadap syarat dan ketentuan</li>
              <li>Pembayaran tidak dilakukan sesuai ketentuan</li>
              <li>Penggunaan layanan untuk tujuan ilegal</li>
              <li>Permintaan dari pihak berwenang</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Hubungi Kami</h2>
            <p>
              Untuk pertanyaan tentang syarat dan ketentuan ini, silakan hubungi:
            </p>
            <div className="mt-4">
              <p>Email: legal@citradigitalhotel.com</p>
              <p>Telepon: +62 851 9852 6632</p>
              <p>Alamat: Karanganyar, Jawa Tengah, Indonesia</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;