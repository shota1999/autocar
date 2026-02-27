"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const [openItem, setOpenItem] = useState<number | null>(1)
  const { t } = useLanguage()

  const accordionItems = [
    {
      id: 1,
      title: t("hero.accordion1.title"),
      content: t("hero.accordion1.content"),
    },
    {
      id: 2,
      title: t("hero.accordion2.title"),
      content: t("hero.accordion2.content"),
    },
  ]

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-4 pt-24 pb-12 md:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image Collage */}
        <div className="relative grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/outlander-before.jpg"
                alt="Mitsubishi Outlander before restoration"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/outlander-after.jpg"
                alt="Mitsubishi Outlander after restoration"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/d674206b-6b0b-41b8-af41-95f4dd18688b.jpg"
                alt="Alfa Romeo Stelvio side repair result"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-800/50">
              <div className="flex h-full items-center justify-center p-4 text-center">
                <div>
                  <p className="text-4xl font-bold text-red-500">15+</p>
                  <p className="text-sm text-white/70">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm uppercase tracking-wider text-white/60">
            {t("hero.subtitle")}
          </p>
          <h1 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl text-balance">
            {t("hero.title")}
          </h1>

          <div className="space-y-4">
            {accordionItems.map((item) => (
              <div key={item.id} className="border-b border-white/10">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4 text-left"
                  onClick={() =>
                    setOpenItem(openItem === item.id ? null : item.id)
                  }
                >
                  <span
                    className={`font-medium transition-colors ${openItem === item.id ? "text-red-500" : "text-white"}`}
                  >
                    {item.title}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-red-500 transition-transform ${openItem === item.id ? "rotate-180" : ""}`}
                  />
                </button>
                {openItem === item.id && (
                  <div className="pb-4 text-white/70">{item.content}</div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-8 py-3 font-medium text-white transition-all hover:bg-red-700"
            >
              {t("hero.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
