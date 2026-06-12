import { motion } from 'framer-motion'
import { softSkills, skillGroups } from '../data/portfolio'
import { cn } from '../lib/utils'
import { FadeIn, staggerContainer, staggerItem } from './motion/FadeIn'
import { SectionHeader } from './ui/SectionHeader'

const colorMap = {
  trust: {
    border: 'border-[var(--color-trust)]/15',
    bg: 'from-[var(--color-trust)]/10',
    text: 'text-[var(--color-trust)]',
    bar: 'from-[var(--color-trust)] to-[var(--color-trust-dim)]',
  },
  authority: {
    border: 'border-[var(--color-authority)]/15',
    bg: 'from-[var(--color-authority)]/10',
    text: 'text-[var(--color-authority)]',
    bar: 'from-[var(--color-authority)] to-[var(--color-authority-dim)]',
  },
  growth: {
    border: 'border-[var(--color-growth)]/15',
    bg: 'from-[var(--color-growth)]/10',
    text: 'text-[var(--color-growth)]',
    bar: 'from-[var(--color-growth)] to-emerald-600',
  },
  energy: {
    border: 'border-[var(--color-energy)]/15',
    bg: 'from-[var(--color-energy)]/10',
    text: 'text-[var(--color-energy)]',
    bar: 'from-[var(--color-energy)] to-amber-600',
  },
}

export function Skills() {
  return (
    <section id="habilidades" className="section-energy py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          number="06"
          eyebrow="Stack técnico"
          tone="energy"
          title={
            <>
              Capacidades agrupadas para{' '}
              <span className="text-gradient-energy">escaneo instantáneo</span>
            </>
          }
          hook="¿Qué tan profundo es el dominio en cada área?"
          description="Cada grupo respeta la Ley de Miller (7±2). Las barras de proficiencia comunican nivel sin abrumar con texto."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid gap-5 sm:grid-cols-2"
        >
          {skillGroups.map((group) => {
            const colors = colorMap[group.color as keyof typeof colorMap]

            return (
              <motion.article
                key={group.category}
                variants={staggerItem}
                className={cn(
                  'glass-interactive group rounded-2xl border bg-gradient-to-br to-transparent p-6 md:p-8 group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 transition-transform',
                  colors.border,
                  colors.bg,
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {group.category}
                  </h3>
                  <span className={cn('font-display text-sm font-bold', colors.text)}>
                    {group.proficiency}%
                  </span>
                </div>

                <div className="metric-bar mt-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${group.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className={cn('metric-bar-fill bg-gradient-to-r', colors.bar)}
                  />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-black/25 px-3 py-1.5 text-sm text-[var(--color-text-secondary)] transition-colors group-hover:bg-black/40 group-hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        <FadeIn delay={0.2} className="mt-16">
          <h3 className="font-display text-xl font-semibold text-white">
            Habilidades blandas
          </h3>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            El factor humano que diferencia un desarrollador senior de uno que solo escribe código.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {softSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-full border border-white/[0.08] px-4 py-2 text-sm text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-warmth)]/30 hover:text-white"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
