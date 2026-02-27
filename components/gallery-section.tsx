"use client"

import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const { t } = useLanguage()

  const galleryItems = [
    {
      id: 1,
      title: t("gallery.item5.title"),
      description: t("gallery.item5.desc"),
      before: "/images/outlander-before.jpg",
      after: "/images/outlander-after.jpg",
    },
    {
      id: 2,
      title: t("gallery.item7.title"),
      description: t("gallery.item7.desc"),
      before: "/images/1e5a481c-89f7-4417-abcb-51bf9a206f6c.jpg",
      after: "/images/77a838de-921f-4184-aaf3-c55266c70e2d.jpg",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
    setSliderPosition(50)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryItems.length) % galleryItems.length
    )
    setSliderPosition(50)
  }

  const currentItem = galleryItems[currentIndex]

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  return (
    <section id="gallery" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-red-500 text-sm font-medium uppercase tracking-wider">
            {t("gallery.subtitle")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            {t("gallery.title")}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {t("gallery.description")}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Desktop Navigation Buttons - left/right sides */}
            {galleryItems.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="absolute -left-6 top-1/2 z-20 -translate-y-1/2 hidden md:flex items-center justify-center bg-white/10 border border-white/30 text-white hover:bg-white hover:text-black rounded-full w-12 h-12 cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="absolute -right-6 top-1/2 z-20 -translate-y-1/2 hidden md:flex items-center justify-center bg-white/10 border border-white/30 text-white hover:bg-white hover:text-black rounded-full w-12 h-12 cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </>
            )}

            {/* Before/After Image */}
            <div className="relative w-full aspect-[16/9] md:aspect-[16/10] rounded-2xl overflow-hidden border border-white/10">
              <div className="absolute inset-0">
                <img
                  src={currentItem.after}
                  alt={`${currentItem.title} - After`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-green-500 text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-1 md:py-1.5 rounded-full">
                  {t("gallery.after")}
                </div>
              </div>

              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={currentItem.before}
                  alt={`${currentItem.title} - Before`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-red-500 text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-1 md:py-1.5 rounded-full">
                  {t("gallery.before")}
                </div>
              </div>

              <div
                className="absolute top-0 bottom-0 w-1 bg-white z-10 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="flex items-center gap-0.5">
                    <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 text-background" />
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-background" />
                  </div>
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              />
            </div>
          </div>

          <div className="mt-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {currentItem.title}
            </h3>
            <p className="text-white/60 mt-1 text-sm md:text-base">
              {currentItem.description}
            </p>
          </div>

          {/* Mobile Navigation Buttons - below content */}
          {galleryItems.length > 1 && (
            <div className="mt-5 flex justify-center gap-4 md:hidden">
              <button
                type="button"
                onClick={prevSlide}
                className="flex items-center justify-center rounded-full bg-white/10 border border-white/30 p-3 text-white transition-all hover:bg-white hover:text-black cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="flex items-center justify-center rounded-full bg-white/10 border border-white/30 p-3 text-white transition-all hover:bg-white hover:text-black cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}

          {galleryItems.length > 1 && (
            <div className="flex justify-center gap-2 mt-5 md:mt-6">
              {galleryItems.map((_, index) => (
                <button
                  key={`gallery-dot-${galleryItems[index].id}`}
                  type="button"
                  onClick={() => {
                    setCurrentIndex(index)
                    setSliderPosition(50)
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-red-500 w-8"
                      : "bg-white/30 w-2.5 hover:bg-white/50"
                  }`}
                  aria-label={`Go to gallery item ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
