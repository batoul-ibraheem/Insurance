'use client'

import Link from 'next/link'
import { Shield, Mail, Phone, MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t, dir } = useLanguage()
  const isRTL = dir === 'rtl'

  return (
    <footer className="relative bg-slate-950 dark:bg-black border-t border-slate-800 dark:border-slate-900 text-slate-400 dark:text-slate-500">
      <div className="container-custom py-12 lg:py-16">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 ${isRTL ? 'direction-rtl' : ''}`} dir={dir}>
          {/* Brand Column - spans 2 columns */}
          <div className="lg:col-span-2" style={isRTL ? { order: 5 } : { order: 1 }}>
            <Link href="/" className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''} space-x-3 ${isRTL ? 'space-x-reverse' : ''} mb-4`}>
              <div className="p-2 bg-primary-600 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                {t.common.siteName}
              </span>
            </Link>
            <p className={`text-gray-400 mb-6 max-w-md ${isRTL ? 'text-right ml-auto' : 'text-left'}`}>
              {t.footer.description}
            </p>
            <div className={`space-y-3 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse justify-end' : 'flex-row'} space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE || '+963-11-123-4567'}`}
                  className="hover:text-white transition-colors"
                >
                  {process.env.NEXT_PUBLIC_CONTACT_PHONE || '+963-11-123-4567'}
                </a>
              </div>
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse justify-end' : 'flex-row'} space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@insurance.gov.sy'}`}
                  className="hover:text-white transition-colors"
                >
                  {process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@insurance.gov.sy'}
                </a>
              </div>
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse justify-end' : 'flex-row'} space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span>Damascus, Syria</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div style={isRTL ? { order: 4 } : { order: 2 }}>
            <h3 className={`text-white font-semibold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>{t.footer.services}</h3>
            <ul className={`space-y-3 list-none ${isRTL ? 'text-right' : 'text-left'}`}>
              <li>
                <Link href="/services" className="hover:text-white transition-colors inline-block">
                  {t.services.items.health.title}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors inline-block">
                  {t.services.items.life.title}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors inline-block">
                  {t.services.items.property.title}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors inline-block">
                  {t.services.items.auto.title}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div style={isRTL ? { order: 3 } : { order: 3 }}>
            <h3 className={`text-white font-semibold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>{t.footer.company}</h3>
            <ul className={`space-y-3 list-none ${isRTL ? 'text-right' : 'text-left'}`}>
              <li>
                <Link href="/about" className="hover:text-white transition-colors inline-block">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors inline-block">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors inline-block">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div style={isRTL ? { order: 1 } : { order: 4 }}>
            <h3 className={`text-white font-semibold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>{t.footer.legal}</h3>
            <ul className={`space-y-3 list-none ${isRTL ? 'text-right' : 'text-left'}`}>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors inline-block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors inline-block">
                  {t.nav.faq}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {currentYear} {t.common.siteName}. {t.common.allRightsReserved}.
          </p>
        </div>
      </div>
    </footer>
  )
}
