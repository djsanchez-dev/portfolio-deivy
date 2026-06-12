import { motion } from 'framer-motion'
import { ArrowRight, Bookmark } from 'lucide-react'
import { blogPosts } from '../data/portfolio'
import { trackEvent } from '../lib/analytics'
import { FadeIn } from './motion/FadeIn'
import { SectionHeader } from './ui/SectionHeader'

const categoryColors: Record<string, string> = {
  Arquitectura: 'text-[var(--color-trust)] bg-[var(--color-trust)]/10 border-[var(--color-trust)]/20',
  QA: 'text-[var(--color-authority)] bg-[var(--color-authority)]/10 border-[var(--color-authority)]/20',
  Carrera: 'text-[var(--color-energy)] bg-[var(--color-energy)]/10 border-[var(--color-energy)]/20',
}

export function BlogSection() {
  return (
    <section id="blog" className="section-authority border-y border-white/[0.04] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          number="08"
          eyebrow="Blog técnico"
          tone="authority"
          title={
            <>
              Artículos que{' '}
              <span className="text-gradient-trust">demuestran expertise</span>
            </>
          }
          hook="¿Sabes cuándo un desarrollador realmente domina un tema? Cuando puede enseñarlo."
          description="Aquí comparto aprendizajes reales de mi experiencia en producción. No teoría abstracta — lecciones aplicadas con código, métricas y contexto."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <FadeIn key={post.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                className="glass-interactive group flex h-full flex-col rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`rounded-md border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${categoryColors[post.category] ?? 'text-[var(--color-text-muted)] bg-white/5 border-white/10'}`}
                  >
                    {post.category}
                  </span>
                  <Bookmark className="h-4 w-4 text-[var(--color-text-muted)]/30 transition-colors group-hover:text-[var(--color-trust)]" aria-hidden />
                </div>

                <h3 className="mt-4 flex-1 font-display text-base font-semibold leading-snug text-white">
                  {post.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded px-2 py-0.5 text-[10px] font-medium text-[var(--color-text-muted)] bg-white/[0.04]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {post.date} · {post.readTime}
                  </span>
                  <button
                    type="button"
                    onClick={() => trackEvent({ name: 'blog_read_more', data: { title: post.title } })}
                    className="inline-flex items-center gap-1 text-xs font-medium text-[var(--color-trust)] transition-colors hover:text-[var(--color-trust-dim)]"
                  >
                    Leer
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-10 text-center">
          <p className="text-sm text-[var(--color-text-muted)]">
            Más artículos próximamente.{' '}
            <a
              href={`mailto:${'sanchezcoronadodeivy5@gmail.com'}?subject=Suscripción blog`}
              className="text-[var(--color-trust)] underline underline-offset-2 hover:text-[var(--color-trust-dim)]"
            >
              Suscríbete para recibir notificaciones
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
