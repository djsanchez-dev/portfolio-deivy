import { useEffect } from 'react'

const ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID as string | undefined

/**
 * Componente que inyecta el script de Google Ads (conversiones).
 * Se renderiza una sola vez al montar la aplicación.
 */
export function GoogleAdsScript() {
  useEffect(() => {
    if (!ADS_ID) return

    // Evitar duplicados en desarrollo con StrictMode
    if (document.getElementById('google-ads-script')) return

    const script = document.createElement('script')
    script.id = 'google-ads-script'
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`
    script.async = true
    document.head.appendChild(script)

    const inline = document.createElement('script')
    inline.id = 'google-ads-inline'
    inline.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${ADS_ID}');
    `
    document.head.appendChild(inline)

    return () => {
      document.getElementById('google-ads-script')?.remove()
      document.getElementById('google-ads-inline')?.remove()
    }
  }, [])

  return null
}

/**
 * Hook para trackear conversiones de Google Ads.
 * Úsalo después de acciones exitosas (ej: envío de formulario).
 */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export function trackConversion(conversionLabel: string, value?: number) {
  if (!ADS_ID || typeof window.gtag === 'undefined') return

  window.gtag('event', 'conversion', {
    send_to: `${ADS_ID}/${conversionLabel}`,
    value: value ?? 1,
    currency: 'USD',
  })
}
