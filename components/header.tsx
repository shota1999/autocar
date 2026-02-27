"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import type { Locale } from "@/lib/translations"

const languages: { code: Locale; label: string }[] = [
  { code: "ka", label: "GE" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const { locale, setLocale, t } = useLanguage()

  const currentLang = languages.find((l) => l.code === locale)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-xl bg-zinc-900/60 px-6 py-3 backdrop-blur-md border border-white/5">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
            <span className="text-xl font-bold text-white">A</span>
          </div>
          <span className="text-xl font-bold text-white">AutoPro</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#home"
            className="text-sm text-white/80 transition-colors hover:text-white"
          >
            {t("nav.home")}
          </Link>
          <Link
            href="#services"
            className="text-sm text-white/80 transition-colors hover:text-white"
          >
            {t("nav.services")}
          </Link>
          <Link
            href="#gallery"
            className="text-sm text-white/80 transition-colors hover:text-white"
          >
            {t("nav.gallery")}
          </Link>

          {/* Language Switcher */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
            >
              <Globe className="h-4 w-4" />
              <span>{currentLang?.label}</span>
            </button>
            {isLangOpen && (
              <div className="absolute right-0 top-full mt-2 overflow-hidden rounded-lg border border-white/10 bg-zinc-900/95 backdrop-blur-md">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      setLocale(lang.code)
                      setIsLangOpen(false)
                    }}
                    className={`flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors hover:bg-white/10 ${
                      locale === lang.code ? "text-red-500" : "text-white/80"
                    }`}
                  >
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="#contact"
            className="rounded-lg bg-red-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-red-700"
          >
            {t("nav.contactUs")}
          </Link>
        </div>

        {/* Mobile: Language + Menu */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Language Switcher */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 rounded-lg border border-white/10 px-2 py-1.5 text-sm text-white/80"
            >
              <Globe className="h-4 w-4" />
              <span>{currentLang?.label}</span>
            </button>
            {isLangOpen && (
              <div className="absolute right-0 top-full mt-2 overflow-hidden rounded-lg border border-white/10 bg-zinc-900/95 backdrop-blur-md">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      setLocale(lang.code)
                      setIsLangOpen(false)
                    }}
                    className={`flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors hover:bg-white/10 ${
                      locale === lang.code ? "text-red-500" : "text-white/80"
                    }`}
                  >
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 rounded-lg bg-zinc-900/95 p-4 backdrop-blur-sm md:hidden">
            <div className="flex flex-col gap-4">
              <Link
                href="#home"
                className="text-sm text-white/80 transition-colors hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.home")}
              </Link>
              <Link
                href="#services"
                className="text-sm text-white/80 transition-colors hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.services")}
              </Link>
              <Link
                href="#gallery"
                className="text-sm text-white/80 transition-colors hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.gallery")}
              </Link>
              <Link
                href="#contact"
                className="rounded-lg bg-red-600 px-6 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-red-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.contactUs")}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
