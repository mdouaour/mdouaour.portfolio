import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  const { lang, isRTL } = useLang()
  const T = translations[lang].about

  return (
    <motion.section
      id="about"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="py-20 px-4 bg-slate-800/40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading>{T.title}</SectionHeading>
        <div className="grid md:grid-cols-2 gap-10 mt-10 text-left">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-lg mb-3">
              {T.background}
            </h3>
            <motion.p
              className="text-slate-400 leading-relaxed mb-4"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {T.backgroundText1}
            </motion.p>
            <motion.p
              className="text-slate-400 leading-relaxed mb-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {T.backgroundText2}
            </motion.p>

            <h3 className="text-white font-semibold text-lg mb-3">
              {T.whatIDo}
            </h3>
            <motion.ul
              className="space-y-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {T.services.map((service) => (
                <motion.li
                  key={service}
                  variants={itemVariants}
                  className="flex items-start gap-2 text-slate-400 text-sm"
                >
                  <span className="text-violet-400 mt-0.5 flex-shrink-0">▹</span>
                  {service}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-semibold text-lg mb-3">
              {T.education}
            </h3>
            <motion.ul
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.li variants={itemVariants}>
                <InfoItem icon="🎓" title={T.degree} subtitle={T.university} />
              </motion.li>
              <motion.li variants={itemVariants}>
                <InfoItem icon="🏅" title={T.alx} subtitle={T.alxSub} />
              </motion.li>
              <motion.li variants={itemVariants}>
                <InfoItem icon="📍" title={T.location} subtitle={T.locationSub} />
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
      <h2 className="text-3xl sm:text-4xl font-bold text-white">{children}</h2>
      <motion.div
        className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </div>
  )
}

function InfoItem({ icon, title, subtitle }: { icon: string; title: string; subtitle: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-xl mt-0.5" aria-hidden="true">{icon}</span>
      <div>
        <p className="text-white font-medium">{title}</p>
        <p className="text-slate-400 text-sm">{subtitle}</p>
      </div>
    </div>
  )
}

export { SectionHeading }
