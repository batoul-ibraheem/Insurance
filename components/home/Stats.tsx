'use client'

import { Users, Shield, Award, Heart } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const iconColors = [
  'text-blue-500 dark:text-blue-400',
  'text-green-500 dark:text-green-400',
  'text-amber-500 dark:text-amber-400',
  'text-red-500 dark:text-red-400',
]

const iconBgColors = [
  'bg-blue-50 dark:bg-blue-900/20',
  'bg-green-50 dark:bg-green-900/20',
  'bg-amber-50 dark:bg-amber-900/20',
  'bg-red-50 dark:bg-red-900/20',
]

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
                className="card text-center group transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex justify-center mb-5">
                  <div className={`p-4 rounded-xl ${iconBgColors[index]} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${iconColors[index]}`} />
                  </div>
                </div>
                <div className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-2 tracking-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
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
