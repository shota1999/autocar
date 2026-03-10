"use client"

import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ImageLightbox } from "@/components/image-lightbox"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
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

  const lightboxImages = galleryItems.flatMap((item) => [
    {
      src: item.before,
      alt: `${item.title} - ${t("gallery.before")}`,
      title: `${item.title} - ${t("gallery.before")}`,
      description: item.description,
    },
    {
      src: item.after,
      alt: `${item.title} - ${t("gallery.after")}`,
      title: `${item.title} - ${t("gallery.after")}`,
      description: item.description,
    },
  ])

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

  const openComparisonImage = (type: "before" | "after") => {
    const baseIndex = currentIndex * 2
    setLightboxIndex(type === "before" ? baseIndex : baseIndex + 1)
  }

  return (
    <>
      <section id="gallery" className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <span className="text-red-500 text-sm font-medium uppercase tracking-wider">
              {t("gallery.subtitle")}
            </span>
            <h2 className="mt-2 mb-4 text-4xl font-bold text-white md:text-5xl">
              {t("gallery.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-white/60">
              {t("gallery.description")}
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="relative">
              {galleryItems.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevSlide}
                    className="absolute -left-6 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white cursor-pointer hover:bg-white hover:text-black md:flex"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextSlide}
                    className="absolute -right-6 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white cursor-pointer hover:bg-white hover:text-black md:flex"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </>
              )}

              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 md:aspect-[16/10]">
                <div className="absolute inset-0 z-10">
                  <button
                    type="button"
                    onClick={() => openComparisonImage("before")}
                    className="absolute inset-y-0 left-0 cursor-zoom-in"
                    style={{ width: `${sliderPosition}%` }}
                    aria-label={`Open ${t("gallery.before")} image`}
                  >
                    <span className="sr-only">
                      {`Open ${t("gallery.before")} image`}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => openComparisonImage("after")}
                    className="absolute inset-y-0 right-0 cursor-zoom-in"
                    style={{ width: `${100 - sliderPosition}%` }}
                    aria-label={`Open ${t("gallery.after")} image`}
                  >
                    <span className="sr-only">
                      {`Open ${t("gallery.after")} image`}
                    </span>
                  </button>
                </div>

                <div className="absolute inset-0">
                  <img
                    src={currentItem.after}
                    alt={`${currentItem.title} - After`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute top-3 right-3 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white md:top-4 md:right-4 md:px-4 md:py-1.5 md:text-sm">
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
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white md:top-4 md:left-4 md:px-4 md:py-1.5 md:text-sm">
                    {t("gallery.before")}
                  </div>
                </div>

                <div
                  className="pointer-events-none absolute top-0 bottom-0 z-20 w-1 bg-white"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg md:h-10 md:w-10">
                    <div className="flex items-center gap-0.5">
                      <ChevronLeft className="h-3 w-3 text-background md:h-4 md:w-4" />
                      <ChevronRight className="h-3 w-3 text-background md:h-4 md:w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 px-1">
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="h-2 w-full cursor-ew-resize accent-red-500"
                aria-label="Adjust before and after comparison"
              />
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-white md:text-2xl">
                {currentItem.title}
              </h3>
              <p className="mt-1 text-sm text-white/60 md:text-base">
                {currentItem.description}
              </p>
            </div>

            {galleryItems.length > 1 && (
              <div className="mt-5 flex justify-center gap-4 md:hidden">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="flex cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/10 p-3 text-white transition-all hover:bg-white hover:text-black"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="flex cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/10 p-3 text-white transition-all hover:bg-white hover:text-black"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}

            {galleryItems.length > 1 && (
              <div className="mt-5 flex justify-center gap-2 md:mt-6">
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
                        ? "w-8 bg-red-500"
                        : "w-2.5 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to gallery item ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <ImageLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onNavigate={setLightboxIndex}
        onOpenChange={(open) => {
          if (!open) {
            setLightboxIndex(null)
          }
        }}
      />
    </>
  )
}
