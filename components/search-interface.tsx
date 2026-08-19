"use client"

import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function SearchInterface() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 py-12">
      <div className="absolute top-6 right-6 flex items-center gap-2">
        <a href="https://verse.educapp.us" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="h-9 rounded-lg px-3 border-primary/40 text-primary hover:bg-primary/10 hover:text-primary text-sm font-medium whitespace-nowrap bg-transparent"
          >
            <span className="sm:hidden">Verse</span>
            <span className="hidden sm:inline">Verse of the Day</span>
          </Button>
        </a>
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

      {/* Log In Button */}
      <div className="w-full max-w-sm flex justify-center">
        <a href="https://educapp.streamlit.app" target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full h-14 md:h-16 text-base md:text-lg rounded-xl bg-primary hover:bg-primary/90 transition-colors">
            {t("login")}
          </Button>
        </a>
      </div>

      {/* Footer hint */}
      <div className="absolute bottom-6 text-center">
        <p className="text-xs md:text-sm text-muted-foreground">{t("poweredBy")}</p>
      </div>
    </div>
  )
}
