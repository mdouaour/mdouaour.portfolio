import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import { useLang } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import { translations } from './data/translations'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import SEO from './components/SEO'
import type { Lang } from './types'

function App() {
  const { lang, isRTL } = useLang()

  return (
    <>
      <SEO lang={lang as Lang} t={translations[lang].seo} />
      <div dir={isRTL ? 'rtl' : 'ltr'} lang={lang === 'ar' ? 'ar' : undefined}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
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
