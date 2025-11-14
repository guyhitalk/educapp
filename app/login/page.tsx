"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSignUp, setIsSignUp] = useState(false)
  const { t } = useLanguage()

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login/signup logic here
  }

  const handleGoogleLogin = () => {
    // Handle Google login logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="absolute top-6 right-6">
        <LanguageSwitcher />
      </div>

      <div className="w-full max-w-md">
        <div className="bg-card border border-border rounded-2xl shadow-lg p-8 md:p-12">
          {/* Logo/Branding */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Image src="/educapp-logo.svg" alt="EducApp Logo" width={48} height={48} className="w-12 h-12" />
            <div className="text-left">
              <h1 className="text-3xl font-bold text-foreground tracking-tight leading-none">
                {t("title")}
                <span className="text-primary">.us</span>
              </h1>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-base text-muted-foreground">{isSignUp ? t("pleaseSignup") : t("pleaseLogin")}</p>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleEmailSubmit} className="space-y-4 mb-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-primary">
                {t("emailLabel")}*
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 border-2 border-primary focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg"
              />
            </div>

            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-primary">
                  {t("passwordLabel")}*
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 border-2 border-primary focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg"
                />
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-base font-medium"
            >
              {t("continueButton")}
            </Button>
          </form>

          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground">
              {isSignUp ? t("alreadyHaveAccount") : t("dontHaveAccount")}{" "}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-primary hover:underline font-medium"
              >
                {isSignUp ? t("logIn") : t("signUp")}
              </button>
            </p>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <Separator className="bg-border" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-4 text-sm text-muted-foreground">
              {t("orDivider")}
            </span>
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleLogin}
            className="w-full h-12 border-2 border-border hover:bg-accent rounded-lg bg-transparent"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-base">{t("continueWithGoogle")}</span>
          </Button>

          <div className="text-center mt-8">
            <Link href="/" className="text-sm text-primary hover:underline">
              {t("backToHome")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
