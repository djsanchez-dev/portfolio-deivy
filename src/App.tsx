import { About } from './components/About'
import { BackgroundGrid } from './components/BackgroundGrid'
import { BentoShowcase } from './components/BentoShowcase'
import { Contact } from './components/Contact'
import { CursorGlow } from './components/CursorGlow'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { NarrativeJourney } from './components/NarrativeJourney'
import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { SectionRail } from './components/SectionRail'
import { Skills } from './components/Skills'
import { SkipLink } from './components/SkipLink'
import { Stats } from './components/Stats'
import { useLenis } from './hooks/useLenis'

function App() {
  useLenis()

  return (
    <>
      <SkipLink />
      <BackgroundGrid />
      <CursorGlow />
      <ScrollProgress />
      <SectionRail />
      <Navbar />

      <main id="contenido-principal" className="relative z-10">
        <Hero />
        <Marquee />
        <Stats />
        <BentoShowcase />
        <NarrativeJourney />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
