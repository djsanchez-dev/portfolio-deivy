import { motion } from 'framer-motion'
import { useState } from 'react'
import { Briefcase, ChevronDown, Code2, Lightbulb, Zap } from 'lucide-react'
import { experience } from '../data/portfolio'
import { cn } from '../lib/utils'
import { FadeIn } from './motion/FadeIn'
import { SectionHeader } from './ui/SectionHeader'

const sectorColors: Record<string, string> = {
  Consultoría: 'bg-[var(--color-authority)]/10 text-[var(--color-authority)]',
  Banca: 'bg-[var(--color-trust)]/10 text-[var(--color-trust)]',
  Telecom: 'bg-[var(--color-energy)]/10 text-[var(--color-energy)]',
  Outsourcing: 'bg-[var(--color-warmth)]/10 text-[var(--color-warmth)]',
  Tech: 'bg-[var(--color-growth)]/10 text-[var(--color-growth)]',
}

const sectorDotColors: Record<string, string> = {
  Consultoría: 'bg-[var(--color-authority)]',
  Banca: 'bg-[var(--color-trust)]',
  Telecom: 'bg-[var(--color-energy)]',
  Outsourcing: 'bg-[var(--color-warmth)]',
  Tech: 'bg-[var(--color-growth)]',
}

export function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <section id="experiencia" className="section-trust py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          number="04"
          eyebrow="Trayectoria"
          tone="trust"
          title={
            <>
              Evidencia concreta, no{' '}
              <span className="text-gradient-trust">promesas vacías</span>
            </>
          }
          hook="¿Dónde ha aplicado estas habilidades en el mundo real?"
          description="Progresión de backend junior a fullstack pleno. Cada rol expandible para quien quiera profundizar — sin obligar a leer todo."
        />

        <div className="relative mt-16">
          <div
            className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-[var(--color-trust)] via-[var(--color-authority)] to-transparent md:block"
            aria-hidden
          />

          <div className="space-y-3">
            {experience.map((job, index) => {
              const isOpen = expanded === index
              const dotColor = sectorDotColors[job.sector] ?? sectorDotColors.Tech

              return (
                <FadeIn key={`${job.company}-${job.period}`} delay={index * 0.06}>
                  <motion.article
                    layout
                    className={cn(
                      'glass-interactive overflow-hidden rounded-2xl',
                      isOpen && 'border-[var(--color-trust)]/20 bg-[var(--color-trust)]/[0.02]',
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setExpanded(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start gap-4 p-6 text-left md:gap-6 md:p-8"
                    >
                      <div className="relative z-10 hidden shrink-0 md:block">
                        <div
                          className={cn(
                            'flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300',
                            isOpen
                              ? 'border-[var(--color-trust)] bg-[var(--color-trust)]/10 shadow-[0_0_20px_rgba(45,212,191,0.2)]'
                              : 'border-white/10 bg-[var(--color-base-surface)]',
                          )}
                        >
                          <div
                            className={cn(
                              'h-2.5 w-2.5 rounded-full transition-colors',
                              isOpen ? dotColor : 'bg-[var(--color-text-muted)]',
                            )}
                          />
                        </div>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="font-display text-lg font-semibold text-white md:text-xl">
                                {job.role}
                              </h3>
                              <span
                                className={cn(
                                  'rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider',
                                  sectorColors[job.sector] ?? sectorColors.Tech,
                                )}
                              >
                                {job.sector}
                              </span>
                            </div>
                            <div className="mt-1 flex flex-wrap items-center gap-2">
                              <p className="text-[var(--color-trust)]">{job.company}</p>
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
                          <span className="shrink-0 rounded-full bg-white/[0.04] px-3 py-1 text-xs text-[var(--color-text-muted)]">
                            {job.period}
                          </span>
                        </div>

                        {/* Impact badge — siempre visible */}
                        {job.impact && (
                          <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-trust)]/10 px-3 py-1.5 text-xs font-medium text-[var(--color-trust)]">
                            <Zap className="h-3 w-3" />
                            {job.impact}
                          </div>
                        )}

                        <motion.div
                          initial={false}
                          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          {/* Highlights */}
                          <ul className="mt-5 space-y-3">
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
                            <div className="mt-6">
                              <div className="mb-2.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-trust)]">
                                <Code2 className="h-3.5 w-3.5" />
                                Stack Tecnológico
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {job.techStack.map((tech) => (
                                  <span
                                    key={tech}
                                    className="rounded-lg border border-[var(--color-trust)]/15 bg-[var(--color-trust)]/5 px-3 py-1.5 text-xs font-medium text-[var(--color-trust)]"
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
                              <div className="mb-2.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-authority)]">
                                <Lightbulb className="h-3.5 w-3.5" />
                                Competencias aplicadas
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {job.skills.map((skill) => (
                                  <span
                                    key={skill}
                                    className="rounded-lg border border-[var(--color-authority)]/15 bg-[var(--color-authority)]/5 px-3 py-1.5 text-xs font-medium text-[var(--color-authority)]"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      </div>

                      <ChevronDown
                        className={cn(
                          'mt-1 h-5 w-5 shrink-0 transition-all duration-300',
                          isOpen
                            ? 'rotate-180 text-[var(--color-trust)]'
                            : 'text-[var(--color-text-muted)]',
                        )}
                        aria-hidden
                      />
                    </button>
                  </motion.article>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
