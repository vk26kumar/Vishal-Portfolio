import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Achievements from '../components/Achievements'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-bg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-bg focus:px-4 focus:py-2.5 focus:rounded-lg focus:font-mono focus:text-[11px] focus:tracking-widest focus:uppercase"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <div className="page-container">
          <div className="hairline" />
        </div>
        <About />
        <div className="page-container">
          <div className="hairline" />
        </div>
        <Experience />
        <div className="page-container">
          <div className="hairline" />
        </div>
        <Projects />
        <div className="page-container">
          <div className="hairline" />
        </div>
        <Skills />
        <div className="page-container">
          <div className="hairline" />
        </div>
        <Achievements />
        <div className="page-container">
          <div className="hairline" />
        </div>
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
