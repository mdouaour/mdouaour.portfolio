export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm px-4">
      <p>
        © {year}{' '}
        <span className="text-slate-300 font-medium">
          Mohammed Yassine Douaouria
        </span>
        . Built with React &amp; Tailwind CSS.
      </p>
      <p className="mt-1 text-xs">
        <a
          href="https://github.com/mdouaour/mdouaour.portfolio"
          target="_blank"
          rel="noreferrer"
          className="hover:text-violet-400 transition-colors"
        >
          View source on GitHub
        </a>
      </p>
    </footer>
  )
}
