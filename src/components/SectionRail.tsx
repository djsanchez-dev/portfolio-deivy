import { useEffect, useState } from 'react'
import { sectionRail } from '../data/portfolio'
import { cn } from '../lib/utils'

export function SectionRail() {
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const sections = sectionRail
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Navegación por secciones"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex"
    >
      {sectionRail.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-label={section.label}
          aria-current={active === section.id ? 'true' : undefined}
          className="group relative flex items-center justify-end"
        >
          <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded-md bg-[var(--color-base-elevated)] px-2 py-1 text-xs text-[var(--color-text-secondary)] opacity-0 transition-opacity group-hover:opacity-100">
            {section.label}
          </span>
          <span
            className={cn(
              'section-rail-dot',
              active === section.id && 'active',
            )}
          />
        </a>
      ))}
    </nav>
  )
}
