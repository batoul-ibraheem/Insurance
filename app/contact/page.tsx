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
    },
    {
      icon: Mail,
      title: t.contact.email,
      content: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@insurance.gov.sy',
      link: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@insurance.gov.sy'}`,
    },
    {
      icon: MapPin,
      title: t.contact.address,
      content: t.contact.addressValue,
      link: null,
    },
    {
      icon: Clock,
      title: t.contact.businessHours,
      content: t.contact.hoursValue,
      link: null,
    },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative text-white section-padding animate-fade-in min-h-[40vh] flex items-center bg-slate-900 dark:bg-slate-950">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-primary text-white mb-6">{t.contact.pageTitle}</h1>
            <p className="text-xl text-white/90 leading-relaxed">
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
            <div>
              <h2 className="heading-secondary mb-10">{t.contact.getInTouch}</h2>
              <div className="space-y-10">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div 
                      key={index} 
                      className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <div className={`p-2 rounded-md bg-slate-100/50 dark:bg-slate-800/30 ${isRTL ? 'ml-5' : 'mr-5'} flex-shrink-0`}>
                        <Icon className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                      </div>
                      <div className="flex-1 pt-0.5">
                        <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-base text-slate-900 dark:text-slate-50 hover:text-slate-700 dark:hover:text-slate-200 transition-colors whitespace-pre-line"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-base text-slate-900 dark:text-slate-50 whitespace-pre-line leading-relaxed">{info.content}</p>
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
