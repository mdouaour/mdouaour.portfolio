import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { motionTokens } from '../lib/motionConfig'

export default function Hero() {
  const { lang, isRTL } = useLang()
  const reduce = useReducedMotion()
  const T = translations[lang].hero

  return (
    <motion.section
      id="hero"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 relative overflow-hidden"
      initial={{ opacity: 0, y: reduce ? 0 : 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0.01 : motionTokens.duration.slow }}
    >
      <motion.span
        className="inline-block bg-brand text-white px-3 py-1 text-xs font-medium tracking-wider uppercase mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {T.greeting}
      </motion.span>

      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        {T.name.split(' ').slice(0, -1).join(' ')}{' '}
        <span className="text-accent">
          {T.name.split(' ').pop()}
        </span>
      </motion.h1>

      <motion.p
        className="text-text-muted font-medium text-base sm:text-lg mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {T.tagline}
      </motion.p>

      <motion.p
        className="text-text-dim max-w-xl mb-10 leading-relaxed text-sm sm:text-base"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        {T.description}
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <a
          href="https://github.com/mdouaour"
          target="_blank"
          rel="noreferrer"
          className="text-text-dim hover:text-brand text-sm font-medium transition-colors"
          aria-label="GitHub"
        >
          GitHub
        </a>
        <span className="text-text-dim/40">/</span>
        <a
          href="https://www.linkedin.com/in/mohammed-yassine-douaouria-0a2272121"
          target="_blank"
          rel="noreferrer"
          className="text-text-dim hover:text-brand text-sm font-medium transition-colors"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
        <span className="text-text-dim/40">/</span>
        <a
          href="https://x.com/mdouaour"
          target="_blank"
          rel="noreferrer"
          className="text-text-dim hover:text-brand text-sm font-medium transition-colors"
          aria-label="X"
        >
          X
        </a>
        <span className="text-text-dim/40">/</span>
        <a
          href="https://www.facebook.com/mdouaour/"
          target="_blank"
          rel="noreferrer"
          className="text-text-dim hover:text-brand text-sm font-medium transition-colors"
          aria-label="Facebook"
        >
          Facebook
        </a>
      </motion.div>

      <motion.div
        className="flex justify-center gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-text text-surface text-sm font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
        >
          {T.cta} →
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-text text-text text-sm font-medium hover:bg-text hover:text-surface transition-colors active:scale-[0.97]"
        >
          Get in Touch
        </a>
      </motion.div>
    </motion.section>
  )
}
