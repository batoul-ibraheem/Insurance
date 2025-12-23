'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { dir } = useLanguage()
  const isRTL = dir === 'rtl'
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
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
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Icon container with smooth animation */}
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun 
          className={cn(
            "w-4 h-4 transition-all duration-300 ease-in-out absolute",
            isDark 
              ? "rotate-90 scale-0 opacity-0 text-amber-500" 
              : "rotate-0 scale-100 opacity-100 text-amber-500"
          )} 
        />
        <Moon 
          className={cn(
            "w-4 h-4 transition-all duration-300 ease-in-out absolute",
            isDark 
              ? "rotate-0 scale-100 opacity-100 text-blue-400" 
              : "-rotate-90 scale-0 opacity-0 text-blue-400"
          )} 
        />
      </div>
      
      {/* Text label - hidden on small screens */}
      <span className="hidden sm:inline text-sm font-medium whitespace-nowrap">
        {isDark ? 'Light' : 'Dark'}
      </span>
    </button>
  )
}
