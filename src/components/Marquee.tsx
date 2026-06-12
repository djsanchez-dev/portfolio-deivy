import { companies } from '../data/portfolio'

export function Marquee() {
  const items = [...companies, ...companies]

  return (
    <section aria-label="Empresas donde he trabajado" className="relative overflow-hidden border-y border-white/[0.04] bg-[var(--color-base-elevated)]/50 py-7">
      <p className="mb-4 text-center text-[10px] uppercase tracking-[0.4em] text-[var(--color-text-muted)]">
        Confianza validada por
      </p>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[var(--color-base)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[var(--color-base)] to-transparent" />

      <div className="marquee-track flex w-max gap-16">
        {items.map((company, i) => (
          <div key={`${company.name}-${i}`} className="flex items-center gap-16">
            <div className="flex flex-col items-center gap-1">
              <span className="whitespace-nowrap font-display text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                {company.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                {company.sector}
              </span>
            </div>
            <span className="text-[var(--color-trust)]/30" aria-hidden>◆</span>
          </div>
        ))}
      </div>
    </section>
  )
}
