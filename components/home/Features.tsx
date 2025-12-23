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

const iconColors = {
  comprehensiveCoverage: 'text-blue-500 dark:text-blue-400',
  affordablePremiums: 'text-green-500 dark:text-green-400',
  quickClaims: 'text-amber-500 dark:text-amber-400',
  customerSupport: 'text-purple-500 dark:text-purple-400',
  easyApplication: 'text-indigo-500 dark:text-indigo-400',
  secure: 'text-red-500 dark:text-red-400',
}

const iconBgColors = {
  comprehensiveCoverage: 'bg-blue-50 dark:bg-blue-900/20',
  affordablePremiums: 'bg-green-50 dark:bg-green-900/20',
  quickClaims: 'bg-amber-50 dark:bg-amber-900/20',
  customerSupport: 'bg-purple-50 dark:bg-purple-900/20',
  easyApplication: 'bg-indigo-50 dark:bg-indigo-900/20',
  secure: 'bg-red-50 dark:bg-red-900/20',
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
                className="card group transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`p-3 rounded-xl ${iconBgColors[key]} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${iconColors[key]}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
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
