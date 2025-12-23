'use client'

import { Languages, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { locales, localeNames } from '@/lib/i18n/config'
import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

export default function LanguageSwitcher() {
  const { locale, setLocale, dir } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const isRTL = dir === 'rtl'

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative flex items-center gap-2 px-3 py-2 rounded-lg",
          "bg-slate-100 dark:bg-slate-800/60",
          "border border-slate-200 dark:border-slate-700/50",
          "text-slate-700 dark:text-slate-200",
          "hover:bg-slate-200 dark:hover:bg-slate-700/80",
          "hover:border-slate-300 dark:hover:border-slate-600",
          "transition-all duration-300 ease-out",
          "focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 dark:focus:ring-offset-slate-900",
          "group",
          isRTL && "flex-row-reverse"
        )}
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Languages className="w-4 h-4 text-primary-600 dark:text-primary-400 transition-transform duration-200 group-hover:scale-110" />
        <span className="hidden sm:inline text-sm font-medium whitespace-nowrap">
          {localeNames[locale]}
        </span>
        <span className="sm:hidden text-sm font-medium">
          {locale.toUpperCase()}
        </span>
        <ChevronDown 
          className={cn(
            "w-3.5 h-3.5 transition-transform duration-200",
            isOpen && "rotate-180",
            isRTL && "mr-auto" || "ml-auto"
          )} 
        />
      </button>

      {isOpen && (
        <div 
          className={cn(
            "absolute mt-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 py-1.5 z-50",
            "animate-in fade-in slide-in-from-top-2 duration-200",
            isRTL ? "left-0" : "right-0"
          )}
        >
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => {
                setLocale(loc)
                setIsOpen(false)
              }}
              className={cn(
                "w-full text-left px-4 py-2.5 text-sm transition-all duration-150",
                "hover:bg-slate-50 dark:hover:bg-slate-700/50",
                locale === loc
                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-semibold'
                  : 'text-slate-700 dark:text-slate-300 font-medium',
                isRTL && "text-right"
              )}
            >
              {localeNames[loc]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
