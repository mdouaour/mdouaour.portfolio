import profileImg from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="text-left">
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Engineering for Impact
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Hi, I&apos;m{' '}
            <span className="text-violet-400">Yassine</span>
            <br />
            Douaouria
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-4 max-w-lg">
            Full-Stack Engineer from Algeria — ALX graduate, CS grad, builder of
            tools that solve real problems.
          </p>
          <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-lg">
            I craft everything from offline POS systems and inventory platforms
            to React web apps. I write Python, C, Java, and JavaScript — and I
            love systems that actually ship.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white/20 hover:border-violet-400 text-slate-300 hover:text-white font-medium transition-colors"
            >
              Get in touch
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex gap-8 mt-10">
            <div>
              <p className="text-2xl font-bold text-white">19+</p>
              <p className="text-slate-500 text-xs uppercase tracking-wide mt-1">GitHub repos</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">4+</p>
              <p className="text-slate-500 text-xs uppercase tracking-wide mt-1">Years building</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">ALX</p>
              <p className="text-slate-500 text-xs uppercase tracking-wide mt-1">Certified SE</p>
            </div>
          </div>
        </div>

        {/* Profile photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-violet-600/20 blur-3xl scale-110" />
            <img
              src={profileImg}
              alt="Mohammed Yassine Douaouria"
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-violet-600/30 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
