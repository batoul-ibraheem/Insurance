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
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { dir } = useLanguage()
  const isRTL = dir === 'rtl'

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {questions.map((item, index) => (
        <div
          key={index}
          className={cn(
            "card border-l-4 transition-all duration-300 hover:shadow-lg",
            openIndex === index 
              ? "border-l-primary-500 dark:border-l-primary-400 bg-primary-50/50 dark:bg-primary-900/10" 
              : "border-l-slate-200 dark:border-l-slate-700 hover:border-l-primary-400 dark:hover:border-l-primary-500",
            isRTL && "border-l-0 border-r-4",
            isRTL && openIndex === index && "border-r-primary-500 dark:border-r-primary-400",
            isRTL && openIndex !== index && "border-r-slate-200 dark:border-r-slate-700 hover:border-r-primary-400 dark:hover:border-r-primary-500"
          )}
        >
          <button
            onClick={() => toggleQuestion(index)}
            className={`w-full flex items-center justify-between gap-4 text-left ${isRTL ? 'flex-row-reverse text-right' : ''}`}
            aria-expanded={openIndex === index}
          >
            <h3 className={`text-lg font-bold text-slate-900 dark:text-slate-50 flex-1 ${openIndex === index ? 'text-primary-700 dark:text-primary-300' : ''} transition-colors duration-200`}>
              {item.question}
            </h3>
            <ChevronDown
              className={cn(
                'w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 transition-all duration-300',
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
            <p className={`text-slate-600 dark:text-slate-300 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
