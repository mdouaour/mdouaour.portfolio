import { motion } from 'framer-motion'
import { translations } from '../data/translations'
import type { Project, Lang } from '../types'

export interface ProjectModalProps {
  project: Project
  lang: Lang
  onClose: () => void
}

export const ProjectModal = ({ project, lang, onClose }: ProjectModalProps) => {
  const T = translations[lang].projects
  const title = project.title[lang]
  const description = project.description[lang]
  const features = project.features[lang]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="relative bg-slate-800 dark:bg-slate-800 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="text-slate-400">{description}</p>

          <div className="border-t border-slate-700 pt-4">
            <h3 className="font-semibold text-slate-300 mb-2">Features</h3>
            <ul className="space-y-1">
              {features.map((feat) => (
                <li key={feat} className="text-slate-400 flex items-start gap-1.5">
                  <span className="text-violet-400 flex-shrink-0">▹</span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-slate-700 pt-4">
            <h3 className="font-semibold text-slate-300 mb-2">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-violet-300 bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-700 pt-4">
            <h3 className="font-semibold text-slate-300 mb-2">Key Performance Indicator (KPI)</h3>
            <p className="text-slate-300">{project.kpi || 'N/A'}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-violet-400 transition-colors"
                aria-label="View source code"
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
                className="inline-flex items-center gap-1.5 text-sm text-violet-300 hover:text-violet-400 transition-colors"
                aria-label="Live demo"
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