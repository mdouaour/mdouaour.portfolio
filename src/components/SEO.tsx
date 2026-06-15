import { Helmet } from 'react-helmet-async';
import type { Lang, SEOStrings } from '../types';

const BASE_URL = 'https://mdouaour-portfolio.vercel.app';

const perLang: Record<Lang, string> = {
  en: 'en',
  fr: 'fr',
  ar: 'ar',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Mohammed Yassine Douaouria',
      givenName: 'Mohammed Yassine',
      familyName: 'Douaouria',
      url: BASE_URL,
      jobTitle: 'Full-Stack Developer & AI-Assisted Engineer',
      sameAs: [
        'https://github.com/mdouaour',
        'https://www.linkedin.com/in/mohammed-yassine-douaouria-0a2272121',
        'https://www.facebook.com/mdouaour/',
        'https://www.facebook.com/mdouaourSolutions',
      ],
      knowsAbout: ['Web Development', 'AI-Assisted Development', 'API Design', 'Desktop Applications'],
    },
    {
      '@type': 'WebSite',
      name: 'Mohammed Yassine Douaouria — Portfolio',
      url: BASE_URL,
      description: 'Full-stack developer portfolio featuring web apps, desktop systems, APIs, and AI-powered products.',
    },
  ],
};

export default function SEO({ lang, t }: { lang: Lang; t: SEOStrings }) {
  return (
    <Helmet>
      <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
      <title>{t.title}</title>
      <meta name="description" content={t.description} />
      <link rel="alternate" hrefLang="en" href={`${BASE_URL}/en`} />
      <link rel="alternate" hrefLang="fr" href={`${BASE_URL}/fr`} />
      <link rel="alternate" hrefLang="ar" href={`${BASE_URL}/ar`} />
      <link rel="alternate" hrefLang="x-default" href={BASE_URL} />
      <meta property="og:title" content={t.title} />
      <meta property="og:description" content={t.description} />
      <meta property="og:url" content={`${BASE_URL}/${perLang[lang]}`} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t.title} />
      <meta name="twitter:description" content={t.description} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
