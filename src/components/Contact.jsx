import { useLang } from '../context/LanguageContext.jsx'
import { translations } from '../data/translations.js'
import { SectionHeading } from './About.jsx'

// ── Update these with your real details ─────────────────────────────────────
const EMAIL = 'mdouaour@gmail.com'           // TODO: replace with your email
const WHATSAPP = 'https://wa.me/213XXXXXXXXX' // TODO: replace with your number
// ────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const { lang, isRTL } = useLang()
  const T = translations[lang].contact

  const contactLinks = [
    {
      label: T.email,
      href: `mailto:${EMAIL}`,
      description: EMAIL,
      icon: <EmailIcon />,
      highlight: true,
    },
    {
      label: T.whatsapp,
      href: WHATSAPP,
      description: '+213 XX XXX XXXX',
      icon: <WhatsAppIcon />,
      highlight: true,
    },
    {
      label: T.github,
      href: 'https://github.com/mdouaour',
      description: 'github.com/mdouaour',
      icon: <GithubIcon />,
      highlight: false,
    },
    {
      label: T.linkedin,
      href: 'https://www.linkedin.com/in/mdouaour',
      description: 'linkedin.com/in/mdouaour',
      icon: <LinkedInIcon />,
      highlight: false,
    },
  ]

  return (
    <section
      id="contact"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="py-20 px-4"
    >
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading>{T.title}</SectionHeading>
        <p className="text-slate-400 mt-6 leading-relaxed max-w-2xl mx-auto">
          {T.subtitle}
        </p>

        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-2 mt-8 px-8 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-violet-500/30"
        >
          {T.cta} →
        </a>

        <div className="grid sm:grid-cols-2 gap-4 mt-10">
          {contactLinks.map(({ label, href, description, icon, highlight }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noreferrer"
              className={`flex items-center gap-4 p-5 rounded-2xl border transition-colors group ${
                highlight
                  ? 'bg-violet-600/10 border-violet-500/40 hover:border-violet-400 hover:bg-violet-600/20'
                  : 'bg-slate-800 border-slate-700 hover:border-violet-500/50 hover:bg-slate-700/50'
              }`}
              aria-label={label}
            >
              <span
                className={`flex-shrink-0 transition-colors ${
                  highlight
                    ? 'text-violet-400 group-hover:text-violet-300'
                    : 'text-slate-300 group-hover:text-violet-400'
                }`}
              >
                {icon}
              </span>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <p className="text-white font-semibold text-sm">{label}</p>
                <p className="text-slate-400 text-xs mt-0.5">{description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function EmailIcon() {
  return (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3.01-.4c1.02 0 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.56V9H3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

