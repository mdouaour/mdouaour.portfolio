import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { SectionHeading } from './About'
import { ProjectModal } from './ProjectModal'
import projectsData from '../data/projects.json'
import type { Project, Lang } from '../types'
import { useState } from 'react'

const statusConfig: Record<string, { className: string }> = {
  completed: {
    className: 'bg-brand/10 text-brand border border-brand/30',
  },
  'in-progress': {
    className: 'bg-accent/10 text-accent border border-accent/30',
  },
}

export default function Projects() {
  const { lang, isRTL } = useLang()
  const T = translations[lang].projects
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <motion.section
      id="projects"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="py-24 px-4 bg-surface-alt"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading>{T.title}</SectionHeading>
        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {(projectsData as Project[]).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <ProjectCard project={project} T={T} lang={lang} onSelect={() => setSelectedProject(project)} />
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal project={selectedProject} lang={lang} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </motion.section>
  )
}

function ProjectCard({
  project,
  T,
  lang,
  onSelect,
}: {
  project: Project
  T: { viewGithub: string; viewDemo: string; status: Record<string, string>; features: string }
  lang: Lang
  onSelect: () => void
}) {
  const badge = statusConfig[project.status]
  const title = project.title[lang]
  const description = project.description[lang]
  const features = project.features[lang]

  return (
    <article
      onClick={onSelect}
      className="cursor-pointer bg-surface-card border border-border p-6 flex flex-col gap-4 hover:border-brand/40 transition-all group h-full"
    >
      {project.image ? (
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={title}
            className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="w-full h-36 bg-surface-elevated flex items-center justify-center border border-border" aria-hidden="true">
          <svg
            width="40"
            height="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            className="text-text-dim"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-text font-semibold text-lg transition-colors leading-snug">
          {title}
        </h3>
        <span
          className={`text-xs font-medium px-2 py-1 whitespace-nowrap flex-shrink-0 ${badge.className}`}
        >
          {T.status[project.status]}
        </span>
      </div>

      <p className="text-text-muted text-sm leading-relaxed">{description}</p>

      <div>
        <p className="text-text-dim text-xs uppercase tracking-wide mb-2 font-medium">
          {T.features}
        </p>
        <ul className="space-y-1">
          {features.map((feat) => (
            <li key={feat} className="text-text-muted text-xs flex items-start gap-1.5">
              <span className="text-accent flex-shrink-0">→</span>
              {feat}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-brand bg-brand/10 border border-brand/20 px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 mt-auto pt-3 border-t border-border">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-brand transition-colors"
          aria-label={`View ${title} on GitHub`}
        >
          <GithubIcon />
          {T.viewGithub}
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-brand hover:text-brand-light transition-colors"
            aria-label={`Live demo for ${title}`}
          >
            <ExternalLinkIcon />
            {T.viewDemo}
          </a>
        )}
      </div>
    </article>
  )
}

function GithubIcon() {
  return (
    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3.01-.4c1.02 0 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}
