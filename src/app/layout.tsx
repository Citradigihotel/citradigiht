import React from 'react';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../index.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Website Hotel & AI Customer Service',
  description: 'Solusi website profesional untuk penginapan Anda dengan harga terjangkau. Dilengkapi AI Customer Service 24/7 dan fitur booking WhatsApp.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-white">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}