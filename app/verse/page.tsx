import type { Metadata } from "next"
import Image from "next/image"
import { getVerseOfTheDay, isConfigured } from "@/lib/verse-of-the-day"

export const metadata: Metadata = {
  title: "Verse of the Day - EducApp",
  description: "Today's Bible verse, refreshed daily. Powered by the YouVersion Bible Platform.",
}

// Re-render on the server at most once an hour so the verse stays current
// without any manual work.
export const revalidate = 3600

function todaysDate(): string {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default async function VerseOfTheDayPage() {
  const verse = await getVerseOfTheDay()

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background px-4 py-12">
      {/* Branding header */}
      <header className="flex items-center justify-center gap-3 mb-10">
        <Image
          src="/educapp-logo.svg"
          alt="EducApp Logo"
          width={48}
          height={48}
          className="w-10 h-10 md:w-12 md:h-12"
          priority
        />
        <span className="text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-none">
          EducApp
          <span className="text-primary">.us</span>
        </span>
      </header>

      <section
        aria-labelledby="votd-heading"
        className="w-full max-w-2xl rounded-2xl border border-border bg-card px-6 py-10 md:px-12 md:py-14 shadow-sm text-center"
      >
        <p className="text-xs md:text-sm font-medium uppercase tracking-widest text-primary mb-2">
          Verse of the Day
        </p>
        <p className="text-xs md:text-sm text-muted-foreground mb-8">{todaysDate()}</p>

        {verse ? (
          <blockquote>
            <p
              id="votd-heading"
              className="text-pretty text-2xl md:text-3xl font-semibold leading-relaxed text-card-foreground"
            >
              {verse.text ? `“${verse.text}”` : "Today's verse is on its way."}
            </p>
            <footer className="mt-6 text-base md:text-lg font-medium text-primary">
              {verse.reference}
              {verse.version ? (
                <span className="text-muted-foreground font-normal"> · {verse.version}</span>
              ) : null}
            </footer>
          </blockquote>
        ) : (
          <div id="votd-heading" className="text-card-foreground">
            <p className="text-lg md:text-xl font-medium mb-2">
              {"We couldn't load today's verse."}
            </p>
            <p className="text-sm text-muted-foreground text-pretty">
              {isConfigured()
                ? "Please check back again shortly."
                : "The YouVersion App Key hasn't been set up yet."}
            </p>
          </div>
        )}
      </section>

      <footer className="mt-6 text-center">
        <p className="text-xs md:text-sm text-muted-foreground">
          Verse of the Day provided by{" "}
          <a
            href="https://www.youversion.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            YouVersion
          </a>
        </p>
      </footer>
    </main>
  )
}
