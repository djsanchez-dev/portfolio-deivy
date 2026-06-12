import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/portfolio'
import { FadeIn } from './motion/FadeIn'
import { SectionHeader } from './ui/SectionHeader'

export function Testimonials() {
  return (
    <section id="testimonios" className="section-authority border-y border-white/[0.04] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          number="04"
          eyebrow="Recomendaciones"
          tone="authority"
          title={
            <>
              Lo que dicen quienes han trabajado{' '}
              <span className="text-gradient-trust">conmigo</span>
            </>
          }
          hook="¿No basta con mi palabra? Aquí la de mis colegas."
          description="Testimonios reales de compañeros y líderes que han compartido trinchera conmigo en proyectos de producción."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                className="glass-interactive group relative flex h-full flex-col rounded-2xl p-6 md:p-8"
              >
                <Quote className="absolute right-6 top-6 h-8 w-8 text-[var(--color-trust)]/10" aria-hidden />

                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-trust)] to-[var(--color-authority)] font-display text-sm font-bold text-white">
                    {t.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-[var(--color-text-muted)]">{t.role}</p>
                  </div>
                </div>

                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                <p className="mt-4 text-[10px] uppercase tracking-wider text-[var(--color-trust)]">
                  {t.context}
                </p>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
