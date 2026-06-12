import { CheckCircle2, Download, Mail, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import { personal } from '../data/portfolio'
import { trackEvent } from '../lib/analytics'
import { cn } from '../lib/utils'
import { FadeIn } from './motion/FadeIn'
import { SectionHeader } from './ui/SectionHeader'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (form: HTMLFormElement) => {
    const data = new FormData(form)
    const newErrors: Record<string, string> = {}
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (name.length < 2) newErrors.name = 'Ingresa tu nombre completo'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Email inválido'
    if (message.length < 10) newErrors.message = 'Mínimo 10 caracteres'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  return (
    <section id="contacto" className="section-warmth py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--color-warmth)]/10 bg-white/5 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-warmth)]/5 via-transparent to-[var(--color-trust)]/5" />
          <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-[var(--color-warmth)]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-[var(--color-trust)]/10 blur-3xl" />

          <div className="relative p-8 md:p-16">
            <div className="grid gap-12 lg:grid-cols-2">
              <FadeIn>
                <SectionHeader
                  eyebrow="Contacto"
                  tone="warmth"
                  title={
                    <>
                      El siguiente paso es{' '}
                      <span className="text-gradient-trust">una conversación</span>
                    </>
                  }
                  description="Un solo camino claro hacia la acción. Sin formularios complejos, sin fricción innecesaria."
                />

                <div className="mt-8 space-y-4">
                  <a
                    href={`mailto:${personal.email}`}
                    className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-[var(--color-trust)]/20 hover:bg-[var(--color-trust)]/5"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-trust)]/10 text-[var(--color-trust)] transition-colors group-hover:bg-[var(--color-trust)]/20">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)]">Email</p>
                      <p className="text-sm text-white">{personal.email}</p>
                    </div>
                  </a>
                  <a
                    href={`tel:${personal.phone.replace(/\s/g, '')}`}
                    className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-[var(--color-trust)]/20 hover:bg-[var(--color-trust)]/5"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-trust)]/10 text-[var(--color-trust)] transition-colors group-hover:bg-[var(--color-trust)]/20">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)]">Teléfono</p>
                      <p className="text-sm text-white">{personal.phone}</p>
                    </div>
                  </a>
                </div>

                <p className="mt-6 text-xs text-[var(--color-text-muted)]">
                  Respuesta estimada en menos de 24 horas · Zona horaria Lima (UTC-5)
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                {submitted ? (
                  <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-[var(--color-growth)]/20 bg-[var(--color-growth)]/5 p-10 text-center">
                    <CheckCircle2 className="h-12 w-12 text-[var(--color-growth)]" />
                    <p className="mt-4 font-display text-xl font-semibold text-white">
                      ¡Cliente de email abierto!
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                      Completa el envío desde tu aplicación de correo.
                    </p>
                  </div>
                ) : (
                  <>
                  <form
                    className="space-y-5"
                    noValidate
                    onSubmit={(e) => {
                      e.preventDefault()
                      if (!validate(e.currentTarget)) {
                        trackEvent({ name: 'contact_form_error', data: { field: 'name' } })
                        return
                      }

                      const form = e.currentTarget
                      const data = new FormData(form)
                      const name = data.get('name')
                      const email = data.get('email')
                      const message = data.get('message')
                      const subject = encodeURIComponent(`Contacto portfolio — ${name}`)
                      const body = encodeURIComponent(
                        `De: ${name} (${email})\n\n${message}`,
                      )
                      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
                      trackEvent({ name: 'contact_form_submit', data: { name: String(name) } })
                      setSubmitted(true)
                    }}
                  >
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm text-[var(--color-text-muted)]">
                        Nombre
                      </label>
                      <input
                        id="name"
                        name="name"
                        autoComplete="name"
                        className={cn(
                          'w-full rounded-xl border bg-black/30 px-4 py-3 text-white outline-none transition-colors placeholder:text-[var(--color-text-muted)]/50 focus:border-[var(--color-trust)]/50',
                          errors.name ? 'border-red-400/50' : 'border-white/10',
                        )}
                        placeholder="Tu nombre"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400" role="alert">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm text-[var(--color-text-muted)]">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className={cn(
                          'w-full rounded-xl border bg-black/30 px-4 py-3 text-white outline-none transition-colors placeholder:text-[var(--color-text-muted)]/50 focus:border-[var(--color-trust)]/50',
                          errors.email ? 'border-red-400/50' : 'border-white/10',
                        )}
                        placeholder="tu@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400" role="alert">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm text-[var(--color-text-muted)]">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className={cn(
                          'w-full resize-none rounded-xl border bg-black/30 px-4 py-3 text-white outline-none transition-colors placeholder:text-[var(--color-text-muted)]/50 focus:border-[var(--color-trust)]/50',
                          errors.message ? 'border-red-400/50' : 'border-white/10',
                        )}
                        placeholder="Cuéntame sobre tu proyecto, equipo y timeline..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-400" role="alert">{errors.message}</p>
                      )}
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      <Send className="h-4 w-4" />
                      Enviar mensaje
                    </button>
                  </form>
                  <a href="/cv.pdf" download className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-medium text-white transition-all hover:bg-white/10">
                    <Download className="h-4 w-4" />
                    Descargar CV
                  </a>
                </>
                )}
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
