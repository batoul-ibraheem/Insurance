'use client'

import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/contact/ContactForm'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ContactPage() {
  const { t, dir } = useLanguage()
  const isRTL = dir === 'rtl'

  const contactInfo = [
    {
      icon: Phone,
      title: t.contact.phone,
      content: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+963-11-123-4567',
      link: `tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE || '+963-11-123-4567'}`,
      color: 'text-blue-500 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      icon: Mail,
      title: t.contact.email,
      content: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@insurance.gov.sy',
      link: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@insurance.gov.sy'}`,
      color: 'text-green-500 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      icon: MapPin,
      title: t.contact.address,
      content: t.contact.addressValue,
      link: null,
      color: 'text-purple-500 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
      icon: Clock,
      title: t.contact.businessHours,
      content: t.contact.hoursValue,
      link: null,
      color: 'text-amber-500 dark:text-amber-400',
      bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative text-white section-padding animate-fade-in min-h-[40vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-primary text-white mb-6 drop-shadow-lg">{t.contact.pageTitle}</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {t.contact.pageDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <h2 className="heading-secondary mb-8">{t.contact.sendMessage}</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h2 className="heading-secondary mb-10">{t.contact.getInTouch}</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div 
                      key={index} 
                      className={`flex items-start gap-4 group ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <div className={`p-3 rounded-xl ${info.bgColor} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div className="flex-1 pt-0.5">
                        <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-base font-medium text-slate-900 dark:text-slate-50 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 whitespace-pre-line block"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-base text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
