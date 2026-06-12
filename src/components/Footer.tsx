import { personal } from '../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.04] py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="font-display text-sm font-semibold text-white">
              {personal.shortName}
            </p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">
              Fullstack Developer · Diseño con intención · QA analítico
            </p>
          </div>

          <div className="flex gap-6 text-sm text-[var(--color-text-muted)]">
            <a
              href={personal.cvUrl}
              download
              className="transition-colors hover:text-[var(--color-trust)]"
            >
              CV
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="transition-colors hover:text-[var(--color-trust)]"
            >
              Email
            </a>
            <a href="#inicio" className="transition-colors hover:text-[var(--color-trust)]">
              ↑ Inicio
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-[var(--color-text-muted)]/60">
          © {year} · React · TypeScript · Framer Motion · Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
