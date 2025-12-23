'use client'

import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CTA() {
  const { t, dir } = useLanguage()
  const isRTL = dir === 'rtl'

  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-secondary text-white mb-6 drop-shadow-lg">
            {t.cta.title}
          </h2>
          <p className="text-lg text-slate-300 mb-10 leading-7">
            {t.cta.description}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Link href="/contact" className="btn-primary group">
              <span>{t.cta.getQuote}</span>
              <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
            </Link>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE || '+963-11-123-4567'}`}
              className="btn-outline group"
            >
              <Phone className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              <span>{t.cta.callNow}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
