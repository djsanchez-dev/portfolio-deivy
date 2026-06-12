import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Download, MapPin } from 'lucide-react'
import { personal } from '../data/portfolio'
import { splitName } from '../lib/utils'
import { FadeIn } from './motion/FadeIn'

export function Hero() {
  const { first, last } = splitName(personal.name)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 180])
  const opacity = useTransform(scrollY, [0, 450], [1, 0])
  const scale = useTransform(scrollY, [0, 400], [1, 0.95])

  return (
    <section
      id="inicio"
      aria-label="Presentación principal"
      className="section-trust relative flex min-h-[100dvh] items-center justify-center overflow-hidden pt-32 pb-20"
    >
      {/* Resplandor de fondo premium */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[var(--color-trust)]/8 via-[var(--color-authority)]/5 to-transparent blur-[120px] opacity-75"
        aria-hidden
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center"
      >
        <FadeIn delay={0.05}>
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-growth)]/20 bg-[var(--color-growth)]/5 px-4 py-2 text-xs md:text-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-growth)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-growth)]" />
            </span>
            <span className="text-[var(--color-growth)] font-medium">
              {personal.available ? 'Disponible para proyectos' : 'En proyecto activo'}
            </span>
            <span className="text-[var(--color-text-muted)]">·</span>
            <span className="text-[var(--color-text-secondary)] font-medium">Fullstack Pleno</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-8">
          <p className="max-w-2xl text-lg font-medium leading-relaxed text-[#5eead4] md:text-xl">
            {personal.hook}
          </p>
        </FadeIn>

        <h1 className="mt-6 font-display text-display-xl font-bold tracking-tight text-white leading-none">
          <FadeIn delay={0.25} className="inline-block">
            <span className="block text-[var(--color-text-primary)]">{first}</span>
          </FadeIn>{' '}
          <FadeIn delay={0.4} className="inline-block">
            <span className="block text-gradient-trust">{last}</span>
          </FadeIn>
        </h1>

        <FadeIn delay={0.55} className="mt-6 max-w-xl">
          <p className="text-[#a5f3fc] leading-relaxed md:text-lg">
            {personal.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.65} className="mt-4 max-w-xl text-center">
          <p className="leading-relaxed text-[#a5f3fc] md:text-lg font-medium">
            Como reclutador senior, descubre datos claros, métricas de calidad y contacto inmediato.
          </p>
        </FadeIn>

        <FadeIn delay={0.65} className="mt-5 flex items-center justify-center gap-2 text-sm text-[var(--color-text-secondary)]">
          <MapPin className="h-4 w-4 text-[var(--color-trust)] animate-pulse" aria-hidden />
          {personal.location}
        </FadeIn>

        <FadeIn delay={0.75} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#contacto" className="btn-primary">
            Iniciar conversación
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              aria-hidden
            >
              →
            </motion.span>
          </a>
          <a href={personal.cvUrl} download className="btn-secondary">
            <Download className="h-4 w-4" aria-hidden />
            Descargar CV
          </a>
        </FadeIn>

        <FadeIn delay={0.9} className="mt-16 w-full max-w-2xl border-t border-white/[0.06] pt-8">
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: 'Backend', value: 'Java · Python' },
              { label: 'Frontend', value: 'React · Angular' },
              { label: 'Cloud', value: 'AWS · Azure' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium text-[var(--color-text-primary)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#valor"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-trust)]"
          aria-label="Desplazarse hacia la propuesta de valor"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Explorar</span>
          <ArrowDown className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  )
}
