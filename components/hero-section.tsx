"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const [openItem, setOpenItem] = useState<number | null>(1)
  const { t } = useLanguage()

  const collageImages = {
    before: {
      src: "/images/outlander-before.jpg",
      alt: "Mitsubishi Outlander before restoration",
    },
    after: {
      src: "/images/outlander-after.jpg",
      alt: "Mitsubishi Outlander after restoration",
    },
    side: {
      src: "/images/d674206b-6b0b-41b8-af41-95f4dd18688b.jpg",
      alt: "Alfa Romeo Stelvio side repair result",
    },
    damage: {
      src: "/images/1e5a481c-89f7-4417-abcb-51bf9a206f6c.jpg",
      alt: "Alfa Romeo Stelvio rear quarter damage before repair",
    },
  }

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
        <div className="relative">
          <div className="space-y-4 lg:hidden">
            {[collageImages.before, collageImages.after, collageImages.side, collageImages.damage].map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}

            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/70 p-4 text-center shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
              <div>
                <p className="text-4xl font-bold text-red-500">15+</p>
                <p className="text-sm text-white/70">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-[585px] lg:block">
            <div className="absolute top-2 left-0 w-[52%] rotate-[-3deg] overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={collageImages.before.src}
                  alt={collageImages.before.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute top-10 right-0 z-10 w-[50%] rotate-[2deg] overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-[5/4]">
                <Image
                  src={collageImages.after.src}
                  alt={collageImages.after.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute top-[265px] left-6 z-20 w-[44%] rotate-[-2deg] overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={collageImages.side.src}
                  alt={collageImages.side.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute top-[305px] right-0 w-[48%] rotate-[3deg] overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={collageImages.damage.src}
                  alt={collageImages.damage.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute top-[460px] left-[18%] h-[150px] w-[38%] overflow-hidden rounded-[28px] border border-white/10 bg-zinc-900/70 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
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
