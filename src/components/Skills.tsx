import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { SectionHeading } from './About'
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

export default function Skills() {
  const { lang, isRTL } = useLang()
  const T = translations[lang].skills

  return (
    <motion.section
      id="skills"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="py-20 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading>{T.title}</SectionHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.categoryKey}
              className="bg-slate-800 dark:bg-slate-800 rounded-2xl p-5 border border-slate-700 dark:border-slate-700 hover:border-violet-500/40 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className="text-violet-300 font-semibold text-sm uppercase tracking-wide mb-4">
                {T.categories[group.categoryKey]}
              </h3>
              <ul className="space-y-3">
                {group.skills.map(({ name, level }) => (
                  <li key={name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300 dark:text-slate-300 text-sm">{name}</span>
                      <span className="text-violet-400 text-xs font-mono">
                        {level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-700 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-violet-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
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
