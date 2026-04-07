import { useState } from 'react'
import { useLang } from '../context/LanguageContext.jsx'
import { translations } from '../data/translations.js'

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'ar', label: 'عر' },
]

export default function Navbar() {
  const { lang, setLang, isRTL } = useLang()
  const T = translations[lang].nav
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: T.about, href: '#about' },
    { label: T.skills, href: '#skills' },
    { label: T.projects, href: '#projects' },
    { label: T.contact, href: '#contact' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <span className="text-violet-400 font-bold text-lg tracking-tight">
          mdouaour
        </span>

        {/* Desktop nav */}
        <ul className="hidden sm:flex gap-6 items-center">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-slate-300 hover:text-violet-400 transition-colors text-sm font-medium"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Language switcher + mobile toggle */}
        <div className="flex items-center gap-2">
          <div
            className="flex items-center gap-1 bg-slate-800 rounded-lg p-1 border border-slate-700"
            role="group"
            aria-label="Language selector"
          >
            {LANGUAGES.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`px-2 py-0.5 rounded text-xs font-semibold transition-colors ${
                  lang === code
                    ? 'bg-violet-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden p-2 text-slate-400 hover:text-violet-400 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-slate-800 bg-slate-900/95 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-300 hover:text-violet-400 transition-colors text-sm font-medium py-1"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

