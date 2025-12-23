'use client'

import { Heart, Home, Briefcase, Car, Umbrella, Building2 } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

const iconMap = {
  health: Heart,
  property: Home,
  life: Briefcase,
  auto: Car,
  travel: Umbrella,
  business: Building2,
}

export default function ServicesPage() {
  const { t, dir } = useLanguage()
  const isRTL = dir === 'rtl'

  const serviceKeys = ['health', 'property', 'life', 'auto', 'travel', 'business'] as const

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative text-white section-padding animate-fade-in min-h-[50vh] flex items-center bg-slate-900 dark:bg-slate-950">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-primary text-white mb-6">{t.services.pageTitle}</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t.services.pageDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceKeys.map((key, index) => {
              const Icon = iconMap[key]
              const service = t.services.items[key]
              return (
                <div 
                  key={key} 
                  className="card group animate-scale-in hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-all duration-200 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h2 className={`text-2xl font-bold text-gray-900 dark:text-white ${isRTL ? 'mr-4' : 'ml-4'}`}>{service.title}</h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className={`text-primary-600 dark:text-primary-400 ${isRTL ? 'ml-2' : 'mr-2'} font-semibold`}>✓</span>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors inline-flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    {t.common.learnMore}
                    <span className={`${isRTL ? 'mr-2 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'} transition-transform`}>→</span>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="heading-secondary mb-6">{t.services.ctaTitle}</h2>
            <p className="text-body mb-8">
              {t.services.ctaDescription}
            </p>
            <Link href="/contact" className="btn-primary">
              {t.common.getQuote}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
