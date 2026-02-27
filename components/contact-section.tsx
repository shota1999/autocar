"use client"

import { Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="relative px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-wider text-red-500">
            {t("contact.subtitle")}
          </p>
          <h2 className="mb-12 text-4xl font-bold text-white md:text-5xl">
            {t("contact.title")}
          </h2>

          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
            <a
              href="tel:+995568705713"
              className="group flex items-center gap-3 text-white/70 transition-colors hover:text-white"
            >
              <Phone className="h-5 w-5 text-red-500" />
              <span>+995 568 705 713</span>
            </a>

            <a
              href="tel:+995555541644"
              className="group flex items-center gap-3 text-white/70 transition-colors hover:text-white"
            >
              <Phone className="h-5 w-5 text-red-500" />
              <span>+995 555 54 16 44</span>
            </a>


          </div>
        </div>
      </div>
    </section>
  )
}
