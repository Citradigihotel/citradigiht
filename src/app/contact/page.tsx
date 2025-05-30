import type { Metadata } from 'next'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Hubungi Kami | Citra Digital Hotel',
  description: 'Hubungi tim Citra Digital Hotel untuk konsultasi website hotel, dukungan teknis, atau pertanyaan seputar layanan kami. Tersedia melalui WhatsApp, email, dan telepon.',
}

export default function ContactPage() {
  return <Contact />
}