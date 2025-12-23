'use client'

import { Shield, Users, Award, Heart } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const values = [
  {
    icon: Shield,
    key: 'security' as const,
  },
  {
    icon: Users,
    key: 'accessibility' as const,
  },
  {
    icon: Award,
    key: 'excellence' as const,
  },
  {
    icon: Heart,
    key: 'compassion' as const,
  },
]

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative text-white section-padding animate-fade-in min-h-[40vh] flex items-center bg-slate-900 dark:bg-slate-950">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-primary text-white mb-6">{t.about.title}</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="heading-secondary mb-6 text-center">{t.about.missionTitle}</h2>
            <p className="text-body text-center mb-8">
              {t.about.missionText1}
            </p>
            <p className="text-body text-center">
              {t.about.missionText2}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-custom">
          <h2 className="heading-secondary mb-12 text-center animate-fade-in-up">{t.about.valuesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              const featureKey = value.key === 'security' ? 'secure' : 
                                value.key === 'accessibility' ? 'comprehensiveCoverage' : 
                                value.key === 'excellence' ? 'easyApplication' : 'affordablePremiums'
              const feature = t.features.items[featureKey]
              return (
                <div 
                  key={value.key} 
                  className="card text-center animate-scale-in transition-all duration-150"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                      <Icon className="w-8 h-8 text-slate-700 dark:text-slate-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="heading-secondary mb-6 text-center">{t.about.historyTitle}</h2>
            <div className="space-y-6 text-body">
              <p>{t.about.historyText1}</p>
              <p>{t.about.historyText2}</p>
              <p>{t.about.historyText3}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
