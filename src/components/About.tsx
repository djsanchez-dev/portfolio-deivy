import { education, personal } from '../data/portfolio'
import { FadeIn } from './motion/FadeIn'
import { SectionHeader } from './ui/SectionHeader'

export function About() {
  return (
    <section id="sobre-mi" className="section-authority py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          number="03"
          eyebrow="Perfil profesional"
          tone="authority"
          title={
            <>
              Ingeniería con perspectiva de{' '}
              <span className="text-gradient-trust">negocio y diseño</span>
            </>
          }
          hook="¿Quién está detrás del código?"
          description="Más que un stack técnico: una forma de pensar que conecta requisitos de negocio con soluciones medibles."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <FadeIn delay={0.1} className="lg:col-span-3">
            <div className="glass-strong rounded-2xl p-8 md:p-10">
              <div className="space-y-6 leading-[1.8]">
                <p className="text-lg text-[var(--color-text-primary)]">{personal.summary}</p>
                <p>
                  Mi trayectoria abarca sectores críticos — banca, telecomunicaciones y
                  consultoría — donde la precisión técnica y la experiencia de usuario no son
                  opcionales, sino requisitos de producción.
                </p>
                <p>
                  Combino backend robusto con interfaces que reducen fricción cognitiva,
                  siempre con métricas claras de éxito y entregas iterativas.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {['Scrum', 'TDD', 'Microservicios', 'REST/SOAP'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-[var(--color-authority)]/15 bg-[var(--color-authority)]/5 px-3 py-1.5 text-xs font-medium text-[var(--color-authority)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.25} className="lg:col-span-2">
            <div className="glass rounded-2xl p-8 md:h-full">
              <div className="flex items-center gap-3">
                <div className="h-10 w-1 rounded-full bg-gradient-to-b from-[var(--color-trust)] to-[var(--color-authority)]" />
                <h3 className="font-display text-lg font-semibold text-white">Formación</h3>
              </div>

              <div className="mt-6 space-y-1">
                <p className="font-medium text-[var(--color-trust)]">{education.degree}</p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {education.institution} · {education.location}
                </p>
                <p className="text-xs text-[var(--color-text-muted)]">{education.period}</p>
              </div>

              <ul className="mt-8 space-y-4">
                {education.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[var(--color-text-secondary)]">
                    <span className="mt-2 h-1 w-4 shrink-0 rounded-full bg-[var(--color-trust)]/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
