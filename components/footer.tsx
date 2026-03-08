"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/10 px-4 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 shadow-[0_10px_30px_rgba(220,38,38,0.35)] ring-1 ring-red-400/30">
                <span className="text-xl font-black uppercase tracking-[-0.1em] text-white">T</span>
              </div>
              <span className="flex items-baseline text-[1.35rem] font-black uppercase leading-none tracking-[-0.09em] italic">
                <span className="text-white">Top</span>
                <span className="ml-1 text-red-500">Car</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {t("nav.gallery")}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">{t("footer.services")}</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-white/60">{t("service.1")}</span>
              </li>
              <li>
                <span className="text-sm text-white/60">{t("service.5")}</span>
              </li>
              <li>
                <span className="text-sm text-white/60">{t("service.6")}</span>
              </li>
              <li>
                <span className="text-sm text-white/60">{t("service.8")}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">{t("footer.contactInfo")}</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>+995 595 727 017</li>
              <li>+995 555 54 16 44</li>
              <li>{t("contact.address")}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Top Car. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
