"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, GraduationCap, MessageSquare, Menu } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function SearchInterface() {
  const [query, setQuery] = useState("")
  const { t } = useLanguage()

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  // Open EducApp in new tab
  window.open('https://educapp.streamlit.app', '_blank')
}

  const examplePrompts = [
    { icon: BookOpen, label: t("explainBiblical"), value: t("explainBiblicalPrompt") },
    { icon: GraduationCap, label: t("studyHelp"), value: t("studyHelpPrompt") },
    { icon: MessageSquare, label: t("askQuestion"), value: t("askQuestionPrompt") },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 py-12">
      <div className="absolute top-6 right-6 flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-lg border-border hover:bg-accent bg-transparent">
              <Menu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem asChild>
              <Link href="/about" className="cursor-pointer">
                {t("aboutEducApp")}
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <LanguageSwitcher />
        <Link href="/login">
          <Button variant="outline" className="rounded-lg border-border hover:bg-accent bg-transparent">
            {t("login")}
          </Button>
        </Link>
      </div>

      {/* Logo/Title */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Image
            src="/educapp-logo.svg"
            alt="EducApp Logo"
            width={64}
            height={64}
            className="w-12 h-12 md:w-16 md:h-16"
          />
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-none">
              {t("title")}
              <span className="text-primary">.us</span>
            </h1>
          </div>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground font-light">{t("subtitle")}</p>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-3xl mb-8">
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative flex items-center">
            <Input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-14 md:h-16 pl-6 pr-14 text-base md:text-lg rounded-xl border-2 border-border bg-card focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-2 h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary hover:bg-primary/90 transition-colors"
            >
              <Search className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>
        </form>
      </div>

      {/* Example Prompts */}
      <div className="w-full max-w-3xl">
        <div className="flex flex-wrap gap-3 justify-center">
          {examplePrompts.map((prompt, index) => {
            const Icon = prompt.icon
            return (
              <Button
                key={index}
                variant="outline"
                onClick={() => window.open('https://educapp.streamlit.app', '_blank')}
                className="flex items-center gap-2 h-auto py-3 px-4 rounded-lg border-border hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm">{prompt.label}</span>
              </Button>
            )
          })}
        </div>
      </div>

      {/* Footer hint */}
      <div className="absolute bottom-6 text-center">
        <p className="text-xs md:text-sm text-muted-foreground">{t("poweredBy")}</p>
      </div>
    </div>
  )
}
