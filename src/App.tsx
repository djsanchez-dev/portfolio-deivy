import { Analytics } from '@vercel/analytics/react'
import { lazy, Suspense } from 'react'
import { BackgroundGrid } from './components/BackgroundGrid'
import { BlogSection } from './components/BlogSection'
import { CaseStudies } from './components/CaseStudies'
import { DidacticGuide } from './components/DidacticGuide'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Footer } from './components/Footer'
import { GoogleAdsScript } from './components/GoogleAds'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { SectionRail } from './components/SectionRail'
import { SkipLink } from './components/SkipLink'
import { Testimonials } from './components/Testimonials'
import { useLenis } from './hooks/useLenis'

// Lazy loading para componentes fuera del viewport inicial
const Stats = lazy(() => import('./components/Stats').then((m) => ({ default: m.Stats })))
const BentoShowcase = lazy(() => import('./components/BentoShowcase').then((m) => ({ default: m.BentoShowcase })))
const NarrativeJourney = lazy(() => import('./components/NarrativeJourney').then((m) => ({ default: m.NarrativeJourney })))
const About = lazy(() => import('./components/About').then((m) => ({ default: m.About })))
const Skills = lazy(() => import('./components/Skills').then((m) => ({ default: m.Skills })))
const Contact = lazy(() => import('./components/Contact').then((m) => ({ default: m.Contact })))
const CursorGlow = lazy(() => import('./components/CursorGlow').then((m) => ({ default: m.CursorGlow })))

function App() {
  useLenis()

  return (
    <>
      {/* Global */}
      <SkipLink />
      <BackgroundGrid />
      <ErrorBoundary>
        <Suspense fallback={null}>
          <CursorGlow />
        </Suspense>
      </ErrorBoundary>
      <ScrollProgress />
      <SectionRail />
      <Navbar />

      {/* Vercel Analytics — auto page views, sin configuración */}
      <Analytics />

      <GoogleAdsScript />

      <main id="contenido-principal" className="relative z-10">
        <Hero />
        <Marquee />

        <ErrorBoundary>
          <Suspense fallback={null}>
            <Stats />
            <BentoShowcase />
            <CaseStudies />
            <Testimonials />
            <NarrativeJourney />
            <About />
            <Skills />
            <DidacticGuide />
            <BlogSection />
            <Contact />
          </Suspense>
        </ErrorBoundary>
      </main>

      <Footer />
    </>
  )
}

export default App
