'use client'

import Link from 'next/link'
import { ArrowRight, Shield, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t, dir } = useLanguage()
  const isRTL = dir === 'rtl'

  return (
    <section className="relative text-white overflow-hidden min-h-[85vh] flex items-center bg-slate-900 dark:bg-slate-950">
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="relative container-custom section-padding z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-8 border border-white/10 animate-fade-in-up ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Shield className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            <span className="text-xs font-medium text-slate-300 uppercase tracking-wide">{t.hero.trustBadge}</span>
          </div>

          <h1 className="heading-primary text-white mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {t.hero.title}
            <span className="block text-slate-300 mt-3 font-normal">{t.hero.subtitle}</span>
          </h1>

          <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-7 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {t.hero.description}
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up ${isRTL ? 'sm:flex-row-reverse' : ''}`} style={{ animationDelay: '300ms' }}>
            <Link href="/contact" className="btn-primary">
              {t.hero.ctaPrimary}
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Link>
            <Link href="/services" className="btn-outline">
              {t.hero.ctaSecondary}
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl animate-fade-in-up ${isRTL ? 'text-right' : 'text-left'}`} style={{ animationDelay: '400ms' }}>
            <div className={`flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} space-x-2.5 text-slate-400`}>
              <CheckCircle className="w-4 h-4 text-slate-500 flex-shrink-0" />
              <span className="text-sm">{t.hero.features.noHiddenFees}</span>
            </div>
            <div className={`flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} space-x-2.5 text-slate-400`}>
              <CheckCircle className="w-4 h-4 text-slate-500 flex-shrink-0" />
              <span className="text-sm">{t.hero.features.support24}</span>
            </div>
            <div className={`flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} space-x-2.5 text-slate-400`}>
              <CheckCircle className="w-4 h-4 text-slate-500 flex-shrink-0" />
              <span className="text-sm">{t.hero.features.easyClaims}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
