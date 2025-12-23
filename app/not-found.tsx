'use client'

import Link from 'next/link'
import { Home } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function NotFound() {
  const { t, dir } = useLanguage()
  const isRTL = dir === 'rtl'

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400">404</h1>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {t.common.notFound?.title || 'Page Not Found'}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          {t.common.notFound?.description || "Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist."}
        </p>
        <Link 
          href="/" 
          className={`btn-primary inline-flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          <Home className={`w-5 h-5 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
          {t.common.notFound?.goHome || 'Go Back Home'}
        </Link>
      </div>
    </div>
  )
}
