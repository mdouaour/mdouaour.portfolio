import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { motionTokens } from '../lib/motionConfig'

function useVariants() {
  const reduce = useReducedMotion()
  return {
    container: {
      hidden: {},
      visible: {
        transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: reduce ? 0 : 0.15 },
      },
    },
    item: {
      hidden: { opacity: reduce ? 1 : 0, x: reduce ? 0 : -16 },
      visible: { opacity: 1, x: 0, transition: { duration: motionTokens.duration.normal, ease: motionTokens.easing.smooth } },
    },
    card: {
      hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 },
      visible: { opacity: 1, y: 0, transition: { duration: motionTokens.duration.slow, ease: motionTokens.easing.smooth } },
    },
  }
}

export default function About() {
  const { lang, isRTL } = useLang()
  const reduce = useReducedMotion()
  const T = translations[lang].about
  const V = useVariants()

  return (
    <motion.section
      id="about"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="py-24 px-4 bg-surface-alt"
      initial={{ opacity: 0, y: reduce ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: reduce ? 0.01 : motionTokens.duration.slow }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading>{T.title}</SectionHeading>
        <div className="grid md:grid-cols-2 gap-12 mt-12 text-left">
          <motion.div
            variants={V.card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-text font-semibold text-lg mb-4">
              {T.background}
            </h3>
            <motion.p
              className="text-text-muted leading-relaxed mb-4"
              variants={V.item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {T.backgroundText1}
            </motion.p>
            <motion.p
              className="text-text-muted leading-relaxed mb-8"
              variants={V.item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {T.backgroundText2}
            </motion.p>

            <h3 className="text-text font-semibold text-lg mb-4">
              {T.whatIDo}
            </h3>
            <motion.ul
              className="space-y-2"
              variants={V.container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {T.services.map((service) => (
                <motion.li
                  key={service}
                  variants={V.item}
                  className="flex items-start gap-2 text-text-muted text-sm"
                >
                  <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                  {service}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={V.card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: reduce ? 0 : 0.1 }}
          >
            <h3 className="text-text font-semibold text-lg mb-4">
              {T.education}
            </h3>
            <motion.ul
              className="space-y-4"
              variants={V.container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.li variants={V.item}>
                <InfoItem title={T.degree} subtitle={T.university} />
              </motion.li>
              <motion.li variants={V.item}>
                <InfoItem title={T.alx} subtitle={T.alxSub} />
              </motion.li>
              <motion.li variants={V.item}>
                <InfoItem title={T.location} subtitle={T.locationSub} />
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center">
      <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-2 block">
        {children}
      </span>
      <div className="w-8 h-px bg-accent mx-auto" />
    </div>
  )
}

function InfoItem({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="border-l-2 border-brand pl-4">
      <p className="text-text font-medium">{title}</p>
      <p className="text-text-dim text-sm mt-1">{subtitle}</p>
    </div>
  )
}

export { SectionHeading }

export function SectionDivider() {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className="max-w-5xl mx-auto px-4"
      initial={{ opacity: reduce ? 1 : 0, scaleX: reduce ? 1 : 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: reduce ? 0 : motionTokens.duration.slow, ease: motionTokens.easing.smooth }}
    >
      <div className="h-px bg-border" />
    </motion.div>
  )
}
