import { SectionHeading } from './About.jsx'

const contactLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/mdouaour',
    description: 'Browse my repositories',
    icon: <GithubIcon />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mdouaour',
    description: 'Connect professionally',
    icon: <LinkedInIcon />,
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/mdoer',
    description: '@mdoer',
    icon: <XIcon />,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading>Get In Touch</SectionHeading>
        <p className="text-slate-400 mt-6 leading-relaxed max-w-xl mx-auto">
          I&apos;m open to new opportunities, collaborations, and interesting
          conversations. Feel free to reach out through any of the channels
          below.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mt-10">
          {contactLinks.map(({ label, href, description, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-slate-800 border border-slate-700 hover:border-violet-500/50 hover:bg-slate-700/50 transition-colors group"
              aria-label={label}
            >
              <span className="text-slate-300 group-hover:text-violet-400 transition-colors">
                {icon}
              </span>
              <span className="text-white font-semibold">{label}</span>
              <span className="text-slate-400 text-xs">{description}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3.01-.4c1.02 0 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.56V9H3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
