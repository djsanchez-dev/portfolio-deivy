import { motion } from 'framer-motion'
import { bentoCards } from '../data/portfolio'
import { cn } from '../lib/utils'
import { FadeIn, staggerContainer, staggerItem } from './motion/FadeIn'
import { SectionHeader } from './ui/SectionHeader'

const toneStyles = {
  trust: 'border-[var(--color-trust)]/15 from-[var(--color-trust)]/8',
  authority: 'border-[var(--color-authority)]/15 from-[var(--color-authority)]/8',
  energy: 'border-[var(--color-energy)]/15 from-[var(--color-energy)]/8',
  growth: 'border-[var(--color-growth)]/15 from-[var(--color-growth)]/8',
  warmth: 'border-[var(--color-warmth)]/15 from-[var(--color-warmth)]/8',
}

const toneText = {
  trust: 'text-[var(--color-trust)]',
  authority: 'text-[var(--color-authority)]',
  energy: 'text-[var(--color-energy)]',
  growth: 'text-[var(--color-growth)]',
  warmth: 'text-[var(--color-warmth)]',
}

export function BentoShowcase() {
  return (
    <section id="valor" className="section-trust relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-subtle" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          number="01"
          eyebrow="Propuesta de valor"
          tone="trust"
          title={
            <>
              Todo lo que necesitas saber en{' '}
              <span className="text-gradient-trust">5 segundos</span>
            </>
          }
          hook="¿Por qué dedicar tu atención a este perfil?"
          description="Diseñado con patrón bento: información escaneable que respeta tu tiempo y activa interés por profundizar."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="bento-grid mt-16"
        >
          {bentoCards.map((card) => (
            <motion.article
              key={card.title}
              variants={staggerItem}
              className={cn(
                'glass-interactive group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6 md:p-8 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300',
                card.span,
                toneStyles[card.tone as keyof typeof toneStyles],
              )}
            >
              <div className="flex h-full flex-col justify-between gap-6">
                <div>
                  <span
                    className={cn(
                      'font-display text-xs font-bold uppercase tracking-widest',
                      toneText[card.tone as keyof typeof toneText],
                    )}
                  >
                    {card.metric}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-white md:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {card.description}
                  </p>
                </div>

                <div
                  className={cn(
                    'h-px w-full bg-gradient-to-r to-transparent opacity-40',
                    card.tone === 'trust' && 'from-[var(--color-trust)]',
                    card.tone === 'authority' && 'from-[var(--color-authority)]',
                    card.tone === 'energy' && 'from-[var(--color-energy)]',
                    card.tone === 'growth' && 'from-[var(--color-growth)]',
                    card.tone === 'warmth' && 'from-[var(--color-warmth)]',
                  )}
                />
              </div>

              <div
                className={cn(
                  'pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40',
                  card.tone === 'trust' && 'bg-[var(--color-trust)]',
                  card.tone === 'authority' && 'bg-[var(--color-authority)]',
                  card.tone === 'energy' && 'bg-[var(--color-energy)]',
                  card.tone === 'growth' && 'bg-[var(--color-growth)]',
                  card.tone === 'warmth' && 'bg-[var(--color-warmth)]',
                )}
              />
            </motion.article>
          ))}
        </motion.div>

        <FadeIn delay={0.3} className="mt-12 text-center">
          <a
            href="#sobre-mi"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-trust)]"
          >
            Quiero conocer más sobre el perfil
            <span aria-hidden>↓</span>
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
