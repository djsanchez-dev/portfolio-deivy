export function BackgroundGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div className="absolute inset-0 bg-[var(--color-base)]" />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148,163,184,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="absolute left-1/4 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[var(--color-trust)]/[0.04] blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[700px] rounded-full bg-[var(--color-authority)]/[0.04] blur-[120px]" />
      <div className="absolute bottom-1/3 left-0 h-[300px] w-[400px] rounded-full bg-[var(--color-warmth)]/[0.02] blur-[100px]" />

      <div className="noise-overlay" />
      <div className="vignette" />
    </div>
  )
}
