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

  const mobileCollageCards = [
    {
      ...collageImages.before,
      className: "col-span-2 aspect-[16/11]",
      sizes: "(max-width: 1024px) 100vw, 50vw",
      priority: true,
    },
    {
      ...collageImages.after,
      className: "aspect-[5/6]",
      sizes: "(max-width: 640px) 50vw, 33vw",
    },
    {
      ...collageImages.damage,
      className: "aspect-[5/6]",
      sizes: "(max-width: 640px) 50vw, 33vw",
    },
    {
      ...collageImages.side,
      className: "aspect-[5/6]",
      sizes: "(max-width: 640px) 50vw, 33vw",
    },
  ]

  return (
    <section
      id="home"
      className="relative flex px-4 pt-28 pb-14 sm:px-6 md:px-8 md:pt-32 lg:min-h-screen lg:items-center lg:pb-12"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image Collage */}
        <div className="order-2 relative lg:order-1">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
            {mobileCollageCards.map((image) => (
              <div
                key={image.src}
                className={`relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 shadow-[0_24px_70px_rgba(0,0,0,0.35)] ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={image.sizes}
                  priority={image.priority}
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
              </div>
            ))}

            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-zinc-900/85 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.22),transparent_58%)]" />
              <div className="relative flex h-full min-h-[9.5rem] flex-col justify-between">
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-white/45">
                  TopCar
                </span>
                <div>
                  <p className="text-4xl font-black text-red-500 sm:text-5xl">
                    15+
                  </p>
                  <p className="mt-2 max-w-[10ch] text-sm font-medium leading-snug text-white/70">
                    Years Experience
                  </p>
                </div>
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
                  sizes="(max-width: 1280px) 26vw, 24vw"
                  priority
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
                  sizes="(max-width: 1280px) 25vw, 23vw"
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
                  sizes="(max-width: 1280px) 22vw, 20vw"
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
                  sizes="(max-width: 1280px) 24vw, 22vw"
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
        <div className="order-1 flex max-w-2xl flex-col justify-center lg:order-2 lg:pt-8">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-white/60 sm:text-sm">
            {t("hero.subtitle")}
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-none text-white text-balance sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>

          <div className="space-y-3 sm:space-y-4">
            {accordionItems.map((item) => (
              <div key={item.id} className="border-b border-white/10">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                  onClick={() =>
                    setOpenItem(openItem === item.id ? null : item.id)
                  }
                >
                  <span
                    className={`text-sm font-medium transition-colors sm:text-base ${openItem === item.id ? "text-red-500" : "text-white"}`}
                  >
                    {item.title}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-red-500 transition-transform ${openItem === item.id ? "rotate-180" : ""}`}
                  />
                </button>
                {openItem === item.id && (
                  <div className="max-w-xl pb-4 text-sm leading-7 text-white/70 sm:text-base">
                    {item.content}
                  </div>
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
