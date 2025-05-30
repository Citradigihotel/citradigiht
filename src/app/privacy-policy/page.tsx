import type { Metadata } from 'next'
import PrivacyPolicy from '@/components/PrivacyPolicy'

export const metadata: Metadata = {
  title: 'Kebijakan Privasi | Citra Digital Hotel',
  description: 'Kebijakan privasi Citra Digital Hotel menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda. Baca selengkapnya tentang komitmen kami terhadap privasi.',
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />
}