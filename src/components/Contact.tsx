import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { SectionHeading } from './About'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { motionTokens } from '../lib/motionConfig'

const EMAIL = 'yacine23i@hotmail.com'
const WHATSAPP = 'https://wa.me/213664796262'
const FORMSPREE_URL = 'https://formspree.io/f/xjkyekdv'

const EASE_SMOOTH = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function Contact() {
  const { lang, isRTL } = useLang()
  const reduce = useReducedMotion()
  const T = translations[lang].contact

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.06, delayChildren: reduce ? 0 : 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: motionTokens.duration.normal, ease: EASE_SMOOTH } },
  }
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

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
      description: '+213 664 79 62 62',
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
      href: 'https://www.linkedin.com/in/mohammed-yassine-douaouria-0a2272121',
      description: 'linkedin.com/in/mdouaour',
      icon: <LinkedInIcon />,
      highlight: false,
    },
    {
      label: T.facebook,
      href: 'https://www.facebook.com/mdouaourSolutions',
      description: 'facebook.com/mdouaourSolutions',
      icon: <FacebookIcon />,
      highlight: false,
    },
    {
      label: T.facebookProfile,
      href: 'https://www.facebook.com/mdouaour/',
      description: 'facebook.com/mdouaour',
      icon: <FacebookProfileIcon />,
      highlight: false,
    },
    {
      label: T.linktree,
      href: 'https://linktr.ee/mdouaour',
      description: 'linktr.ee/mdouaour',
      icon: <LinktreeIcon />,
      highlight: false,
    },
  ]

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError(null)
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSent(true)
        setFormData({ name: '', email: '', message: '' })
      } else {
        setError(lang === 'ar' ? 'حدث خطأ. حاول مرة أخرى.' : lang === 'fr' ? 'Une erreur est survenue. Réessayez.' : 'Something went wrong. Please try again.')
      }
    } catch {
      setError(lang === 'ar' ? 'فشل الاتصال. تحقق من اتصالك بالإنترنت.' : lang === 'fr' ? 'Échec de connexion. Vérifiez votre connexion.' : 'Connection failed. Check your internet.')
    } finally {
      setSending(false)
    }
  }

  return (
    <motion.section
      id="contact"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="py-20 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading>{T.title}</SectionHeading>
        <motion.p
          className="text-text-muted mt-6 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {T.subtitle}
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-8 max-w-xl mx-auto text-left space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <input
              type="text"
              name="name"
              placeholder={lang === 'ar' ? 'الاسم' : lang === 'fr' ? 'Nom' : 'Name'}
              required
              value={formData.name}
              onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-surface-card border border-border text-text placeholder-text-dim text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20 transition-all"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <input
              type="email"
              name="email"
              placeholder={lang === 'ar' ? 'البريد الإلكتروني' : lang === 'fr' ? 'Email' : 'Email'}
              required
              value={formData.email}
              onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-surface-card border border-border text-text placeholder-text-dim text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20 transition-all"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <textarea
              name="message"
              rows={4}
              placeholder={lang === 'ar' ? 'الرسالة' : lang === 'fr' ? 'Message' : 'Message'}
              required
              value={formData.message}
              onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-surface-card border border-border text-text placeholder-text-dim text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all resize-none"
            />
          </motion.div>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm text-center"
              role="alert"
            >
              {error}
            </motion.p>
          )}
          <motion.div variants={itemVariants}>
            <button
              type="submit"
              disabled={sent || sending}
              className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 disabled:from-violet-600/50 disabled:to-cyan-600/50 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all shadow-lg shadow-violet-500/30 hover:shadow-violet-500/40 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {sending ? (
                <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : null}
              {sent
                ? lang === 'ar'
                  ? 'تم الإرسال ✓'
                  : lang === 'fr'
                    ? 'Envoyé ✓'
                    : 'Sent ✓'
                : sending
                  ? lang === 'ar'
                    ? 'جارٍ الإرسال...'
                    : lang === 'fr'
                      ? 'Envoi...'
                      : 'Sending...'
                  : T.cta}
            </button>
          </motion.div>
        </motion.form>

        <motion.div
          className="grid sm:grid-cols-2 gap-4 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactLinks.map(({ label, href, description, icon, highlight }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noreferrer"
              variants={itemVariants}
              className={`flex items-center gap-4 p-5 rounded-2xl border transition-all group active:scale-[0.98] ${
                highlight
                  ? 'bg-violet-600/10 border-violet-500/40 hover:border-violet-400 hover:bg-violet-600/20 shadow-sm'
                  : 'bg-surface-card border-border hover:border-violet-500/50 hover:bg-surface-elevated/50'
              }`}
              aria-label={label}
            >
              <span
                className={`flex-shrink-0 transition-colors ${
                  highlight
                    ? 'text-violet-400 group-hover:text-violet-300'
                    : 'text-text-muted group-hover:text-violet-400'
                }`}
              >
                {icon}
              </span>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <p className="text-text font-semibold text-sm">{label}</p>
                <p className="text-text-muted text-xs mt-0.5">{description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
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

function FacebookIcon() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function FacebookProfileIcon() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.283 4.177c1.57 0 2.847.65 3.7 1.568l-1.815 1.815c-.432-.493-1.093-.866-1.885-.866-1.463 0-2.685 1.238-2.685 2.706 0 .243.028.477.094.694l-2.667 2.113c-.828-1.152-1.305-2.528-1.305-4.02 0-3.86 3.13-7.01 6.563-7.01zM5.747 8.674c.523-1.06 1.282-1.97 2.214-2.677l2.686 2.126c-.666.49-1.199 1.166-1.514 1.96L5.747 8.674zm13.222 1.887l-3.822 1.84c.153.43.237.895.237 1.38 0 1.347-.68 2.54-1.717 3.264l2.452 2.856c1.64-1.336 2.85-3.38 2.85-6.12 0-.756-.123-1.48-.334-2.163l.334-.057zm-4.402 3.95c0-1.47-1.192-2.663-2.653-2.663a2.67 2.67 0 00-1.28.34L8.53 9.56c.572-.507 1.262-.872 2.037-1.015l1.256 3.928c.126.022.25.038.376.038 1.472 0 2.664 1.193 2.664 2.663 0 .31-.06.604-.158.878l-2.206 2.56a4.37 4.37 0 01-1.523-.266l-.503 3.767c.62.14 1.26.206 1.89.206 2.717 0 5.145-1.065 6.92-2.785l-2.79-3.246c.38-.506.61-1.124.61-1.8z" />
    </svg>
  )
}

function LinktreeIcon() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.953 15.066c-.08-.043-.08.042 0 0m8.09-8.521c.04-.037.04.037 0 0M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0m-.437 4.25h.875c.136 0 .248.112.248.25v5.5l3.286-3.286a.248.248 0 0 1 .351 0l.619.619a.247.247 0 0 1 0 .35L13.25 10.97l3.942 3.94a.248.248 0 0 1 0 .35l-.62.62a.25.25 0 0 1-.35 0L12 11.659l-4.222 4.22a.25.25 0 0 1-.35 0l-.62-.619a.248.248 0 0 1 0-.35l3.942-3.94-3.692-3.688a.248.248 0 0 1 0-.35l.619-.619a.248.248 0 0 1 .351 0L11.314 9.99v-5.49c0-.138.112-.25.249-.25m-3.439 15h7.752a.25.25 0 0 0 .25-.25v-.875a.25.25 0 0 0-.25-.25H8.124a.25.25 0 0 0-.25.25V19a.25.25 0 0 0 .25.25" />
    </svg>
  )
}
