export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-800/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeading>About Me</SectionHeading>
        <div className="grid md:grid-cols-2 gap-10 mt-10 text-left">
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">
              Background
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              I&apos;m Mohammed Yassine Douaouria, a Computer Science graduate from the
              University of Guelma, Algeria. I hold an ALX Software Engineering
              certification and am passionate about building useful, real-world
              software.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I thrive at the intersection of backend logic and clean user
              interfaces, and I enjoy tackling problems in inventory management,
              commerce tools, and platform development.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">
              Education &amp; Certifications
            </h3>
            <ul className="space-y-3">
              <InfoItem
                icon="🎓"
                title="B.Sc. Computer Science"
                subtitle="University of Guelma, Algeria"
              />
              <InfoItem
                icon="🏅"
                title="ALX Software Engineering"
                subtitle="ALX Africa — Full-Stack Certification"
              />
              <InfoItem
                icon="📍"
                title="Based in Algeria"
                subtitle="Open to remote opportunities"
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
      <span className="text-xl mt-0.5">{icon}</span>
      <div>
        <p className="text-white font-medium">{title}</p>
        <p className="text-slate-400 text-sm">{subtitle}</p>
      </div>
    </li>
  )
}

export { SectionHeading }
