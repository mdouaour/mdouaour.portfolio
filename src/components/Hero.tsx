import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { motionTokens, springs } from '../lib/motionConfig'

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
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/10 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-emerald-500/8 via-emerald-500/5 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
        animate={reduce ? {} : { scale: [1, 1.06, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-radial from-cyan-500/8 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
        animate={reduce ? {} : { scale: [1, 1.08, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <motion.div
        className="relative"
        animate={reduce ? {} : { scale: [1, 1.04, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          className="w-28 h-28 rounded-full mb-6 ring-4 ring-emerald-500/40 shadow-lg shadow-emerald-500/20 overflow-hidden"
          initial={{ scale: reduce ? 1 : 0 }}
          animate={{ scale: 1 }}
          transition={reduce ? { duration: 0 } : springs.bouncy}
          whileHover={{ scale: 1.06 }}
        >
          <img
            src="https://github.com/mdouaour.png"
            alt="Mohammed Yassine Douaouria"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.p
        className="text-emerald-400 text-sm mb-2 tracking-widest uppercase font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {T.greeting}
      </motion.p>

      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text leading-tight mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        {T.name.split(' ').slice(0, -1).join(' ')}{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">
          {T.name.split(' ').pop()}
        </span>
      </motion.h1>

      <motion.p
        className="text-emerald-300 font-semibold text-base sm:text-lg mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {T.tagline}
      </motion.p>

      <motion.p
        className="text-text-muted max-w-2xl mb-8 leading-relaxed text-sm sm:text-base"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        {T.description}
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <SocialLink href="https://github.com/mdouaour" label="GitHub" icon={<GithubIcon />} />
        <SocialLink
          href="https://www.linkedin.com/in/mohammed-yassine-douaouria-0a2272121"
          label="LinkedIn"
          icon={<LinkedInIcon />}
        />
        <SocialLink href="https://www.facebook.com/mdouaour/" label="Facebook" icon={<FacebookIcon />} />
        <SocialLink href="https://linktr.ee/mdouaour" label="Linktree" icon={<LinktreeIcon />} />
        <SocialLink href="https://x.com/mdouaour" label="X" icon={<XIcon />} />
      </motion.div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-text font-semibold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:scale-[0.97]"
        >
          {T.cta} ↓
        </a>
      </motion.div>
    </motion.section>
  )
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-card/80 hover:bg-surface-elevated/80 text-text-muted text-sm font-medium transition-all duration-200 border border-border hover:border-emerald-500/40 active:scale-[0.97]"
      aria-label={label}
    >
      {icon}
      {label}
    </a>
  )
}

function GithubIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3.01-.4c1.02 0 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.56V9H3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function LinktreeIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.953 15.066c-.08-.043-.08.042 0 0m8.09-8.521c.04-.037.04.037 0 0M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0m-.437 4.25h.875c.136 0 .248.112.248.25v5.5l3.286-3.286a.248.248 0 0 1 .351 0l.619.619a.247.247 0 0 1 0 .35L13.25 10.97l3.942 3.94a.248.248 0 0 1 0 .35l-.62.62a.25.25 0 0 1-.35 0L12 11.659l-4.222 4.22a.25.25 0 0 1-.35 0l-.62-.619a.248.248 0 0 1 0-.35l3.942-3.94-3.692-3.688a.248.248 0 0 1 0-.35l.619-.619a.248.248 0 0 1 .351 0L11.314 9.99v-5.49c0-.138.112-.25.249-.25m-3.439 15h7.752a.25.25 0 0 0 .25-.25v-.875a.25.25 0 0 0-.25-.25H8.124a.25.25 0 0 0-.25.25V19a.25.25 0 0 0 .25.25" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
