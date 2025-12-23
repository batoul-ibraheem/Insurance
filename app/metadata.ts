import type { Metadata } from 'next'

/**
 * Shared metadata configuration for the application
 * This ensures consistent SEO metadata across all pages
 */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Government Insurance Services | Comprehensive Coverage for Citizens',
    template: '%s | Government Insurance Services',
  },
  description: 'Official government insurance services providing comprehensive health, life, and property insurance coverage for all citizens.',
  keywords: ['government insurance', 'health insurance', 'life insurance', 'property insurance'],
  authors: [{ name: 'Government Insurance Services' }],
  creator: 'Government Insurance Services',
  publisher: 'Government Insurance Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'Government Insurance Services',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
