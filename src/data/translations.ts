import type { Lang, Translations } from '../types'

export type TranslationSet = Record<Lang, Translations>

export const translations: TranslationSet = {
  en: {
    seo: {
      title: 'Mohammed Yassine Douaouria — Full-Stack Developer & AI-Assisted Builder',
      description:
        'Full-stack developer from Guelma, Algeria. I build web apps, desktop systems, APIs, and AI-powered products. Available for freelance and remote collaboration worldwide.',
    },
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hi, I\'m',
      name: 'Mohammed Yassine Douaouria',
      tagline: 'Full-Stack Developer · AI-Assisted Engineer · Content Creator',
      description:
        'I architect and ship production-grade software — web platforms, RESTful APIs, desktop applications, and AI-augmented systems. 109+ GitHub repos, 200+ followers. Entrepreneur at heart, builder by craft, teacher by passion.',
      cta: 'Explore My Work',
    },
    about: {
      title: 'About Me',
      background: 'Background',
      backgroundText1:
        'Computer Science graduate from the University of Guelma, Algeria, and ALX Software Engineering alumni. 109+ public repositories on GitHub.',
      backgroundText2:
        'My edge is AI-accelerated development. I combine modern engineering with AI tools to ship faster without cutting corners. SaaS, POS, APIs, or AI products — I design, build, deploy, and maintain. I also share my engineering journey as a content creator on X, LinkedIn, TikTok, and Facebook.',
      whatIDo: 'What I Build',
      services: [
        'Web Applications (React, Next.js, Node.js, REST APIs)',
        'Desktop & Enterprise Software (Python, Java)',
        'AI-Powered Products & Agent Tooling',
        'Mobile & Cross-Platform Apps',
        'Open-Source Tools & Developer Ecosystem',
      ],
      education: 'Education & Training',
      degree: 'B.Sc. Computer Science',
      university: 'University of Guelma, Algeria',
      alx: 'ALX Software Engineering',
      alxSub: 'ALX Africa — Transformative peer learning program powered by Holberton School',
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
      title: 'Let\'s Work Together',
      subtitle:
        'Have a project in mind? Let\'s talk. Web, desktop, API, or AI — I can build it. Every great solution starts with a conversation.',
      cta: 'Send Message',
      email: 'Email',
      whatsapp: 'WhatsApp',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      linktree: 'Linktree',
      facebook: 'Facebook Page',
      facebookProfile: 'Facebook Profile',
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
        'Développeur full-stack de Guelma, Algérie. Je construis des apps web, desktop, API et produits IA. Disponible pour freelance et collaboration à distance.',
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
      tagline: 'Développeur Full-Stack · Ingénieur IA-Assisté · Créateur de Contenu',
      description:
        'J\'architecture et livre des logiciels prêts pour la production — plateformes web, APIs REST, applications desktop et systèmes IA. 109+ dépôts GitHub, 200+ abonnés. Entrepreneur dans l\'âme, bâtisseur de métier, enseignant par passion.',
      cta: 'Explorer mes projets',
    },
    about: {
      title: 'À Propos',
      background: 'Parcours',
      backgroundText1:
        'Diplômé en Informatique de l\'Université de Guelma et du programme ALX Software Engineering. 109+ dépôts publics sur GitHub.',
      backgroundText2:
        'Mon atout : un workflow accéléré par l\'IA. J\'allie pratiques modernes et outils d\'IA pour livrer plus vite sans sacrifier la qualité. SaaS, POS, API ou produit IA — je conçois, construis, déploie et maintiens. Je partage aussi mon parcours d\'ingénieur sur X, LinkedIn, TikTok et Facebook.',
      whatIDo: 'Ce que je construis',
      services: [
        'Applications Web (React, Next.js, Node.js, APIs REST)',
        'Logiciels Desktop & Entreprise (Python, Java)',
        'Produits IA et Outils pour Agents',
        'Applications Mobiles & Cross-Platform',
        'Outils Open-Source & Écosystème Développeur',
      ],
      education: 'Formation',
      degree: 'Licence en Informatique',
      university: 'Université de Guelma, Algérie',
      alx: 'ALX Software Engineering',
      alxSub: 'ALX Africa — Programme d\'apprentissage collaboratif transformateur propulsé par Holberton School',
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
        'Un projet en tête ? Discutons-en. Web, desktop, API ou IA — je peux tout construire. Chaque bonne solution commence par une conversation.',
      cta: 'Envoyer',
      email: 'Email',
      whatsapp: 'WhatsApp',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      linktree: 'Linktree',
      facebook: 'Page Facebook',
      facebookProfile: 'Profil Facebook',
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
        'مطور full-stack من قالمة، الجزائر. أبني تطبيقات الويب، برامج سطح المكتب، واجهات برمجية، ومنتجات الذكاء الاصطناعي. متاح للعمل الحر والتعاون عن بُعد.',
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
      tagline: 'مطور Full-Stack · مهندس بالذكاء الاصطناعي · صانع محتوى',
      description:
        'أُصمم وأُطلق برمجيات جاهزة للإنتاج — منصات ويب، واجهات RESTful، تطبيقات سطح مكتب، وأنظمة ذكاء اصطناعي. 109+ مستودع على GitHub، 200+ متابع. رائد أعمال بالروح، باني بالمهنة، معلم بالشغف.',
      cta: 'استكشف أعمالي',
    },
    about: {
      title: 'عني',
      background: 'الخلفية',
      backgroundText1:
        'خريج علوم الحاسوب من جامعة قالمة ومتخرج من برنامج ALX لهندسة البرمجيات. 109+ مستودع عام على GitHub.',
      backgroundText2:
        'ميزتي التنافسية: تطوير معزز بالذكاء الاصطناعي. أدمج الهندسة الحديثة بأدوات الذكاء الاصطناعي لأنتج بشكل أسرع دون التضحية بالجودة. SaaS، نقاط بيع، APIs، أو منتجات ذكاء اصطناعي — أصمم، أبني، أنشر، وأصون. كما أشارك رحلتي الهندسية كصانع محتوى على X، LinkedIn، TikTok، وفيسبوك.',
      whatIDo: 'ما أبنيه',
      services: [
        'تطبيقات الويب (React، Next.js، Node.js، REST APIs)',
        'برمجيات سطح المكتب والمؤسسات (Python، Java)',
        'منتجات وأدوات الذكاء الاصطناعي',
        'تطبيقات الجوال والتطبيقات عبر المنصات',
        'أدوات مفتوحة المصدر وبيئة المطورين',
      ],
      education: 'التعليم والتدريب',
      degree: 'بكالوريوس علوم الحاسوب',
      university: 'جامعة قالمة، الجزائر',
      alx: 'ALX Software Engineering',
      alxSub: 'ALX Africa — برنامج تعلم تطويري تفاعلي برعاية Holberton School',
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
        'لديك مشروع في بالك؟ دعنا نتحدث. ويب، سطح مكتب، API، أو ذكاء اصطناعي — يمكنني بناؤه. كل حل رائع يبدأ بمحادثة.',
      cta: 'أرسل الرسالة',
      email: 'البريد الإلكتروني',
      whatsapp: 'واتساب',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      linktree: 'Linktree',
      facebook: 'صفحة فيسبوك',
      facebookProfile: 'الملف الشخصي',
    },
    footer: {
      built: 'مبني بـ React و Tailwind CSS',
      source: 'عرض المصدر على GitHub',
      rights: 'جميع الحقوق محفوظة.',
    },
  },
}
