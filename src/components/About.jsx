import { useLang } from '../context/LanguageContext.jsx'
import { translations } from '../data/translations.js'

export default function About() {
  const { lang, isRTL } = useLang()
  const T = translations[lang].about

  return (
    <section
      id="about"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="py-20 px-4 bg-slate-800/40"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading>{T.title}</SectionHeading>
        <div className="grid md:grid-cols-2 gap-10 mt-10 text-left">
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">
              {T.background}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              {T.backgroundText1}
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              {T.backgroundText2}
            </p>

            <h3 className="text-white font-semibold text-lg mb-3">
              {T.whatIDo}
            </h3>
            <ul className="space-y-2">
              {T.services.map((service) => (
                <li key={service} className="flex items-start gap-2 text-slate-400 text-sm">
                  <span className="text-violet-400 mt-0.5 flex-shrink-0">▹</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-3">
              {T.education}
            </h3>
            <ul className="space-y-3">
              <InfoItem
                icon="🎓"
                title={T.degree}
                subtitle={T.university}
              />
              <InfoItem
                icon="🏅"
                title={T.alx}
                subtitle={T.alxSub}
              />
              <InfoItem
                icon="📍"
                title={T.location}
                subtitle={T.locationSub}
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeading({ children }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">{children}</h2>
      <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-violet-500" />
    </div>
  )
}

function InfoItem({ icon, title, subtitle }) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-xl mt-0.5" aria-hidden="true">{icon}</span>
      <div>
        <p className="text-white font-medium">{title}</p>
        <p className="text-slate-400 text-sm">{subtitle}</p>
      </div>
    </li>
  )
}

export { SectionHeading }

