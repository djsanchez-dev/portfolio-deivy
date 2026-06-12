import { stats } from '../data/portfolio'
import { useCountUp } from '../hooks/useCountUp'
import { cn } from '../lib/utils'
import { FadeIn } from './motion/FadeIn'

const toneColors = {
  trust: 'text-[var(--color-trust)]',
  authority: 'text-[var(--color-authority)]',
  energy: 'text-[var(--color-energy)]',
  growth: 'text-[var(--color-growth)]',
}

function StatItem({ value, suffix, label, tone }: (typeof stats)[0]) {
  const { count, ref } = useCountUp(value)

  return (
    <div
      ref={ref}
      className="glass-interactive rounded-2xl p-6 text-center md:p-8"
    >
      <p className="font-display text-4xl font-bold text-white md:text-5xl">
        {count}
        <span className={cn(toneColors[tone])}>{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-[var(--color-text-muted)]">{label}</p>
    </div>
  )
}

export function Stats() {
  return (
    <section aria-label="Métricas clave" className="py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 md:grid-cols-4 md:gap-6">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.08}>
            <StatItem {...stat} />
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
