/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

export const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const isRTL = lang === 'ar'

  return (
    <LanguageContext.Provider value={{ lang, setLang, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
