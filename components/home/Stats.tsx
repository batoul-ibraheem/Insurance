'use client'

import { Users, Shield, Award, Heart } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Stats() {
  const { t } = useLanguage()

  const stats = [
    {
      icon: Users,
      value: '5M+',
      label: t.stats.citizensCovered,
      description: t.stats.citizensCoveredDesc,
    },
    {
      icon: Shield,
      value: '99.9%',
      label: t.stats.uptime,
      description: t.stats.uptimeDesc,
    },
    {
      icon: Award,
      value: '25+',
      label: t.stats.yearsOfService,
      description: t.stats.yearsOfServiceDesc,
    },
    {
      icon: Heart,
      value: '4.8/5',
      label: t.stats.customerRating,
      description: t.stats.customerRatingDesc,
    },
  ]

  return (
    <section className="section-padding -mt-20 relative z-10 bg-white dark:bg-slate-950">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index} 
                className="card text-center transition-all duration-150"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex justify-center mb-5">
                  <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                    <Icon className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                  </div>
                </div>
                <div className="text-4xl font-semibold text-slate-900 dark:text-slate-50 mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {stat.description}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
