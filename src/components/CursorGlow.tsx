import { useMousePosition } from '../hooks/useMousePosition'

export function CursorGlow() {
  const { x, y } = useMousePosition()

  return (
    <div className="pointer-events-none fixed inset-0 z-[2] hidden lg:block" aria-hidden>
      <div
        className="absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-500 ease-out"
        style={{
          left: x,
          top: y,
          background:
            'radial-gradient(circle, rgba(45,212,191,0.06) 0%, rgba(129,140,248,0.03) 35%, transparent 65%)',
        }}
      />
    </div>
  )
}
