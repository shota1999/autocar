"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Wrench, Bot, Settings, Paintbrush, Palette, Sparkles, RectangleHorizontal, Zap } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const serviceIcons = [Wrench, Bot, Settings, Paintbrush, Palette, Sparkles, RectangleHorizontal, Zap]

export function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()

  const services = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: t(`service.${i + 1}`),
    description: t(`service.${i + 1}.desc`),
    Icon: serviceIcons[i],
  }))

  const itemsPerPage = 3
  const maxIndex = Math.max(0, services.length - itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const visibleServices = services.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <section id="services" className="relative px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            {t("services.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-white/70 text-pretty">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="relative">
          {/* Desktop Navigation Buttons - left/right */}
          <button
            type="button"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute -left-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 disabled:opacity-30 disabled:hover:scale-100 hidden md:flex items-center justify-center cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-zinc-900" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute -right-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 disabled:opacity-30 disabled:hover:scale-100 hidden md:flex items-center justify-center cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-zinc-900" />
          </button>

          {/* Services Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {visibleServices.map((service) => {
              const IconComponent = service.Icon
              return (
                <div
                  key={service.id}
                  className="group overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm p-8 transition-all hover:-translate-y-2 hover:border-red-500/30 hover:bg-zinc-800/50"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-600/10 text-red-500 transition-colors group-hover:bg-red-600 group-hover:text-white">
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Navigation Buttons - above dots */}
        <div className="mt-6 flex justify-center gap-4 md:hidden">
          <button
            type="button"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="flex items-center justify-center rounded-full bg-white/10 border border-white/30 p-3 text-white transition-all hover:bg-white hover:text-black disabled:opacity-30 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="flex items-center justify-center rounded-full bg-white/10 border border-white/30 p-3 text-white transition-all hover:bg-white hover:text-black disabled:opacity-30 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="mt-4 flex justify-center gap-2 md:mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                index === currentIndex ? "bg-red-500 w-8" : "bg-white/30 w-2.5"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>


      </div>
    </section>
  )
}
