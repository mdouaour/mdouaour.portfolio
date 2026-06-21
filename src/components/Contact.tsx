import { useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { SectionHeading } from './About'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { motionTokens } from '../lib/motionConfig'

const EMAIL = 'yacine23i@hotmail.com'
const WHATSAPP = 'https://wa.me/213664796262'
const FORMSPREE_URL = 'https://formspree.io/f/xjkyekdv'

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
    visible: { opacity: 1, y: 0, transition: { duration: motionTokens.duration.normal, ease: motionTokens.easing.smooth } },
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
    },
    {
      label: T.whatsapp,
      href: WHATSAPP,
      description: '+213 664 79 62 62',
      icon: <WhatsAppIcon />,
    },
    {
      label: T.github,
      href: 'https://github.com/mdouaour',
      description: 'github.com/mdouaour',
      icon: <GithubIcon />,
    },
    {
      label: T.linkedin,
      href: 'https://www.linkedin.com/in/mohammed-yassine-douaouria-0a2272121',
      description: 'linkedin.com/in/mdouaour',
      icon: <LinkedInIcon />,
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
      className="py-24 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading>{T.title}</SectionHeading>
        <motion.p
          className="text-text-muted mt-6 leading-relaxed max-w-xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {T.subtitle}
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-8 max-w-lg mx-auto text-left space-y-4"
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
              className="w-full px-4 py-3 bg-surface-card border border-border text-text placeholder-text-dim text-sm focus:outline-none focus:border-brand transition-all"
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
              className="w-full px-4 py-3 bg-surface-card border border-border text-text placeholder-text-dim text-sm focus:outline-none focus:border-brand transition-all"
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
              className="w-full px-4 py-3 bg-surface-card border border-border text-text placeholder-text-dim text-sm focus:outline-none focus:border-brand transition-all resize-none"
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
              className="w-full px-6 py-3 bg-brand hover:bg-brand-dark disabled:bg-brand/50 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors flex items-center justify-center gap-2"
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
          {contactLinks.map(({ label, href, description, icon }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noreferrer"
              variants={itemVariants}
              className="flex items-center gap-4 p-5 border border-border hover:border-brand/40 transition-colors group"
              aria-label={label}
            >
              <span className="flex-shrink-0 text-text-dim group-hover:text-brand transition-colors">
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
