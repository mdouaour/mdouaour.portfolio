const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'Java', 'C', 'SQL', 'Bash / Shell'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    category: 'Backend',
    skills: ['Flask', 'REST APIs', 'SQLite', 'MySQL', 'SQLAlchemy / ORMs'],
  },
  {
    category: 'Tools & Practices',
    skills: ['Git & GitHub', 'Linux / CLI', 'OOP', 'Full-Stack Dev', 'Deployment (Vercel)'],
  },
];

function SkillBadge({ name }) {
  return (
    <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-gray-800 border border-gray-700 text-gray-300 hover:border-indigo-500 hover:text-indigo-300 transition-colors cursor-default">
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-indigo-400 font-mono text-sm mb-2 tracking-widest uppercase">What I Work With</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map(({ category, skills }) => (
            <div key={category} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
              <h3 className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
