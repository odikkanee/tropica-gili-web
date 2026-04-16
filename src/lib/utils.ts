import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToHashTarget(id: string, offset = 112) {
  if (typeof window === 'undefined') {
    return false
  }

  const element = document.getElementById(id)

  if (!element) {
    return false
  }

  const top = Math.max(
    element.getBoundingClientRect().top + window.scrollY - offset,
    0,
  )

  window.scrollTo({ top, behavior: 'smooth' })
  return true
}
