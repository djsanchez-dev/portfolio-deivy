import { motion } from 'framer-motion'
import { BookOpen, Eye, Fingerprint, Lightbulb, Target, TrendingUp } from 'lucide-react'
import { FadeIn } from './motion/FadeIn'
import { SectionHeader } from './ui/SectionHeader'

const steps = [
  {
    icon: Eye,
    title: '1. Escanea la propuesta de valor',
    description: 'El bento grid te da toda la información clave en 5 segundos: stack, sectores, metodología. Es el gancho para decidir si profundizas.',
    detail: 'Psicología cognitiva: la memoria de trabajo solo retiene 7±2 elementos. Por eso el diseño bento usa esa misma estructura.',
    color: 'trust',
  },
  {
    icon: Fingerprint,
    title: '2. Valida con casos de estudio',
    description: 'Cada caso de estudio tiene métricas concretas. No son claims vacíos — hay datos reales respaldando cada afirmación.',
    detail: 'Técnica de entrevista STAR (Situation, Task, Action, Result) aplicada a cada experiencia laboral.',
    color: 'authority',
  },
  {
    icon: TrendingUp,
    title: '3. Confirma con recomendaciones',
    description: 'Testimonios de personas reales que han trabajado conmigo. Son verificables y contextualizados por proyecto.',
    detail: 'Prueba social: las recomendaciones de terceros tienen 3x más peso que la autopromoción en procesos de selección.',
    color: 'growth',
  },
  {
    icon: Target,
    title: '4. Profundiza en mi experiencia',
    description: 'Cada rol es expandible con highlights, tech stack y competencias aplicadas. Sin saturación de información.',
    detail: 'Revelación progresiva: primero el impacto, luego los detalles. El usuario elige cuánto quiere profundizar.',
    color: 'energy',
  },
  {
    icon: Lightbulb,
    title: '5. Lee el blog técnico',
    description: 'Artículos que demuestran mi capacidad de comunicación técnica, pensamiento crítico y dominio de los temas.',
    detail: 'Un blog técnico bien escrito vale más que mil líneas de código en GitHub para demostrar expertise.',
    color: 'warmth',
  },
  {
    icon: BookOpen,
    title: '6. Activa el contacto',
    description: 'Un CTA claro, múltiples canales y respuesta estimada en <24h. Sin fricción, sin formularios eternos.',
    detail: 'Ley de Hick: a más opciones, más tiempo para decidir. Por eso solo hay un CTA dominante y canales claros.',
  },
]

export function DidacticGuide() {
  return (
    <section id="guia" className="section-trust border-t border-white/[0.04] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          number="07"
          eyebrow="Guía didáctica"
          tone="trust"
          title={
            <>
              Cómo leer este portfolio{' '}
              <span className="text-gradient-trust">(sí, tiene método)</span>
            </>
          }
          hook="¿Por qué está diseñado así? Toda decisión tiene una razón."
          description="Este portfolio está construido con principios de psicología cognitiva, UX persuasivo y diseño orientado a conversión. Cada sección tiene un propósito, y aquí te explico cuál es."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon

            return (
              <FadeIn key={step.title} delay={i * 0.08}>
                <motion.article
                  whileHover={{ y: -4 }}
                  className="glass-interactive group flex h-full flex-col rounded-2xl p-6 transition-all md:p-8"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-trust)]/10">
                    <Icon className="h-5 w-5 text-[var(--color-trust)]" />
                  </div>

                  <h3 className="mt-4 font-display text-base font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {step.description}
                  </p>

                  <details className="group mt-4">
                    <summary className="cursor-pointer text-xs font-medium text-[var(--color-trust)] hover:text-[var(--color-trust-dim)]">
                      Ver fundamento técnico →
                    </summary>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-muted)]">
                      {step.detail}
                    </p>
                  </details>
                </motion.article>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn delay={0.2} className="mt-12 rounded-2xl border border-[var(--color-energy)]/10 bg-[var(--color-energy)]/5 p-6 md:p-8">
          <p className="text-center text-sm leading-relaxed text-[var(--color-text-secondary)]">
            💡 <strong className="text-white">Dato adicional:</strong> Si eres reclutador, este portfolio está optimizado para
            que tomes una decisión informada en{' '}
            <strong className="text-[var(--color-trust)]">menos de 2 minutos</strong>. Cada sección responde una pregunta
            específica que un reclutador senior se hace al evaluar un perfil.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
