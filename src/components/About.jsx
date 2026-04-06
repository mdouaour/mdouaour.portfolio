const skills = [
  'React', 'Node.js', 'TypeScript', 'Python',
  'PostgreSQL', 'MongoDB', 'REST APIs', 'Docker',
  'Git', 'Tailwind CSS', 'Express', 'Next.js',
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3 text-center">
          About me
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
          Builder. Thinker. Doer.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-slate-400 leading-relaxed text-base">
            <p>
              I&apos;m a Full-Stack Engineer based in Algeria with a passion for
              building digital infrastructure that empowers communities. I
              believe technology should be a bridge — not a barrier — to
              opportunity, especially across the African continent.
            </p>
            <p>
              My work spans market discovery platforms, point-of-sale systems,
              and web applications for small and medium businesses. I bring a
              product mindset to engineering: I care about the &ldquo;why&rdquo; as much
              as the &ldquo;how.&rdquo;
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me reading about African
              innovation, mentoring developers, or ideating the next impactful
              product.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest text-slate-400">
              Tech stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm hover:border-violet-400/50 hover:text-violet-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
