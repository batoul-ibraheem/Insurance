/**
 * Application-wide constants
 * Centralizes magic numbers and strings for better maintainability
 */

export const ANIMATION_DELAYS = {
  SHORT: 100,
  MEDIUM: 200,
  LONG: 300,
  EXTRA_LONG: 400,
} as const

export const CONTACT_FORM = {
  SUBMISSION_DELAY: 1000,
  SUCCESS_MESSAGE_DURATION: 5000,
} as const

export const ANIMATED_BACKGROUND = {
  BUBBLE_COUNT: 50,
  MIN_SIZE: 20,
  MAX_SIZE: 100,
  MIN_SPEED: 0.5,
  MAX_SPEED: 2,
  MIN_OPACITY: 0.1,
  MAX_OPACITY: 0.3,
} as const

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const

