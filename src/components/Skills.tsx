import { motion } from 'motion/react'
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
      { name: 'React', level: 82 },
      { name: 'Next.js', level: 62 },
      { name: 'TypeScript', level: 78 },
      { name: 'Tailwind CSS', level: 84 },
      { name: 'HTML / CSS', level: 88 },
    ],
  },
  {
    categoryKey: 'backend',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Node.js / Express', level: 72 },
      { name: 'REST APIs', level: 78 },
      { name: 'MySQL / SQL', level: 78 },
      { name: 'Docker', level: 48 },
    ],
  },
  {
    categoryKey: 'tools',
    skills: [
      { name: 'Claude Code', level: 92 },
      { name: 'AI SDK / APIs', level: 68 },
      { name: 'Git & GitHub', level: 88 },
      { name: 'Linux / Shell', level: 78 },
      { name: 'Vite / Build Tools', level: 72 },
    ],
  },
  {
    categoryKey: 'languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 78 },
      { name: 'TypeScript', level: 78 },
      { name: 'Java', level: 72 },
      { name: 'C', level: 68 },
    ],
  },
]

export default function Skills() {
  const { lang, isRTL } = useLang()
  const reduce = useReducedMotion()
  const T = translations[lang].skills

  return (
    <motion.section
      id="skills"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="py-24 px-4"
      initial={{ opacity: 0, y: reduce ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: reduce ? 0 : motionTokens.duration.slow }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading>{T.title}</SectionHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.categoryKey}
              initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: motionTokens.duration.normal, delay: reduce ? 0 : i * 0.08 }}
            >
              <h3 className="text-brand font-semibold text-sm uppercase tracking-wide mb-4">
                {T.categories[group.categoryKey]}
              </h3>
              <ul className="space-y-2">
                {group.skills.map(({ name }) => (
                  <li key={name}>
                    <span className="inline-block px-3 py-1.5 border border-brand text-text-muted text-sm">
                      {name}
                    </span>
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
