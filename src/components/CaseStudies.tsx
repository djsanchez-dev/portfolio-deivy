import { motion } from 'framer-motion'
import { ArrowUpRight, BarChart3, Clock, GitBranch, Target } from 'lucide-react'
import { caseStudies } from '../data/portfolio'
import { cn } from '../lib/utils'
import { FadeIn } from './motion/FadeIn'
import { SectionHeader } from './ui/SectionHeader'

const iconMap = {
  target: Target,
  clock: Clock,
  'bar-chart': BarChart3,
  'git-branch': GitBranch,
}

export function CaseStudies() {
  return (
    <section id="casos" className="section-trust py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          number="03"
          eyebrow="Casos de estudio"
          tone="trust"
          title={
            <>
              Resultados medibles, no{' '}
              <span className="text-gradient-trust">promesas vacías</span>
            </>
          }
          hook="¿Qué impacto real he generado en cada proyecto?"
          description="Cada caso describe el problema, la solución técnica y el resultado cuantificable. Diseñado para reclutadores que buscan evidencia concreta."
        />

        <div className="mt-16 space-y-8">
          {caseStudies.map((cs, i) => {
            const Icon = iconMap[cs.icon as keyof typeof iconMap] ?? Target

            return (
              <FadeIn key={cs.title} delay={i * 0.1}>
                <motion.article
                  whileHover={{ x: 4 }}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--color-trust)]/10 bg-gradient-to-r from-[var(--color-trust)]/[0.02] to-transparent p-6 transition-all hover:border-[var(--color-trust)]/20 md:p-8"
                >
                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[var(--color-trust)]/5 blur-3xl transition-opacity group-hover:opacity-100" />

                  <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-trust)]/10">
                      <Icon className="h-5 w-5 text-[var(--color-trust)]" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-lg font-semibold text-white md:text-xl">
                            {cs.title}
                          </h3>
                          <p className="text-sm text-[var(--color-trust)]">{cs.company} · {cs.role}</p>
                        </div>
                        <span className="shrink-0 rounded-full border border-[var(--color-trust)]/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-trust)]">
                          {cs.period}
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                        {cs.description}
                      </p>

                      {/* Métricas destacadas */}
                      <div className="mt-4 flex flex-wrap gap-3">
                        {cs.metrics.map((m) => (
                          <span
                            key={m.label}
                            className={cn(
                              'inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium',
                              m.type === 'positive'
                                ? 'bg-[var(--color-growth)]/10 text-[var(--color-growth)]'
                                : 'bg-[var(--color-trust)]/10 text-[var(--color-trust)]',
                            )}
                          >
                            {m.value}
                            <span className="text-[var(--color-text-muted)]">·</span>
                            {m.label}
                          </span>
                        ))}
                      </div>

                      {/* Stack */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {cs.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-[11px] font-medium text-[var(--color-text-muted)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[var(--color-trust)]/30 transition-all group-hover:text-[var(--color-trust)] group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                  </div>
                </motion.article>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
