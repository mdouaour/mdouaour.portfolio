const skills = {
  'Languages': ['Python', 'JavaScript', 'C', 'Java', 'Shell/Bash'],
  'Frontend': ['React', 'Tailwind CSS', 'HTML/CSS', 'PySide6 (Qt)'],
  'Backend': ['Node.js', 'Express.js', 'SQLModel', 'SQLAlchemy'],
  'Databases': ['MySQL', 'SQLite', 'PostgreSQL', 'MongoDB'],
  'Tools & Practices': ['Git', 'GitHub', 'Linux', 'OOP', 'Data Structures', 'Pytest', 'Algorithms'],
}

const journey = [
  { year: '2022', text: 'Built first desktop apps — Java Swing stock management with MySQL.' },
  { year: '2023', text: 'Joined ALX Software Engineering Program. Started full-stack track (C, Python, Shell).' },
  { year: '2024', text: 'Completed ALX. Dived into React (Scrimba), Node.js/Express, and low-level C programming.' },
  { year: '2025', text: 'Built Gestion-Commerce — a full offline POS system in Python (PySide6 + SQLite). Added pytest coverage.' },
  { year: '2026', text: 'Building portfolio, ideating StoryAfrika — a discovery platform for African markets.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3 text-center">
          About me
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
          Builder. Learner. Doer.
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          {/* Bio */}
          <div className="space-y-5 text-slate-400 leading-relaxed text-base">
            <p>
              I&apos;m <strong className="text-white">Mohammed Yassine Douaouria</strong> — a
              Full-Stack Engineer from Algeria with a Computer Science degree
              from the <strong className="text-slate-300">University of Guelma</strong> and
              a Software Engineering certification from{' '}
              <strong className="text-slate-300">ALX Africa</strong>.
            </p>
            <p>
              I build software end-to-end: from database schema and business
              logic to UI and deployment. My toolkit spans Python, C, Java,
              React and more — I pick the right tool for the job, not just the
              trendy one.
            </p>
            <p>
              My focus is on <em className="text-violet-300">practical impact</em>:
              tools that help small businesses run better, platforms that connect
              people, and systems that are reliable enough to use offline.
            </p>
            <p>
              I&apos;m driven by the potential of technology to unlock opportunity
              across Africa — which is why I&apos;m working on StoryAfrika.
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm hover:border-violet-400/50 hover:text-violet-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey timeline */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-8 text-center">My journey</h3>
          <div className="relative border-l border-white/10 pl-8 space-y-8 max-w-2xl mx-auto">
            {journey.map((item) => (
              <div key={item.year} className="relative">
                <span className="absolute -left-[2.6rem] flex items-center justify-center w-8 h-8 rounded-full bg-violet-600/20 border border-violet-500/30 text-violet-400 text-xs font-bold">
                  {item.year.slice(2)}
                </span>
                <p className="text-xs text-violet-400 font-semibold mb-1">{item.year}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
