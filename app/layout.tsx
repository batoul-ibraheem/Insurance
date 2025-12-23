import type { Metadata } from 'next'
import { Inter, Noto_Sans_Arabic } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { LanguageProvider } from '@/contexts/LanguageContext'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Suspense } from 'react'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
})

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Social Insurance Institution | Comprehensive Coverage for All Citizens',
    template: '%s | Social Insurance Institution',
  },
  description: 'Official Social Insurance Institution services providing comprehensive health, life, and property insurance coverage for all citizens. Secure, reliable, and accessible protection for you and your family.',
  keywords: ['social insurance institution', 'syria insurance', 'health insurance syria', 'life insurance', 'property insurance', 'citizen insurance', 'public insurance syria'],
  authors: [{ name: 'Social Insurance Institution' }],
  creator: 'Social Insurance Institution',
  publisher: 'Social Insurance Institution',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    title: 'Social Insurance Institution | Comprehensive Coverage for All Citizens',
    description: 'Official Social Insurance Institution services providing comprehensive coverage for all citizens.',
    siteName: 'Social Insurance Institution',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Insurance Institution | Comprehensive Coverage for All Citizens',
    description: 'Official Social Insurance Institution services providing comprehensive coverage for all citizens.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${inter.variable} ${notoSansArabic.variable}`} suppressHydrationWarning>
      <body className="min-h-screen antialiased transition-colors duration-200 relative overflow-x-hidden">
        <ThemeProvider>
          <LanguageProvider>
            <AnimatedBackground />
            <div className="relative z-10">
              <Header />
              <main className="flex-1" role="main">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
