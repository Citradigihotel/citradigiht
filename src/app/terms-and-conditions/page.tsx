import type { Metadata } from 'next'
import TermsAndConditions from '@/components/TermsAndConditions'

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan | Citra Digital Hotel',
  description: 'Syarat dan ketentuan penggunaan layanan Citra Digital Hotel. Pelajari ketentuan layanan website hotel, AI customer service, dan kebijakan pembayaran kami.',
}

export default function TermsAndConditionsPage() {
  return <TermsAndConditions />
}