import { track } from '@vercel/analytics/react'

/**
 * Tipos de eventos personalizados del portfolio.
 */
export type PortfolioEvent =
  | { name: 'cta_click'; data?: { label: string } }
  | { name: 'cta_scroll_to_section'; data?: { label: string } }
  | { name: 'download_cv'; data?: { label?: string } }
  | { name: 'contact_form_submit'; data?: { name?: string } }
  | { name: 'contact_form_error'; data?: { field: string } }
  | { name: 'navigation_click'; data?: { label: string } }
  | { name: 'navigation_mobile_menu'; data?: { label: string } }
  | { name: 'social_click'; data?: { label: string } }
  | { name: 'blog_read_more'; data?: { title: string } }
  | { name: 'experience_expand'; data?: { company: string } }
  | { name: 'experience_collapse'; data?: { company: string } }

const isDev = import.meta.env.DEV

/**
 * Envía un evento personalizado a Vercel Analytics.
 * En desarrollo solo se loguea en consola, no se envía.
 */
export function trackEvent(event: PortfolioEvent) {
  if (isDev) {
    console.info('[Analytics] Event:', event.name, event.data)
    return
  }

  track(event.name, event.data)
}
