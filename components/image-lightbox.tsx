"use client"

import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useEffect, useRef, type TouchEvent } from "react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"

type LightboxImage = {
  src: string
  alt: string
  title?: string
  description?: string
}

type ImageLightboxProps = {
  images: LightboxImage[]
  currentIndex: number | null
  onOpenChange: (open: boolean) => void
  onNavigate?: (index: number) => void
}

export function ImageLightbox({
  images,
  currentIndex,
  onOpenChange,
  onNavigate,
}: ImageLightboxProps) {
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const image =
    currentIndex !== null && currentIndex >= 0 && currentIndex < images.length
      ? images[currentIndex]
      : null
  const hasMultipleImages = images.length > 1

  const goToPrevious = () => {
    if (!image || !onNavigate || !hasMultipleImages || currentIndex === null) {
      return
    }

    onNavigate((currentIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    if (!image || !onNavigate || !hasMultipleImages || currentIndex === null) {
      return
    }

    onNavigate((currentIndex + 1) % images.length)
  }

  useEffect(() => {
    if (!image || !hasMultipleImages) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        goToPrevious()
      }

      if (event.key === "ArrowRight") {
        event.preventDefault()
        goToNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [goToNext, goToPrevious, hasMultipleImages, image])

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0]
    touchStartX.current = touch.clientX
    touchStartY.current = touch.clientY
  }

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (
      !hasMultipleImages ||
      touchStartX.current === null ||
      touchStartY.current === null
    ) {
      return
    }

    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - touchStartX.current
    const deltaY = touch.clientY - touchStartY.current

    touchStartX.current = null
    touchStartY.current = null

    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return
    }

    if (deltaX > 0) {
      goToPrevious()
      return
    }

    goToNext()
  }

  return (
    <Dialog open={Boolean(image)} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="left-0 top-0 h-[100dvh] w-screen max-w-none translate-x-0 translate-y-0 overflow-hidden border-0 bg-black/95 p-0 text-white sm:left-[50%] sm:top-[50%] sm:h-auto sm:w-[94vw] sm:max-w-[94vw] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-xl sm:border sm:border-white/10 sm:bg-zinc-950/95 sm:p-3 lg:w-[90vw] lg:max-w-[90vw] xl:w-auto xl:max-w-[1600px]"
      >
        {image ? (
          <div className="flex h-full min-h-0 w-full flex-col sm:space-y-2">
            <div className="flex w-full min-w-0 items-start justify-between gap-3 overflow-hidden border-b border-white/10 px-3 py-3 sm:border-0 sm:px-1 sm:py-0">
              <div className="min-w-0 flex-1 overflow-hidden">
                <DialogTitle className="truncate pr-2 text-sm sm:text-base">
                  {image.title ?? image.alt}
                </DialogTitle>
                {image.description ? (
                  <DialogDescription className="hidden text-xs text-white/60 sm:block sm:text-sm">
                    {image.description}
                  </DialogDescription>
                ) : null}
              </div>
              <div className="flex shrink-0 items-center gap-3">
                {hasMultipleImages ? (
                  <div className="shrink-0 text-xs text-white/50 sm:pr-2 sm:text-sm">
                    {currentIndex! + 1} / {images.length}
                  </div>
                ) : null}
                <DialogClose className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </DialogClose>
              </div>
            </div>

            <div
              className="relative flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden bg-black touch-pan-y sm:rounded-xl sm:border sm:border-white/10"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {hasMultipleImages ? (
                <>
                  <button
                    type="button"
                    onClick={goToPrevious}
                    className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white transition hover:bg-black/75 sm:left-3 sm:h-11 sm:w-11"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={goToNext}
                    className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white transition hover:bg-black/75 sm:right-3 sm:h-11 sm:w-11"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                </>
              ) : null}

              <div className="flex w-full max-w-full justify-center overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block h-auto max-h-[calc(100dvh-4.5rem)] max-w-full w-auto sm:max-h-[88vh]"
                />
              </div>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
