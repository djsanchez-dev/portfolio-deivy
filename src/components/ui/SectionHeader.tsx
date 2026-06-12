import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { FadeIn } from '../motion/FadeIn'

type SectionHeaderProps = {
  eyebrow: string
  title: ReactNode
  description?: string
  hook?: string
  number?: string
  tone?: 'trust' | 'authority' | 'energy' | 'warmth'
  align?: 'left' | 'center'
}

const toneMap = {
  trust: 'text-[var(--color-trust)]',
  authority: 'text-[var(--color-authority)]',
  energy: 'text-[var(--color-energy)]',
  warmth: 'text-[var(--color-warmth)]',
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  hook,
  number,
  tone = 'trust',
  align = 'left',
}: SectionHeaderProps) {
  return (
    <FadeIn className={cn(align === 'center' && 'text-center mx-auto max-w-3xl')}>
      <div
        className={cn(
          'mb-6 flex items-center gap-4',
          align === 'center' && 'justify-center',
        )}
      >
        {number && (
          <span
            className={cn(
              'font-display text-5xl font-bold opacity-20',
              toneMap[tone],
            )}
            aria-hidden
          >
            {number}
          </span>
        )}
        <p
          className={cn(
            'font-display text-xs font-semibold uppercase tracking-[0.3em]',
            toneMap[tone],
          )}
        >
          {eyebrow}
        </p>
      </div>

      <h2 className="text-display-lg font-display font-bold text-[var(--color-text-primary)]">
        {title}
      </h2>

      {hook && (
        <p className="mt-4 text-lg italic text-[var(--color-text-secondary)] hook-underline inline-block">
          {hook}
        </p>
      )}

      {description && (
        <p
          className={cn(
            'mt-5 max-w-2xl text-[#a5f3fc] leading-relaxed',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </FadeIn>
  )
}
