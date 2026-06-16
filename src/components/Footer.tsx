import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { motionTokens } from '../lib/motionConfig'

const socialLinks = [
  {
    href: 'https://github.com/mdouaour',
    label: 'GitHub',
    icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3.01-.4c1.02 0 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z',
  },
  {
    href: 'https://linkedin.com/in/mdouaour',
    label: 'LinkedIn',
    icon: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.33V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.38-1.86c3.62 0 4.28 2.38 4.28 5.47v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.1 20.45H3.58V9h3.52v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z',
  },
  {
    href: 'https://x.com/mdouaour',
    label: 'X',
    icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    href: 'https://facebook.com/mdouaour',
    label: 'Facebook',
    icon: 'M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.8-4.7 4.55-4.7 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.5 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07',
  },
]

const navLinks = ['about', 'skills', 'projects', 'contact'] as const

export default function Footer() {
  const { lang, isRTL } = useLang()
  const T = translations[lang].footer
  const Nav = translations[lang].nav
  const year = new Date().getFullYear()
  const reduce = useReducedMotion()

  return (
    <footer
      dir={isRTL ? 'rtl' : 'ltr'}
      className="border-t border-border py-10 text-sm px-4"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-8 text-center sm:text-start">
          <div>
            <h3 className="text-text-muted font-semibold mb-3 uppercase tracking-wide text-xs">
              {isRTL ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="text-text-dim hover:text-emerald-400 transition-colors"
                  >
                    {Nav[key]}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#hero"
                  className="text-text-dim hover:text-emerald-400 transition-colors"
                >
                  {isRTL ? 'أعلى الصفحة' : 'Back to Top'}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-text-muted font-semibold mb-3 uppercase tracking-wide text-xs">
              {isRTL ? 'تواصل' : 'Connect'}
            </h3>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-surface-elevated hover:bg-surface-hover text-text-dim hover:text-emerald-400 transition-all hover:-translate-y-0.5"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={link.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-text-muted font-semibold mb-3 uppercase tracking-wide text-xs">
              {isRTL ? 'معلومات' : 'Info'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:hello@mdouaour.tech`}
                  className="text-text-dim hover:text-emerald-400 transition-colors"
                >
                  hello@mdouaour.tech
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mdouaour/mdouaour.portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-dim hover:text-emerald-400 transition-colors"
                >
                  {T.source}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: reduce ? 1 : 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: motionTokens.duration.normal }}
          className="pt-6 border-t border-border text-center text-text-dim text-xs"
        >
          <p>
            &copy; {year}{' '}
            <span className="text-text-muted font-medium">
              Mohammed Yassine Douaouria
            </span>
            . {T.built}. {T.rights}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
