const projects = [
  {
    title: 'StoryAfrika',
    tagline: 'Connecting African markets to the world',
    description:
      'A market discovery platform that helps buyers and sellers across Africa find each other, list products, and transact digitally. Built to reduce information asymmetry and open up local economies.',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
    links: {
      github: 'https://github.com/mdouaour',
      live: null,
    },
    accent: 'from-violet-600/20 to-purple-800/10',
    badge: 'Featured',
  },
  {
    title: 'POS System',
    tagline: 'Modern point-of-sale for small retailers',
    description:
      'A lightweight, offline-capable point-of-sale system tailored for small and medium retailers. Handles inventory, sales tracking, receipts, and end-of-day reporting with a clean, fast UI.',
    tags: ['React', 'TypeScript', 'PostgreSQL', 'Express'],
    links: {
      github: 'https://github.com/mdouaour',
      live: null,
    },
    accent: 'from-blue-600/20 to-cyan-800/10',
    badge: null,
  },
]

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3 text-center">
          Projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
          Things I&apos;ve built
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`relative rounded-2xl border border-white/10 bg-gradient-to-br ${project.accent} p-6 flex flex-col gap-4 hover:border-violet-400/30 transition-colors group`}
            >
              {project.badge && (
                <span className="absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full bg-violet-600/30 text-violet-300 border border-violet-500/30">
                  {project.badge}
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-violet-300 text-sm">{project.tagline}</p>
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
                  <GitHubIcon /> Code
                </a>
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <ExternalLinkIcon /> Live demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
