'use client'

import Link from 'next/link'
import { Heart, Home, Briefcase, Car, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const iconMap = {
  health: Heart,
  property: Home,
  life: Briefcase,
  auto: Car,
}

export default function Services() {
  const { t, dir } = useLanguage()
  const isRTL = dir === 'rtl'

  const serviceKeys = ['health', 'property', 'life', 'auto'] as const

  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-secondary mb-4">{t.services.title}</h2>
          <p className="text-body text-slate-600 dark:text-slate-400">
            {t.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceKeys.map((key, index) => {
            const Icon = iconMap[key]
            const service = t.services.items[key]
            return (
              <Link
                key={key}
                href="/services"
                className="card group transition-all duration-150"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/50 mb-5 inline-block group-hover:bg-slate-200 dark:group-hover:bg-slate-800 transition-colors duration-150">
                  <Icon className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 leading-6">
                  {service.description}
                </p>
                <div className={`flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t.common.learnMore}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-0.5 transition-transform`} />
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-secondary">
            {t.services.viewAll}
          </Link>
        </div>
      </div>
    </section>
  )
}
