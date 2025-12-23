'use client'

import { Shield, Clock, DollarSign, Headphones, FileCheck, Lock } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const iconMap = {
  comprehensiveCoverage: Shield,
  affordablePremiums: DollarSign,
  quickClaims: Clock,
  customerSupport: Headphones,
  easyApplication: FileCheck,
  secure: Lock,
}

export default function Features() {
  const { t, dir } = useLanguage()
  const isRTL = dir === 'rtl'

  const featureKeys = [
    'comprehensiveCoverage',
    'affordablePremiums',
    'quickClaims',
    'customerSupport',
    'easyApplication',
    'secure',
  ] as const

  return (
    <section className="section-padding bg-white dark:bg-slate-950">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-secondary mb-4">{t.features.title}</h2>
          <p className="text-body text-slate-600 dark:text-slate-400">
            {t.features.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureKeys.map((key, index) => {
            const Icon = iconMap[key]
            const feature = t.features.items[key]
            return (
              <div 
                key={key} 
                className="card group transition-all duration-150"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/50 ${isRTL ? 'ml-4' : 'mr-4'} flex-shrink-0 group-hover:bg-slate-200 dark:group-hover:bg-slate-800 transition-colors duration-150`}>
                    <Icon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-6">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
