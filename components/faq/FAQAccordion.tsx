'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/contexts/LanguageContext'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  questions: FAQItem[]
}

export default function FAQAccordion({ questions }: FAQAccordionProps) {
  const { dir } = useLanguage()
  const isRTL = dir === 'rtl'
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {questions.map((item, index) => (
        <div
          key={index}
          className={`card ${isRTL ? 'border-r-4 border-r-primary-500 dark:border-r-primary-400 hover:border-r-primary-600 dark:hover:border-r-primary-300' : 'border-l-4 border-l-primary-500 dark:border-l-primary-400 hover:border-l-primary-600 dark:hover:border-l-primary-300'} transition-colors`}
        >
          <button
            onClick={() => toggleQuestion(index)}
            className={`w-full flex items-center justify-between ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}
            aria-expanded={openIndex === index}
          >
            <h3 className={`text-lg font-semibold text-gray-900 dark:text-white ${isRTL ? 'pl-4' : 'pr-4'}`}>
              {item.question}
            </h3>
            <ChevronDown
              className={cn(
                'w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 transition-transform duration-200',
                openIndex === index && 'transform rotate-180'
              )}
            />
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-300 ease-in-out',
              openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            )}
          >
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
