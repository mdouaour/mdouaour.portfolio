export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Avatar / visual */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 rounded-2xl bg-indigo-600/20 blur-2xl" />
            <div className="relative w-full h-full rounded-2xl border border-gray-800 bg-gray-900 flex items-center justify-center overflow-hidden">
              {/* Initials avatar */}
              <span className="text-6xl font-extrabold text-indigo-400 select-none">MY</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-indigo-400 font-mono text-sm mb-2 tracking-widest uppercase">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Building Software That Matters
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            I&apos;m <span className="text-white font-semibold">Mohammed Yassine Douaouria</span> (Yacine) — a
            full-stack software engineer from Algeria, holding a Computer Science degree from the
            University of Guelma and an ALX Software Engineering certification.
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">
            I specialize in building clean, scalable applications — from desktop POS systems and
            inventory managers to web platforms and AI-assisted tools. I&apos;m passionate about
            minimal design, solid architecture, and shipping software that actually solves problems.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm mb-8">
            <div>
              <span className="text-gray-500">Education</span>
              <p className="text-gray-200 font-medium">CS – Univ. of Guelma, Algeria</p>
            </div>
            <div>
              <span className="text-gray-500">Certification</span>
              <p className="text-gray-200 font-medium">ALX Software Engineering</p>
            </div>
            <div>
              <span className="text-gray-500">Location</span>
              <p className="text-gray-200 font-medium">Algeria 🇩🇿</p>
            </div>
            <div>
              <span className="text-gray-500">Status</span>
              <p className="text-green-400 font-medium">Open to Opportunities</p>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/mdouaour"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-lg border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              GitHub Profile
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
