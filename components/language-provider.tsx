"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import type { Locale } from "@/lib/i18n"
import { getLocaleFromNavigator, defaultLocale } from "@/lib/i18n"
import { translations } from "@/lib/translations"

type LanguageContextType = {
  locale: Locale
  language: Locale // Added language alias for backward compatibility
  setLocale: (locale: Locale) => void
  t: (key: keyof typeof translations.en) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  useEffect(() => {
    const storedLocale = localStorage.getItem("locale") as Locale | null
    const detectedLocale = storedLocale || getLocaleFromNavigator()
    setLocaleState(detectedLocale)
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)
  }

  const t = (key: keyof typeof translations.en): string => {
    return translations[locale][key] || translations[defaultLocale][key]
  }

  return <LanguageContext.Provider value={{ locale, language: locale, setLocale, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
