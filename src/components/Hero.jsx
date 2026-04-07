import { useLang } from '../context/LanguageContext.jsx'
import { translations } from '../data/translations.js'

export default function Hero() {
  const { lang, isRTL } = useLang()
  const T = translations[lang].hero

  return (
    <section
      id="hero"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16"
    >
      {/* Avatar */}
      <div className="w-28 h-28 rounded-full mb-6 ring-4 ring-violet-500/40 shadow-lg shadow-violet-500/20 overflow-hidden">
        <img
          src="https://github.com/mdouaour.png"
          alt="Mohammed Yassine Douaouria"
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-slate-400 text-sm mb-2 tracking-wide">{T.greeting}</p>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
        Mohammed Yassine{' '}
        <span className="text-violet-400">Douaouria</span>
      </h1>

      <p className="text-violet-300 font-semibold text-base sm:text-lg mb-4">
        {T.tagline}
      </p>

      <p className="text-slate-400 max-w-2xl mb-8 leading-relaxed text-sm sm:text-base">
        {T.description}
      </p>

      {/* Social links */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <a
          href="https://github.com/mdouaour"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-colors border border-slate-700"
          aria-label="GitHub"
        >
          <GithubIcon />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mohammed-yassine-douaouria-0a2272121"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-colors border border-slate-700"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
          LinkedIn
        </a>
        <a
          href="https://linktr.ee/mdouaour"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-colors border border-slate-700"
          aria-label="Linktree"
        >
          <LinktreeIcon />
          Linktree
        </a>
        <a
          href="https://twitter.com/mdoer"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-colors border border-slate-700"
          aria-label="Twitter/X"
        >
          <XIcon />
          Twitter
        </a>
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-violet-500/30"
        >
          {T.cta} ↓
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-xl border border-violet-500 hover:bg-violet-500/10 text-violet-300 font-semibold text-sm transition-colors"
        >
          {T.hire}
        </a>
      </div>
    </section>
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

