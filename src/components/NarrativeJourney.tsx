import { motion } from 'framer-motion'
import { useState } from 'react'
import { Briefcase, ChevronDown, Code2, Lightbulb, Zap } from 'lucide-react'
import { experience } from '../data/portfolio'
import { cn } from '../lib/utils'
import { FadeIn } from './motion/FadeIn'
import { SectionHeader } from './ui/SectionHeader'

const sectorColors: Record<string, { dot: string; bg: string; text: string }> = {
  Consultoría: {
    dot: 'bg-[var(--color-authority)]',
    bg: 'bg-[var(--color-authority)]/10',
    text: 'text-[var(--color-authority)]',
  },
  Banca: {
    dot: 'bg-[var(--color-trust)]',
    bg: 'bg-[var(--color-trust)]/10',
    text: 'text-[var(--color-trust)]',
  },
  Telecom: {
    dot: 'bg-[var(--color-energy)]',
    bg: 'bg-[var(--color-energy)]/10',
    text: 'text-[var(--color-energy)]',
  },
  Outsourcing: {
    dot: 'bg-[var(--color-warmth)]',
    bg: 'bg-[var(--color-warmth)]/10',
    text: 'text-[var(--color-warmth)]',
  },
  Tech: {
    dot: 'bg-[var(--color-growth)]',
    bg: 'bg-[var(--color-growth)]/10',
    text: 'text-[var(--color-growth)]',
  },
}

export function NarrativeJourney() {
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <section id="experiencia" className="section-trust border-y border-white/[0.04] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          number="02"
          eyebrow="Trayectoria profesional"
          tone="trust"
          title={
            <>
              Experiencia real en{' '}
              <span className="text-gradient-trust">sectores críticos</span>
            </>
          }
          hook="¿Dónde ha aplicado estas habilidades en el mundo real?"
          description="Progresión de backend junior a fullstack pleno en empresas de consultoría, banca y telecomunicaciones."
        />

        <div className="relative mt-16">
          {/* Línea central del timeline */}
          <div
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--color-trust)] via-[var(--color-authority)] to-[var(--color-warmth)] md:left-1/2 md:block md:-translate-x-px"
            aria-hidden
          />

          <div className="space-y-12 md:space-y-16">
            {experience.map((job, i) => {
              const colors = sectorColors[job.sector] ?? sectorColors.Tech
              const isEven = i % 2 === 0
              const isOpen = expanded === i

              return (
                <FadeIn key={`${job.company}-${job.period}`} delay={i * 0.08}>
                  <div
                    className={cn(
                      'relative grid items-start gap-8 md:grid-cols-2',
                      !isEven && 'md:[direction:rtl]',
                    )}
                  >
                    {/* Card de experiencia */}
                    <div className={cn(!isEven && 'md:[direction:ltr]')}>
                      <motion.article
                        layout
                        className={cn(
                          'glass-interactive overflow-hidden rounded-2xl transition-all',
                          isOpen && 'border-[var(--color-trust)]/20 bg-[var(--color-trust)]/[0.02]',
                        )}
                      >
                        <button
                          type="button"
                          onClick={() => setExpanded(isOpen ? null : i)}
                          aria-expanded={isOpen}
                          className="w-full p-6 text-left md:p-8"
                        >
                          {/* Header */}
                          <div className="flex flex-wrap items-start justify-between gap-3">
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="font-display text-lg font-semibold text-white md:text-xl">
                                  {job.role}
                                </h3>
                                <span
                                  className={cn(
                                    'rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider',
                                    colors.bg,
                                    colors.text,
                                  )}
                                >
                                  {job.sector}
                                </span>
                              </div>
                              <div className="mt-1 flex flex-wrap items-center gap-2">
                                <p className="text-[var(--color-trust)] font-medium">{job.company}</p>
                                {job.client && (
                                  <>
                                    <span className="text-white/20">·</span>
                                    <p className="text-sm text-[var(--color-text-muted)]">
                                      <Briefcase className="mr-1 inline h-3 w-3" />
                                      {job.client}
                                    </p>
                                  </>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="shrink-0 rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]">
                                {job.period}
                              </span>
                              <ChevronDown
                                className={cn(
                                  'h-4 w-4 shrink-0 transition-all duration-300',
                                  isOpen
                                    ? 'rotate-180 text-[var(--color-trust)]'
                                    : 'text-[var(--color-text-muted)]',
                                )}
                                aria-hidden
                              />
                            </div>
                          </div>

                          {/* Impact badge — siempre visible */}
                          {job.impact && (
                            <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-trust)]/10 px-3 py-1.5 text-xs font-medium text-[var(--color-trust)]">
                              <Zap className="h-3 w-3" />
                              {job.impact}
                            </div>
                          )}

                          {/* Contenido expandible */}
                          <motion.div
                            initial={false}
                            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            {/* Highlights */}
                            <ul className="mt-5 space-y-2.5">
                              {job.highlights.map((h) => (
                                <li
                                  key={h}
                                  className="flex gap-3 text-sm leading-relaxed text-[var(--color-text-secondary)]"
                                >
                                  <span className="mt-2 h-1 w-3 shrink-0 rounded-full bg-[var(--color-authority)]/60" />
                                  {h}
                                </li>
                              ))}
                            </ul>

                            {/* Tech Stack */}
                            {job.techStack && (
                              <div className="mt-5">
                                <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-trust)]">
                                  <Code2 className="h-3 w-3" />
                                  Stack
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                  {job.techStack.map((tech) => (
                                    <span
                                      key={tech}
                                      className="rounded-md border border-[var(--color-trust)]/15 bg-[var(--color-trust)]/5 px-2.5 py-1 text-[11px] font-medium text-[var(--color-trust)]"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Skills */}
                            {job.skills && (
                              <div className="mt-4">
                                <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-authority)]">
                                  <Lightbulb className="h-3 w-3" />
                                  Competencias
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                  {job.skills.map((skill) => (
                                    <span
                                      key={skill}
                                      className="rounded-md border border-[var(--color-authority)]/15 bg-[var(--color-authority)]/5 px-2.5 py-1 text-[11px] font-medium text-[var(--color-authority)]"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </motion.div>
                        </button>
                      </motion.article>
                    </div>

                    {/* Hito en la línea central */}
                    <div
                      className="absolute left-1/2 top-8 hidden -translate-x-1/2 items-center justify-center md:flex z-20"
                      aria-hidden
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className={cn(
                          'h-5 w-5 rounded-full ring-4 ring-[var(--color-base)] shadow-lg',
                          colors.dot,
                        )}
                      />
                    </div>

                    {/* Lado vacío (para el zigzag) — solo en desktop */}
                    <div className="hidden md:block" />
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
