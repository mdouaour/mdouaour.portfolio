import { HelmetProvider } from 'react-helmet-async'
import { motion, useScroll } from 'framer-motion'
import './index.css'
import { useLang } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import { translations } from './data/translations'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About, { SectionDivider } from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ThreeBackground from './components/ThreeBackground'
import SEO from './components/SEO'
import type { Lang } from './types'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-600 to-cyan-500 origin-left z-[60]"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

function App() {
  const { lang, isRTL } = useLang()

  return (
    <>
      <ThreeBackground />
      <SEO lang={lang as Lang} t={translations[lang].seo} />
      <ScrollProgress />
      <div dir={isRTL ? 'rtl' : 'ltr'} lang={lang === 'ar' ? 'ar' : undefined} className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}

export default function AppWrapper() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  )
}
