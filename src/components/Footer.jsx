export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>
          &copy; {year}{' '}
          <span className="text-gray-300 font-semibold">Mohammed Yassine Douaouria</span>. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/mdouaour" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition-colors">
            GitHub
          </a>
          <a href="https://twitter.com/mdoer" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition-colors">
            Twitter
          </a>
          <a href="https://www.linkedin.com/in/mdouaour" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
