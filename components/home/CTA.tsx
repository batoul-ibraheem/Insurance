'use client'

import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CTA() {
  const { t, dir } = useLanguage()
  const isRTL = dir === 'rtl'

  return (
    <section className="section-padding bg-slate-900 dark:bg-slate-950 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-secondary text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-7">
            {t.cta.description}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Link href="/contact" className="btn-primary">
              {t.cta.getQuote}
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Link>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE || '+963-11-123-4567'}`}
              className="btn-outline"
            >
              <Phone className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t.cta.callNow}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
