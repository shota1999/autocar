"use client"

import { ArrowRight, Play } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden px-4 pt-28 pb-12 sm:px-6 md:px-8 md:pt-32"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/before-after-montage.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,7,0.38)_0%,rgba(5,5,7,0.62)_25%,rgba(5,5,7,0.86)_70%,rgba(5,5,7,0.96)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,7,0.88)_0%,rgba(5,5,7,0.72)_34%,rgba(5,5,7,0.3)_68%,rgba(5,5,7,0.7)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.22),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_18%)]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2 text-[0.7rem] uppercase tracking-[0.32em] text-red-300 backdrop-blur-sm">
            <Play className="h-3.5 w-3.5" />
            <span>{t("hero.subtitle")}</span>
          </div>

          <h1 className="mt-7 text-4xl font-bold leading-[0.96] text-white sm:text-5xl lg:text-7xl">
            {t("hero.title")}
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
            {t("hero.accordion2.content")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3 text-sm font-medium text-white transition hover:bg-red-700"
            >
              {t("hero.cta")}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/6 px-7 py-3 text-sm font-medium text-white/84 backdrop-blur-sm transition hover:bg-white/10 hover:text-white"
            >
              {t("nav.gallery")}
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-white">15+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.28em] text-white/45">
                TopCar
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 backdrop-blur-sm">
              <p className="text-sm font-medium text-white">
                {t("hero.accordion1.title")}
              </p>
              <p className="mt-2 text-sm text-white/55">
                {t("gallery.before")} / {t("gallery.after")}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 backdrop-blur-sm">
              <p className="text-sm font-medium text-white">
                {t("hero.accordion2.title")}
              </p>
              <p className="mt-2 text-sm text-white/55">
                {t("services.title")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
