import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'

const socialLinks = [
  { href: 'https://github.com/mdouaour', label: 'GitHub' },
  { href: 'https://linkedin.com/in/mdouaour', label: 'LinkedIn' },
  { href: 'https://x.com/mdouaour', label: 'X' },
  { href: 'https://facebook.com/mdouaour', label: 'Facebook' },
]

const navLinks = ['about', 'skills', 'projects', 'contact'] as const

export default function Footer() {
  const { lang, isRTL } = useLang()
  const T = translations[lang].footer
  const Nav = translations[lang].nav
  const year = new Date().getFullYear()

  return (
    <footer
      dir={isRTL ? 'rtl' : 'ltr'}
      className="bg-[#1F201D] text-[#A09888] py-12 px-4 text-sm"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-8 text-center sm:text-start">
          <div>
            <h3 className="text-[#6B705B] font-semibold mb-4 uppercase tracking-wider text-xs">
              {isRTL ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="hover:text-[#C9A96E] transition-colors"
                  >
                    {Nav[key]}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#hero"
                  className="text-[#C9A96E] hover:text-[#D4B88A] transition-colors"
                >
                  {isRTL ? 'أعلى الصفحة' : 'Back to Top ↑'}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#6B705B] font-semibold mb-4 uppercase tracking-wider text-xs">
              {isRTL ? 'تواصل' : 'Connect'}
            </h3>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="hover:text-[#C9A96E] transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[#6B705B] font-semibold mb-4 uppercase tracking-wider text-xs">
              {isRTL ? 'معلومات' : 'Info'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@mdouaour.tech"
                  className="hover:text-[#C9A96E] transition-colors"
                >
                  hello@mdouaour.tech
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mdouaour/mdouaour.portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C9A96E] transition-colors"
                >
                  {T.source}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[#3A3834] text-center text-xs">
          <p>
            &copy; {year}{' '}
            <span className="text-[#C9A96E] font-medium">
              Mohammed Yassine Douaouria
            </span>
            . {T.built}. {T.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
