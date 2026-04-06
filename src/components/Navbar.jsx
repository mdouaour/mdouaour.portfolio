export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-white font-semibold tracking-tight text-lg">
          MYD<span className="text-violet-400">.</span>
        </a>
        <ul className="hidden sm:flex items-center gap-8 text-sm text-slate-400">
          <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
        <a
          href="#contact"
          className="text-sm px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white transition-colors"
        >
          Hire me
        </a>
      </nav>
    </header>
  )
}
