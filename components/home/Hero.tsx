'use client'

import Link from 'next/link'
import { ArrowRight, Shield, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t, dir } = useLanguage()
  const isRTL = dir === 'rtl'

  return (
    <section className="relative text-white overflow-hidden min-h-[85vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Enhanced overlay pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="relative container-custom section-padding z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20 animate-fade-in-up shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Shield className="w-4 h-4 text-primary-300 flex-shrink-0" />
            <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">{t.hero.trustBadge}</span>
          </div>

          <h1 className="heading-primary text-white mb-6 animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '100ms' }}>
            {t.hero.title}
            <span className="block text-slate-200 mt-3 font-normal text-4xl sm:text-5xl">{t.hero.subtitle}</span>
          </h1>

          <p className="text-lg text-slate-300 mb-10 max-w-2xl leading-7 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {t.hero.description}
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up ${isRTL ? 'sm:flex-row-reverse' : ''}`} style={{ animationDelay: '300ms' }}>
            <Link href="/contact" className="btn-primary group">
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
            </Link>
            <Link href="/services" className="btn-outline group">
              <span>{t.hero.ctaSecondary}</span>
              <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
            </Link>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl animate-fade-in-up ${isRTL ? 'text-right' : 'text-left'}`} style={{ animationDelay: '400ms' }}>
            <div className={`flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors duration-200 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm font-medium">{t.hero.features.noHiddenFees}</span>
            </div>
            <div className={`flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors duration-200 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm font-medium">{t.hero.features.support24}</span>
            </div>
            <div className={`flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors duration-200 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm font-medium">{t.hero.features.easyClaims}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
