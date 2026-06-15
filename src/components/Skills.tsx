import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { SectionHeading } from './About'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { motionTokens } from '../lib/motionConfig'
import type { SkillGroup } from '../types'

const skillGroups: SkillGroup[] = [
  {
    categoryKey: 'frontend',
    skills: [
      { name: 'React', level: 80 },
      { name: 'JavaScript / TypeScript', level: 78 },
      { name: 'Tailwind CSS', level: 82 },
      { name: 'HTML / CSS', level: 88 },
    ],
  },
  {
    categoryKey: 'backend',
    skills: [
      { name: 'Node.js / Express', level: 70 },
      { name: 'Python', level: 90 },
      { name: 'REST APIs', level: 78 },
      { name: 'SQLite / MySQL', level: 78 },
    ],
  },
  {
    categoryKey: 'tools',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'AI-Assisted Dev', level: 85 },
      { name: 'Vite / Build Tools', level: 72 },
      { name: 'Linux / Shell', level: 78 },
    ],
  },
  {
    categoryKey: 'languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 78 },
      { name: 'Java', level: 72 },
      { name: 'C', level: 68 },
    ],
  },
]

function useVariants(reduce: boolean) {
  return {
    group: {
      hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 30 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: reduce ? 0 : motionTokens.duration.normal, delay: reduce ? 0 : i * 0.1, ease: motionTokens.easing.smooth },
      }),
    },
    bar: {
      hidden: { width: reduce ? '0%' : '0%' },
      visible: (level: number) => ({
        width: `${level}%`,
        transition: { duration: reduce ? 0.01 : 0.8, ease: motionTokens.easing.smooth },
      }),
    },
    section: {
      hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 40 },
      visible: { opacity: 1, y: 0 },
    },
  }
}

export default function Skills() {
  const { lang, isRTL } = useLang()
  const reduce = useReducedMotion()
  const T = translations[lang].skills
  const V = useVariants(reduce)

  return (
    <motion.section
      id="skills"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="py-20 px-4"
      variants={V.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: reduce ? 0 : motionTokens.duration.slow }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading>{T.title}</SectionHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.categoryKey}
              custom={i}
              variants={V.group}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-5 border border-slate-700 hover:border-violet-500/40 transition-colors"
            >
              <h3 className="text-violet-300 font-semibold text-sm uppercase tracking-wide mb-4">
                {T.categories[group.categoryKey]}
              </h3>
              <ul className="space-y-3">
                {group.skills.map(({ name, level }) => (
                  <li key={name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300 text-sm">{name}</span>
                      <span className="text-violet-400 text-xs font-mono font-variant-numeric-tabular">
                        {level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
                        custom={level}
                        variants={V.bar}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        role="progressbar"
                        aria-valuenow={level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${name} proficiency: ${level}%`}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
