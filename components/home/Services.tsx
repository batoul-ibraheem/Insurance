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

const iconColors = {
  health: 'text-red-500 dark:text-red-400',
  property: 'text-blue-500 dark:text-blue-400',
  life: 'text-purple-500 dark:text-purple-400',
  auto: 'text-amber-500 dark:text-amber-400',
}

const iconBgColors = {
  health: 'bg-red-50 dark:bg-red-900/20',
  property: 'bg-blue-50 dark:bg-blue-900/20',
  life: 'bg-purple-50 dark:bg-purple-900/20',
  auto: 'bg-amber-50 dark:bg-amber-900/20',
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
                className="card group transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`flex flex-col items-start ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className={`p-3.5 rounded-xl ${iconBgColors[key]} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${iconColors[key]}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-6 flex-1">
                    {service.description}
                  </p>
                  <div className={`flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-200 ${isRTL ? 'flex-row-reverse ml-auto' : ''}`}>
                    <span>{t.common.learnMore}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-secondary group">
            <span>{t.services.viewAll}</span>
            <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
          </Link>
        </div>
      </div>
    </section>
  )
}
