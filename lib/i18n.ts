export const locales = ["en", "pt"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export function getLocaleFromNavigator(): Locale {
  if (typeof window === "undefined") return defaultLocale

  const browserLang = navigator.language.split("-")[0]
  return locales.includes(browserLang as Locale) ? (browserLang as Locale) : defaultLocale
}
