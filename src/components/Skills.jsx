import { SectionHeading } from './About.jsx'

const skillGroups = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 75 },
      { name: 'Java', level: 70 },
      { name: 'C', level: 65 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 70 },
      { name: 'HTML / CSS', level: 80 },
      { name: 'Tailwind CSS', level: 70 },
      { name: 'Vite', level: 65 },
    ],
  },
  {
    category: 'Backend & Tools',
    skills: [
      { name: 'SQLite / MySQL', level: 75 },
      { name: 'PySide6 / Qt', level: 70 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'Linux / Shell', level: 75 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading>Skills</SectionHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-slate-800 rounded-2xl p-6 border border-slate-700"
            >
              <h3 className="text-white font-semibold text-lg mb-4">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.skills.map(({ name, level }) => (
                  <li key={name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300 text-sm">{name}</span>
                      <span className="text-violet-400 text-xs font-mono">
                        {level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-violet-500 rounded-full transition-all duration-700"
                        style={{ width: `${level}%` }}
                        role="progressbar"
                        aria-valuenow={level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${name} proficiency`}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
