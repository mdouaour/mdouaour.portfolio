import { useEffect, useRef, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { translations } from '../data/translations'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { motionTokens, springs } from '../lib/motionConfig'
import type { Project, Lang } from '../types'

export interface ProjectModalProps {
  project: Project
  lang: Lang
  onClose: () => void
}

function useFocusTrap(ref: React.RefObject<HTMLDivElement | null>, active: boolean) {
  useEffect(() => {
    if (!active || !ref.current) return
    const el = ref.current
    const focusable = el.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    function handleKey(e: KeyboardEvent) {
      if (e.key !== 'Tab') return
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last?.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first?.focus()
      }
    }

    el.addEventListener('keydown', handleKey)
    first?.focus()
    return () => el.removeEventListener('keydown', handleKey)
  }, [active, ref])
}

function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [active])
}

function useEscapeKey(active: boolean, onClose: () => void) {
  useEffect(() => {
    if (!active) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, onClose])
}

export const ProjectModal = ({ project, lang, onClose }: ProjectModalProps) => {
  const reduce = useReducedMotion()
  const panelRef = useRef<HTMLDivElement>(null)
  const T = translations[lang].projects
  const title = project.title[lang]
  const description = project.description[lang]
  const features = project.features[lang]

  useFocusTrap(panelRef, true)
  useScrollLock(true)
  useEscapeKey(true, onClose)

  const fade = {
    initial: { opacity: reduce ? 1 : 0 },
    animate: { opacity: 1 },
    exit: { opacity: reduce ? 1 : 0 },
  }

  const scale = reduce
    ? { initial: {}, animate: {}, exit: {} }
    : {
        initial: { scale: 0.95, y: motionTokens.distance.sm },
        animate: { scale: 1, y: 0 },
        exit: { scale: 0.95, y: motionTokens.distance.sm },
      }

  return (
    <motion.div
      {...fade}
      transition={{ duration: motionTokens.duration.fast }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <motion.div
        ref={panelRef}
        {...scale}
        transition={springs.gentle}
        className="relative bg-surface-card rounded-2xl p-6 max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-surface-elevated/50 hover:bg-surface-elevated text-text-dim hover:text-text transition-colors"
          aria-label="Close modal"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="space-y-6 pt-2">
          <h2 id="modal-title" className="text-2xl font-bold text-text">{title}</h2>

          {project.image && (
            <img src={project.image} alt={title} className="w-full rounded-xl" loading="lazy" />
          )}

          <p className="text-text-dim leading-relaxed">{description}</p>

          <div className="border-t border-border pt-4">
            <h3 className="font-semibold text-text-muted mb-3">
              {T.features}
            </h3>
            <ul className="space-y-1.5">
              {features.map((feat) => (
                <li key={feat} className="text-text-dim flex items-start gap-2 text-sm">
                  <span className="text-text-accent flex-shrink-0 mt-0.5">▹</span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-border pt-4">
            <h3 className="font-semibold text-text-muted mb-3">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-text-accent bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-4">
            <h3 className="font-semibold text-text-muted mb-2">KPI</h3>
            <p className="text-text-muted">{project.kpi || 'N/A'}</p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-elevated hover:bg-surface-hover text-text text-sm transition-all hover:-translate-y-0.5 shadow-sm"
                aria-label={`View source code on GitHub`}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3.01-.4c1.02 0 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
                {translations[lang].projects.viewGithub}
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-400 hover:to-cyan-400 text-white [text-shadow:0_1px_2px_#00000073] text-sm transition-all shadow-lg shadow-violet-500/30 hover:-translate-y-0.5"
                aria-label="View live demo"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {translations[lang].projects.viewDemo}
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
