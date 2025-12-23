'use client'

import { HelpCircle } from 'lucide-react'
import FAQAccordion from '@/components/faq/FAQAccordion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function FAQPage() {
  const { t } = useLanguage()

  const faqCategories = [
    {
      title: t.faq.categories.general.title,
      questions: t.faq.categories.general.questions,
    },
    {
      title: t.faq.categories.coverage.title,
      questions: t.faq.categories.coverage.questions,
    },
    {
      title: t.faq.categories.claims.title,
      questions: t.faq.categories.claims.questions,
    },
    {
      title: t.faq.categories.payment.title,
      questions: t.faq.categories.payment.questions,
    },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative text-white section-padding animate-fade-in min-h-[40vh] flex items-center bg-slate-900 dark:bg-slate-950">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <HelpCircle className="w-16 h-16 text-white drop-shadow-lg" />
            </div>
            <h1 className="heading-primary text-white mb-6">{t.faq.pageTitle}</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t.faq.pageDescription}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{category.title}</h2>
                <FAQAccordion questions={category.questions} />
              </div>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <div className="max-w-4xl mx-auto mt-16 p-8 card text-center animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.faq.stillHaveQuestions}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t.faq.stillHaveQuestionsDesc}
            </p>
            <a href="/contact" className="btn-primary">
              {t.common.contactUs}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
