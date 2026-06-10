import type { Lang, Translations } from '../types'

export type TranslationSet = Record<Lang, Translations>

export const translations: TranslationSet = {
  en: {
    seo: {
      title: 'Mohammed Yassine Douaouria — Full-Stack Developer & AI-Assisted Builder',
      description:
        'Full-stack developer from Guelma, Algeria building web apps, desktop systems, APIs, and AI-powered products. Available for freelance and remote collaboration worldwide.',
    },
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Mohammed Yassine Douaouria',
      tagline: 'Full-Stack Developer · AI-Assisted Engineer · Freelance Architect',
      description:
        'I architect and ship production-grade software — from responsive web platforms and RESTful APIs to desktop applications and AI-augmented systems. Based in Algeria, building for the world. Let me turn your vision into deployed reality.',
      cta: 'Explore My Work',
      hire: 'Hire Me',
    },
    about: {
      title: 'About Me',
      background: 'Background',
      backgroundText1:
        "Computer Science graduate from the University of Guelma, Algeria, and ALX-certified Software Engineer. I deliver end-to-end solutions across the full stack — pixel-perfect React frontends, battle-tested Python backends, and AI-augmented systems that push boundaries.",
      backgroundText2:
        'What sets me apart is an AI-accelerated development workflow. I combine modern engineering practices with cutting-edge AI tools to architect, code, review, and ship software at speeds traditional approaches cannot match. Result: higher quality, faster delivery, smarter solutions. SaaS platform, POS system, custom API, or AI product — I design it, build it, deploy it, and maintain it.',
      whatIDo: 'What I Build',
      services: [
        'Web Applications (React, Node.js, REST APIs)',
        'Desktop & Enterprise Software (Python, Java)',
        'AI-Augmented Product Development',
        'Custom APIs, Automations & Integrations',
      ],
      education: 'Education & Certifications',
      degree: 'B.Sc. Computer Science',
      university: 'University of Guelma, Algeria',
      alx: 'ALX Software Engineering',
      alxSub: 'ALX Africa — Full-Stack Software Engineering Certification',
      location: 'Based in Algeria',
      locationSub: 'Open to remote & freelance opportunities worldwide',
    },
    skills: {
      title: 'Skills & Expertise',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend & APIs',
        tools: 'Tools & Practices',
        languages: 'Languages',
      },
    },
    projects: {
      title: 'Featured Projects',
      viewGithub: 'View on GitHub',
      viewDemo: 'Live Demo',
      status: {
        completed: 'Completed',
        'in-progress': 'In Progress',
      },
      features: 'Key Features',
    },
    contact: {
      title: "Let's Work Together",
      subtitle:
        'Have an idea that needs building? A problem that needs solving? Every software solution starts with a conversation. Web, desktop, API, mobile, AI — I can build it. Let us talk and make it happen.',
      cta: 'Start Your Project',
      email: 'Email Me',
      whatsapp: 'WhatsApp',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      linktree: 'Linktree',
    },
    footer: {
      built: 'Built with React & Tailwind CSS',
      source: 'View source on GitHub',
      rights: 'All rights reserved.',
    },
  },

  fr: {
    seo: {
      title: 'Mohammed Yassine Douaouria — Développeur Full-Stack & IA-Assisté',
      description:
        'Développeur full-stack de Guelma, Algérie spécialisé dans les applications web, desktop, APIs et produits IA. Disponible pour freelance et collaboration à distance dans le monde entier.',
    },
    nav: {
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      name: 'Mohammed Yassine Douaouria',
      tagline: 'Développeur Full-Stack · Ingénieur IA-Assisté · Architecte Freelance',
      description:
        'J\'architecture et livre des logiciels prêts pour la production — plateformes web responsives, APIs RESTful, applications desktop et systèmes augmentés par IA. Basé en Algérie, je construis pour le monde. Donnez vie à votre vision en code déployé.',
      cta: 'Explorer mes projets',
      hire: 'Me recruter',
    },
    about: {
      title: 'À Propos',
      background: 'Parcours',
      backgroundText1:
        'Diplômé en Informatique de l\'Université de Guelma et certifié ALX Software Engineering. Je livre des solutions complètes — frontends React au pixel près, backends Python robustes, et systèmes augmentés par IA qui repoussent les limites.',
      backgroundText2:
        'Ce qui me distingue : un workflow accéléré par l\'IA. J\'allie pratiques modernes du génie logiciel et outils d\'IA de pointe pour architecturer, coder, réviser et déployer à des vitesses inégalées. Résultat : qualité supérieure, livraison rapide, solutions plus intelligentes. SaaS, POS, API sur mesure ou produit IA — je le conçois, le construis, le déploie et le maintiens.',
      whatIDo: 'Ce que je construis',
      services: [
        'Applications Web (React, Node.js, APIs REST)',
        'Logiciels Desktop & Entreprise (Python, Java)',
        'Développement de Produits Augmentés par IA',
        'APIs, Automatisations & Intégrations sur Mesure',
      ],
      education: 'Formation & Certifications',
      degree: 'Licence en Informatique',
      university: 'Université de Guelma, Algérie',
      alx: 'ALX Software Engineering',
      alxSub: 'ALX Africa — Certification Full-Stack Software Engineering',
      location: 'Basé en Algérie',
      locationSub: 'Disponible pour le télétravail et le freelance dans le monde entier',
    },
    skills: {
      title: 'Compétences & Expertise',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend & APIs',
        tools: 'Outils & Pratiques',
        languages: 'Langages',
      },
    },
    projects: {
      title: 'Projets phares',
      viewGithub: 'Voir sur GitHub',
      viewDemo: 'Démo en direct',
      status: {
        completed: 'Terminé',
        'in-progress': 'En cours',
      },
      features: 'Fonctionnalités clés',
    },
    contact: {
      title: 'Travaillons Ensemble',
      subtitle:
        'Une idée à concrétiser ? Un problème à résoudre ? Chaque solution logicielle commence par une conversation. Web, desktop, API, mobile, IA — je peux tout construire. Parlons-en et faisons-en réalité.',
      cta: 'Lancez votre projet',
      email: 'Email',
      whatsapp: 'WhatsApp',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      linktree: 'Linktree',
    },
    footer: {
      built: 'Construit avec React & Tailwind CSS',
      source: 'Voir le code source sur GitHub',
      rights: 'Tous droits réservés.',
    },
  },

  ar: {
    seo: {
      title: 'محمد ياسين دواوريا — مطور Full-Stack ومنتجات الذكاء الاصطناعي',
      description:
        'مطور full-stack من قالمة، الجزائر، أبني تطبيقات الويب، أنظمة سطح المكتب، واجهات برمجية، ومنتجات الذكاء الاصطناعي. متاح للعمل الحر والتعاون عن بُعد حول العالم.',
    },
    nav: {
      about: 'عني',
      skills: 'المهارات',
      projects: 'المشاريع',
      contact: 'تواصل',
    },
    hero: {
      greeting: 'مرحباً، أنا',
      name: 'محمد ياسين دواوريا',
      tagline: 'مطور Full-Stack · مهندس بالذكاء الاصطناعي · معماري حر',
      description:
        'أُصمم وأُطلق برمجيات جاهزة للإنتاج — منصات ويب متجاوبة، واجهات RESTful، تطبيقات سطح مكتب، وأنظمة معززة بالذكاء الاصطناعي. مقيم في الجزائر، أبني للعالم. حوّل رؤيتك إلى واقع منشور.',
      cta: 'استكشف أعمالي',
      hire: 'وظّفني',
    },
    about: {
      title: 'عني',
      background: 'الخلفية',
      backgroundText1:
        'خريج علوم الحاسوب من جامعة قالمة ومعتمد من ALX في هندسة البرمجيات. أقدم حلولاً متكاملة عبر كامل الطيف — واجهات React دقيقة، خوادم Python متمرّسة، وأنظمة ذكاء اصطناعي تتجاوز الحدود.',
      backgroundText2:
        'ما يميزني: سير عمل معزز بالذكاء الاصطناعي. أمزج ممارسات الهندسة الحديثة بأحدث أدوات الذكاء الاصطناعي لأصمم وأبرمج وأراجع وأُطلق البرمجيات بسرعات لا تضاهى. النتيجة: جودة أعلى، تسليم أسرع، حلول أذكى. منصة SaaS، نظام نقاط بيع، واجهة برمجية مخصصة، أو منتج ذكاء اصطناعي — أصممه، أبنيه، أنشره، وأصونه.',
      whatIDo: 'ما أبنيه',
      services: [
        'تطبيقات الويب (React، Node.js، REST APIs)',
        'برمجيات سطح المكتب والمؤسسات (Python، Java)',
        'تطوير منتجات معززة بالذكاء الاصطناعي',
        'واجهات برمجية مخصصة، أتمتة وتكامل',
      ],
      education: 'التعليم والشهادات',
      degree: 'بكالوريوس علوم الحاسوب',
      university: 'جامعة قالمة، الجزائر',
      alx: 'ALX Software Engineering',
      alxSub: 'ALX Africa — شهادة Full-Stack في هندسة البرمجيات',
      location: 'مقيم في الجزائر',
      locationSub: 'متاح للعمل عن بُعد والمستقل حول العالم',
    },
    skills: {
      title: 'المهارات والخبرات',
      categories: {
        frontend: 'الواجهة الأمامية',
        backend: 'الخادم والواجهات البرمجية',
        tools: 'الأدوات والممارسات',
        languages: 'لغات البرمجة',
      },
    },
    projects: {
      title: 'مشاريع مميزة',
      viewGithub: 'عرض على GitHub',
      viewDemo: 'عرض مباشر',
      status: {
        completed: 'مكتمل',
        'in-progress': 'قيد التطوير',
      },
      features: 'المميزات الرئيسية',
    },
    contact: {
      title: 'لنعمل معاً',
      subtitle:
        'لديك فكرة تحتاج بناء؟ مشكلة تحتاج حلاً؟ كل حل برمجي يبدأ بمحادثة. ويب، سطح مكتب، API، جوال، ذكاء اصطناعي — يمكنني بناؤه. دعنا نتحدث ونحققها.',
      cta: 'ابدأ مشروعك',
      email: 'البريد الإلكتروني',
      whatsapp: 'واتساب',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      linktree: 'Linktree',
    },
    footer: {
      built: 'مبني بـ React و Tailwind CSS',
      source: 'عرض المصدر على GitHub',
      rights: 'جميع الحقوق محفوظة.',
    },
  },
}
