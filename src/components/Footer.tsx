import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'

export default function Footer() {
  const { lang, isRTL } = useLang()
  const T = translations[lang].footer
  const year = new Date().getFullYear()

  return (
    <footer
      dir={isRTL ? 'rtl' : 'ltr'}
      className="border-t border-slate-800 dark:border-slate-800 py-8 text-center text-slate-500 dark:text-slate-500 text-sm px-4"
    >
      <p>
        © {year}{' '}
        <span className="text-slate-300 dark:text-slate-300 font-medium">
          Mohammed Yassine Douaouria
        </span>
        . {T.built}.
      </p>
      <p className="mt-1 text-xs">
        <a
          href="https://github.com/mdouaour/mdouaour.portfolio"
          target="_blank"
          rel="noreferrer"
          className="hover:text-violet-400 transition-colors"
        >
          {T.source}
        </a>
      </p>
    </footer>
  )
}
