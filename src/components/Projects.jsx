import { SectionHeading } from './About.jsx'

const projects = [
  {
    title: 'Gestion Commerce',
    description:
      'A full-featured point-of-sale and inventory management system built with Python, PySide6, and SQLite. Handles products, sales, and stock tracking for small businesses.',
    tags: ['Python', 'PySide6', 'SQLite'],
    github: 'https://github.com/mdouaour/Gestion-Commerce',
    status: 'completed',
  },
  {
    title: 'Gestion de Stock',
    description:
      'A Java Swing desktop application for stock and inventory management backed by MySQL. Clean MVC architecture with full CRUD operations.',
    tags: ['Java', 'Swing', 'MySQL'],
    github: 'https://github.com/mdouaour/gestion-de-stock',
    status: 'completed',
  },
  {
    title: 'StoryAfrika',
    description:
      'An in-progress African storytelling and marketplace platform. Aiming to connect creators and consumers across the African continent.',
    tags: ['JavaScript', 'React', 'Platform'],
    github: 'https://github.com/mdouaour',
    status: 'in-progress',
  },
  {
    title: 'ALX Projects',
    description:
      'A collection of projects from the ALX Software Engineering program covering C, Python, Shell scripting, and system programming fundamentals.',
    tags: ['C', 'Python', 'Shell'],
    github: 'https://github.com/mdouaour',
    status: 'completed',
  },
]

const statusConfig = {
  completed: {
    label: 'Completed',
    className: 'bg-green-500/20 text-green-400 border border-green-500/30',
  },
  'in-progress': {
    label: 'In Progress',
    className: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
  },
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeading>Projects</SectionHeading>
        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, description, tags, github, status }) {
  const badge = statusConfig[status]
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col gap-4 hover:border-violet-500/50 transition-colors group">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-white font-semibold text-lg group-hover:text-violet-300 transition-colors">
          {title}
        </h3>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${badge.className}`}
        >
          {badge.label}
        </span>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed flex-1">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-violet-300 bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-violet-400 transition-colors mt-auto"
        aria-label={`View ${title} on GitHub`}
      >
        <GithubIcon />
        View on GitHub →
      </a>
    </div>
  )
}

function GithubIcon() {
  return (
    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3.01-.4c1.02 0 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
    </svg>
  )
}
