/**
 * Shared TypeScript type definitions for the application
 */

export interface NavigationItem {
  name: string
  href: string
}

export interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  href?: string
  features?: string[]
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface Stat {
  icon: React.ComponentType<{ className?: string }>
  value: string
  label: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>
  title: string
  content: string
  link: string | null
}

