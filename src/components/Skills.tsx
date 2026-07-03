import { motion, useMotionValue, useTransform, useSpring, useInView, useMotionValueEvent } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { SectionHeading } from './About'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { motionTokens } from '../lib/motionConfig'
import { useEffect, useRef, useState } from 'react'
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
              className="bg-surface-card rounded-2xl p-5 border border-border hover:border-violet-500/40 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-text-accent font-semibold text-sm uppercase tracking-wide mb-4">
                {T.categories[group.categoryKey]}
              </h3>
              <ul className="space-y-3">
                {group.skills.map(({ name, level }) => (
                  <li key={name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-text-muted text-sm">{name}</span>
                      <AnimatedCount to={level} reduce={reduce} />
                    </div>
                    <div className="h-1.5 bg-surface-elevated rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
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

function AnimatedCount({ to, reduce }: { to: number; reduce: boolean }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 80, damping: 15 })
  const rounded = useTransform(spring, (v) => Math.round(v))

  useMotionValueEvent(rounded, 'change', setDisplay)

  useEffect(() => {
    if (reduce || inView) mv.set(to)
  }, [inView, reduce, to, mv])

  return (
    <span ref={ref} className="text-text-accent text-xs font-mono font-variant-numeric-tabular">
      {reduce ? to : display}%
    </span>
  )
}
