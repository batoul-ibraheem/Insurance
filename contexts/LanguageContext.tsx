'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { Locale, defaultLocale, locales, isRTL } from '@/lib/i18n/config'
import translations from '@/lib/i18n/translations'

type Translations = typeof translations.en

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved language preference
    const savedLocale = localStorage.getItem('locale') as Locale
    if (savedLocale && locales.includes(savedLocale)) {
      setLocaleState(savedLocale)
    } else {
      // Set initial document direction based on default locale
      document.documentElement.dir = isRTL(defaultLocale) ? 'rtl' : 'ltr'
      document.documentElement.lang = defaultLocale
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Save to localStorage
    localStorage.setItem('locale', locale)
    
    // Set document direction
    document.documentElement.dir = isRTL(locale) ? 'rtl' : 'ltr'
    document.documentElement.lang = locale
  }, [locale, mounted])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
  }

  const t = translations[locale]
  const dir = isRTL(locale) ? 'rtl' : 'ltr'

  // Always provide the context, even before mount
  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

