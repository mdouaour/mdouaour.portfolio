import { Helmet } from 'react-helmet-async'
import type { Lang, SEOStrings } from '../types'

const BASE_URL = 'https://mdouaour.vercel.app'

const perLang: Record<Lang, string> = {
  en: 'en',
  fr: 'fr',
  ar: 'ar',
}

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
    </Helmet>
  )
}
