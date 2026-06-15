export type Lang = 'en' | 'fr' | 'ar'
export type Theme = 'dark' | 'light'

export interface NavStrings {
  about: string
  skills: string
  projects: string
  contact: string
}

export interface HeroStrings {
  greeting: string
  name: string
  tagline: string
  description: string
  cta: string
  hire: string
}

export interface AboutStrings {
  title: string
  background: string
  backgroundText1: string
  backgroundText2: string
  whatIDo: string
  services: string[]
  education: string
  degree: string
  university: string
  alx: string
  alxSub: string
  location: string
  locationSub: string
}

export interface SkillsStrings {
  title: string
  categories: Record<string, string>
}

export interface ProjectsStrings {
  title: string
  viewGithub: string
  viewDemo: string
  status: Record<string, string>
  features: string
}

export interface ContactStrings {
  title: string
  subtitle: string
  cta: string
  email: string
  whatsapp: string
  github: string
  linkedin: string
  linktree: string
  facebook: string
  facebookProfile: string
}

export interface FooterStrings {
  built: string
  source: string
  rights: string
}

export interface SEOStrings {
  title: string
  description: string
}

export interface Translations {
  nav: NavStrings
  hero: HeroStrings
  about: AboutStrings
  skills: SkillsStrings
  projects: ProjectsStrings
  contact: ContactStrings
  footer: FooterStrings
  seo: SEOStrings
}

export interface Project {
  id: string
  status: 'completed' | 'in-progress'
  kpi: string
  github: string
  demo: string | null
  image: string | null
  tags: string[]
  title: Record<Lang, string>
  description: Record<Lang, string>
  features: Record<Lang, string[]>
}

export interface Skill {
  name: string
  level: number
}

export interface SkillGroup {
  categoryKey: string
  skills: Skill[]
}
