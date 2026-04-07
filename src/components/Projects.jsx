const projects = [
  {
    title: 'Gestion-Commerce',
    description:
      'A desktop Point-of-Sale (POS) system built with Python and PySide6. Features product management, sales tracking, invoicing, and an SQLite database for persistent storage.',
    tech: ['Python', 'PySide6', 'SQLite', 'OOP'],
    github: 'https://github.com/mdouaour/Gestion-Commerce',
    live: null,
    status: 'Complete',
  },
  {
    title: 'Gestion-de-Stock',
    description:
      'An inventory management system built with Java Swing and MySQL. Supports stock tracking, supplier management, and reporting through a clean desktop GUI.',
    tech: ['Java', 'Swing', 'MySQL', 'JDBC'],
    github: 'https://github.com/mdouaour/gestion-de-stock',
    live: null,
    status: 'Complete',
  },
  {
    title: 'StoryAfrika',
    description:
      'An in-progress platform aimed at the African market — a collaborative storytelling and content-sharing web application focused on African narratives and creators.',
    tech: ['React', 'Tailwind CSS', 'Flask', 'Python'],
    github: 'https://github.com/mdouaour',
    live: null,
    status: 'In Progress',
  },
  {
    title: 'ALX SE Projects',
    description:
      'A collection of projects completed during the ALX Software Engineering programme, covering low-level C programming, Python scripting, shell scripting, and data structures & algorithms.',
    tech: ['C', 'Python', 'Shell', 'Algorithms'],
    github: 'https://github.com/mdouaour',
    live: null,
    status: 'Complete',
  },
];

const statusColors = {
  Complete: 'bg-green-900/60 text-green-400 border-green-800',
  'In Progress': 'bg-amber-900/60 text-amber-400 border-amber-800',
};

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-indigo-700 transition-all hover:-translate-y-1 duration-200 group">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-white font-bold text-lg group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
        <span
          className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${statusColors[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded bg-gray-800 text-indigo-300 font-mono">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-indigo-400 font-mono text-sm mb-2 tracking-widest uppercase">What I&apos;ve Built</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/mdouaour"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
