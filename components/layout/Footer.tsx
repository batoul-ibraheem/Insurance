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
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Brand Column */}
          <div className={`lg:col-span-2 ${isRTL ? 'order-last' : ''}`}>
            <Link href="/" className={`flex items-center gap-3 mb-4 group transition-opacity duration-200 hover:opacity-80 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="p-2.5 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                {t.common.siteName}
              </span>
            </Link>
            <p className={`text-slate-400 mb-6 max-w-md leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.footer.description}
            </p>
            <div className={`space-y-3 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className={`flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-200 ${isRTL ? 'flex-row-reverse justify-end' : 'flex-row'}`}>
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE || '+963-11-123-4567'}`}
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  {process.env.NEXT_PUBLIC_CONTACT_PHONE || '+963-11-123-4567'}
                </a>
              </div>
              <div className={`flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-200 ${isRTL ? 'flex-row-reverse justify-end' : 'flex-row'}`}>
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@insurance.gov.sy'}`}
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  {process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@insurance.gov.sy'}
                </a>
              </div>
              <div className={`flex items-center gap-3 text-slate-400 ${isRTL ? 'flex-row-reverse justify-end' : 'flex-row'}`}>
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span>Damascus, Syria</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className={`${isRTL ? 'order-3' : ''}`}>
            <h3 className={`text-white font-bold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>{t.footer.services}</h3>
            <ul className={`space-y-3 list-none ${isRTL ? 'text-right' : 'text-left'}`}>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white hover:text-primary-400 transition-colors duration-200 inline-block">
                  {t.services.items.health.title}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white hover:text-primary-400 transition-colors duration-200 inline-block">
                  {t.services.items.life.title}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white hover:text-primary-400 transition-colors duration-200 inline-block">
                  {t.services.items.property.title}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white hover:text-primary-400 transition-colors duration-200 inline-block">
                  {t.services.items.auto.title}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className={`${isRTL ? 'order-2' : ''}`}>
            <h3 className={`text-white font-bold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>{t.footer.company}</h3>
            <ul className={`space-y-3 list-none ${isRTL ? 'text-right' : 'text-left'}`}>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white hover:text-primary-400 transition-colors duration-200 inline-block">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white hover:text-primary-400 transition-colors duration-200 inline-block">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white hover:text-primary-400 transition-colors duration-200 inline-block">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className={`${isRTL ? 'order-1' : ''}`}>
            <h3 className={`text-white font-bold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>{t.footer.legal}</h3>
            <ul className={`space-y-3 list-none ${isRTL ? 'text-right' : 'text-left'}`}>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white hover:text-primary-400 transition-colors duration-200 inline-block">
                  {t.nav.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white hover:text-primary-400 transition-colors duration-200 inline-block">
                  {t.nav.terms}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-white hover:text-primary-400 transition-colors duration-200 inline-block">
                  {t.nav.faq}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 dark:border-slate-900">
          <p className="text-center text-slate-500 dark:text-slate-400">
            © {currentYear} {t.common.siteName}. {t.common.allRightsReserved}.
          </p>
        </div>
      </div>
    </footer>
  )
}
