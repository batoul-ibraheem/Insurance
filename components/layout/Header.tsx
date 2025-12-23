'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'
import ThemeToggle from '@/components/ui/ThemeToggle'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t, dir } = useLanguage()
  const isRTL = dir === 'rtl'

  const navigation = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.services, href: '/services' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.faq, href: '/faq' },
    { name: t.nav.contact, href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/50 shadow-sm">
      <nav className="container-custom" aria-label="Global">
        <div className={`flex items-center justify-between h-20 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className={`flex items-center gap-3 group transition-opacity duration-200 hover:opacity-80 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="p-2.5 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-slate-50 tracking-tight">
                {t.common.siteName}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex md:items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
            <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>
            <LanguageSwitcher />
            <ThemeToggle />
            <Link
              href="/contact"
              className="btn-primary ml-2 rtl:ml-0 rtl:mr-2 text-sm"
            >
              {t.common.getQuote}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className={`md:hidden flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex items-center justify-center p-2.5 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className={`py-4 space-y-2 border-t border-slate-200 dark:border-slate-700 ${isRTL ? 'text-right' : 'text-left'}`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2.5 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mx-4 mt-4 btn-primary text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.common.getQuote}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
