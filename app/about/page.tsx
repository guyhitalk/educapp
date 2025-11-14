"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from "@/components/language-provider"
import { aboutTranslations } from "@/lib/translations"

export default function AboutPage() {
  const { language } = useLanguage()
  const t = aboutTranslations[language]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t.backToHome}
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Logo and Title */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <Image src="/educapp-logo.svg" alt="EducApp Logo" width={64} height={64} className="w-16 h-16" />
          <div>
            <h1 className="text-5xl font-bold text-foreground">
              {t.title}<span className="text-primary">.us</span>
            </h1>
            <p className="text-xl text-muted-foreground">{t.subtitle}</p>
          </div>
        </div>

        {/* About Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t.aboutTitle}</h2>
            <p className="text-lg leading-relaxed text-foreground">
              {t.aboutIntro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>{t.aboutFeature1}</li>
              <li>{t.aboutFeature2}</li>
              <li>{t.aboutFeature3}</li>
            </ul>
            <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
              {t.quote}
            </blockquote>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t.challengeTitle}</h2>
            <p className="text-lg leading-relaxed text-foreground">
              <strong>{t.challengeSubtitle}</strong>
            </p>
            <p className="text-foreground">
              {t.challengeText1}
            </p>
            <p className="text-foreground">
              {t.challengeText2}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t.missionVisionTitle}</h2>

            <h3 className="text-2xl font-bold mb-3 text-foreground">{t.missionTitle}</h3>
            <p className="text-foreground">
              {t.missionText}
            </p>

            <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">{t.visionTitle}</h3>
            <p className="text-foreground">
              {t.visionText}
            </p>

            <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">{t.valuesTitle}</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li><strong>{t.value1}</strong></li>
              <li><strong>{t.value2}</strong></li>
              <li><strong>{t.value3}</strong></li>
              <li><strong>{t.value4}</strong></li>
              <li><strong>{t.value5}</strong></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t.teamTitle}</h2>

            <h3 className="text-2xl font-bold mb-3 text-foreground">{t.coFoundersTitle}</h3>

            <div className="mb-6">
              <h4 className="text-xl font-bold text-primary">{t.guyName}</h4>
              <p className="italic text-muted-foreground mb-2">{t.guyTitle}</p>
              <ul className="list-disc pl-6 space-y-1 text-foreground">
                <li>{t.guyItem1}</li>
                <li>{t.guyItem2}</li>
                <li>{t.guyItem3}</li>
                <li>{t.guyItem4}</li>
                <li>{t.guyItem5}</li>
                <li>{t.guyItem6}</li>
                <li>{t.guyItem7}</li>
                <li>{t.guyItem8}</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-bold text-primary">{t.didaName}</h4>
              <p className="italic text-muted-foreground mb-2">{t.didaTitle}</p>
              <ul className="list-disc pl-6 space-y-1 text-foreground">
                <li>{t.didaItem1}</li>
                <li>{t.didaItem2}</li>
                <li>{t.didaItem3}</li>
                <li>{t.didaItem4}</li>
                <li>{t.didaItem5}</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t.whyExistsTitle}</h2>

            <h3 className="text-2xl font-bold mb-3 text-foreground">{t.problemTitle}</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>{t.problem1}</li>
              <li>{t.problem2}</li>
              <li>{t.problem3}</li>
              <li>{t.problem4}</li>
              <li>{t.problem5}</li>
              <li>{t.problem6}</li>
              <li>{t.problem7}</li>
              <li>{t.problem8}</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">{t.solutionTitle}</h3>
            <p className="text-foreground">
              {t.solutionText}
            </p>
            <ul className="list-none space-y-2 mt-4 text-foreground">
              <li><strong>{t.solutionFeature1}</strong></li>
              <li><strong>{t.solutionFeature2}</strong></li>
              <li><strong>{t.solutionFeature3}</strong></li>
              <li><strong>{t.solutionFeature4}</strong></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t.foundationTitle}</h2>

            <h3 className="text-2xl font-bold mb-3 text-foreground">{t.biblicalWorldviewTitle}</h3>
            <p className="text-foreground">{t.biblicalWorldviewIntro}</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>{t.conviction1}</li>
              <li>{t.conviction2}</li>
              <li>{t.conviction3}</li>
              <li>{t.conviction4}</li>
              <li>{t.conviction5}</li>
              <li>{t.conviction6}</li>
              <li>{t.conviction7}</li>
              <li>{t.conviction8}</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">{t.classicalEdTitle}</h3>
            <p className="text-foreground">
              {t.classicalEdIntro}
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
              {t.danielQuote}
              <br />
              {t.danielRef}
            </blockquote>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-bold text-lg mb-2 text-foreground">{t.classicalTitle}</h4>
                <ul className="list-disc pl-6 space-y-1 text-foreground">
                  <li>{t.classical1}</li>
                  <li>{t.classical2}</li>
                  <li>{t.classical3}</li>
                  <li>{t.classical4}</li>
                  <li>{t.classical5}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-foreground">{t.modernTitle}</h4>
                <ul className="list-disc pl-6 space-y-1 text-foreground">
                  <li>{t.modern1}</li>
                  <li>{t.modern2}</li>
                  <li>{t.modern3}</li>
                  <li>{t.modern4}</li>
                  <li>{t.modern5}</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t.supportedTitle}</h2>
            <p className="text-foreground">
              {t.supportedText}
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
              {t.proverbsQuote}
              <br />
              {t.proverbsRef}
            </blockquote>
          </section>
        </article>

        {/* Footer */}
        <footer className="border-t border-border pt-8 mt-12">
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">{t.copyright}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/terms" className="text-primary hover:underline">
                {t.termsOfUse}
              </Link>
              <Link href="/privacy" className="text-primary hover:underline">
                {t.privacyPolicy}
              </Link>
              <Link href="/advertising" className="text-primary hover:underline">
                {t.advertisingPolicy}
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">
              {t.contact}{" "}
              <a href="mailto:educapp@hitalk.us" className="text-primary hover:underline">
                educapp@hitalk.us
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
