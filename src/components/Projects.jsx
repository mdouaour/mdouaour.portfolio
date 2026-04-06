const projects = [
  {
    title: 'Gestion-Commerce',
    tagline: 'Offline POS & inventory system',
    description:
      'A full-featured Point of Sale system built for offline use. Handles product catalog, real-time inventory tracking, in-store sales with barcode support, delivery orders, automated financials, and a live dashboard — all stored locally in SQLite.',
    tags: ['Python', 'PySide6', 'SQLite', 'SQLModel', 'Pytest'],
    links: {
      github: 'https://github.com/mdouaour/Gestion-Commerce',
      live: null,
    },
    accent: 'from-violet-600/20 to-purple-900/10',
    badge: 'Featured',
  },
  {
    title: 'StoryAfrika',
    tagline: 'Market discovery platform for Africa',
    description:
      'A digital platform connecting buyers and sellers across African markets. Designed to reduce information asymmetry, enable product discovery, and open local economies to broader audiences. Currently in early development.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/mdouaour',
      live: null,
    },
    accent: 'from-amber-600/15 to-orange-900/10',
    badge: 'In progress',
  },
  {
    title: 'Gestion-de-Stock',
    tagline: 'Desktop stock management (Java)',
    description:
      'A desktop application for stock and inventory management built with Java Swing and MySQL. Supports product tracking, stock entries/exits, and basic reporting. One of the first complete projects I shipped.',
    tags: ['Java', 'Swing', 'MySQL', 'NetBeans'],
    links: {
      github: 'https://github.com/mdouaour/gestion-de-stock',
      live: null,
    },
    accent: 'from-blue-600/15 to-cyan-900/10',
    badge: null,
  },
  {
    title: 'ALX SE Program',
    tagline: 'Systems & full-stack engineering training',
    description:
      'Year-long intensive software engineering program through ALX Africa. Built a custom shell in C, a printf from scratch, binary trees, Python higher-level programming, and devops/shell scripting. Rigorous, real-world focused curriculum.',
    tags: ['C', 'Python', 'Shell', 'DevOps', 'Algorithms'],
    links: {
      github: 'https://github.com/mdouaour/alx-higher_level_programming',
      live: null,
    },
    accent: 'from-emerald-600/15 to-teal-900/10',
    badge: 'Completed',
  },
]

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

const badgeColors = {
  'Featured': 'bg-violet-600/30 text-violet-300 border-violet-500/30',
  'In progress': 'bg-amber-600/30 text-amber-300 border-amber-500/30',
  'Completed': 'bg-emerald-600/30 text-emerald-300 border-emerald-500/30',
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3 text-center">
          Projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Things I&apos;ve built
        </h2>
        <p className="text-slate-500 text-center mb-16 max-w-xl mx-auto">
          Real projects — some shipped, some in progress, all pushing my skills forward.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`relative rounded-2xl border border-white/10 bg-gradient-to-br ${project.accent} p-6 flex flex-col gap-4 hover:border-violet-400/30 transition-colors`}
            >
              {project.badge && (
                <span className={`absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full border ${badgeColors[project.badge]}`}>
                  {project.badge}
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-slate-400 text-sm">{project.tagline}</p>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-2">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <GitHubIcon /> View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center mt-10 text-slate-500 text-sm">
          More on{' '}
          <a
            href="https://github.com/mdouaour"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-400 hover:text-violet-300 transition-colors"
          >
            github.com/mdouaour
          </a>
        </p>
      </div>
    </section>
  )
}
