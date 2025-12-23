'use client'

import { Shield, Lock, Eye, FileCheck } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const iconMap = {
  collect: FileCheck,
  use: Eye,
  security: Lock,
  rights: Shield,
}

export default function PrivacyPage() {
  const { t, dir } = useLanguage()
  const isRTL = dir === 'rtl'

  const privacySections = [
    {
      icon: iconMap.collect,
      key: 'collect' as const,
    },
    {
      icon: iconMap.use,
      key: 'use' as const,
    },
    {
      icon: iconMap.security,
      key: 'security' as const,
    },
    {
      icon: iconMap.rights,
      key: 'rights' as const,
    },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative text-white section-padding animate-fade-in min-h-[40vh] flex items-center bg-slate-900 dark:bg-slate-950">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-primary text-white mb-6">{t.privacy.pageTitle}</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t.privacy.pageDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center animate-fade-in-up">
              <p className="text-body mb-6">
                {t.common.lastUpdated}: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-body">
                {t.privacy.intro}
              </p>
            </div>

            <div className="space-y-12">
              {privacySections.map((section, index) => {
                const Icon = section.icon
                const sectionData = t.privacy.sections[section.key]
                return (
                  <div
                    key={section.key}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`flex items-start mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className={`p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg ${isRTL ? 'ml-4' : 'mr-4'} flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{sectionData.title}</h2>
                    </div>
                    <div className={`${isRTL ? 'mr-16' : 'ml-16'} space-y-4`}>
                      {sectionData.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-body">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Contact Section */}
            <div className="mt-16 p-8 card animate-fade-in-up">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.privacy.contactTitle}</h3>
              <p className="text-body mb-6">
                {t.privacy.contactDesc}
              </p>
              <div className="space-y-2 text-body">
                <p>
                  <strong>{t.contact.email}:</strong> {process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'privacy@insurance.gov.sy'}
                </p>
                <p>
                  <strong>{t.contact.phone}:</strong> {process.env.NEXT_PUBLIC_CONTACT_PHONE || '+963-11-123-4567'}
                </p>
                <p>
                  <strong>{t.contact.address}:</strong> {t.contact.addressValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
