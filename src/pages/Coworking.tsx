import {
    ArrowRight,
    CheckCircle2,
    Coffee,
    Laptop,
    Printer,
    Wifi,
    Wind,
    Zap,
} from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

import GalleryLightbox from '@/src/components/GalleryLightbox'
import SectionLink from '@/src/components/SectionLink'

const images = [
  '/assets/img/coworking/co1.jpg',
  '/assets/img/coworking/co2.jpg',
  '/assets/img/coworking/co3.jpg',
  '/assets/img/coworking/co4.jpg',
  '/assets/img/coworking/co5.jpg',
  '/assets/img/coworking/co6.jpg',
  '/assets/img/coworking/co7.jpg',
  '/assets/img/coworking/co8.jpg',
  '/assets/img/coworking/co10.jpg',
]

const features = [
  {
    icon: <Wifi className="h-5 w-5" />,
    label: 'Stable internet for focused work',
  },
  {
    icon: <Wind className="h-5 w-5" />,
    label: 'Cool, air-conditioned workspace',
  },
  {
    icon: <Coffee className="h-5 w-5" />,
    label: 'Coffee and tea during work sessions',
  },
  { icon: <Printer className="h-5 w-5" />, label: 'Useful printing support' },
  {
    icon: <Zap className="h-5 w-5" />,
    label: 'Ready power access around the room',
  },
]

export default function Coworking() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  return (
    <div className="pb-24 pt-28 md:pt-32">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <SectionLink to="/#facilities" className="soft-link">
            Back to facilities
          </SectionLink>
          <SectionLink
            to="/#booking"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-extrabold text-white hover:bg-orange-600"
          >
            Book a work-friendly stay
            <ArrowRight className="h-4 w-4" />
          </SectionLink>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-8">
            <div className="section-kicker">
              <Laptop className="h-4 w-4" />
              Co-Working Space
            </div>
            <div className="space-y-4">
              <h1 className="section-title">
                A cleaner remote-work setup than improvising from the bed.
              </h1>
              <p className="section-copy">
                The co-working area is here to make working days predictable:
                cool air, stable internet, enough outlets, and a space that
                separates work hours from rest hours.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="surface-card flex items-center gap-3 p-4"
                >
                  <div className="rounded-2xl bg-orange-100 p-3 text-orange-600">
                    {feature.icon}
                  </div>
                  <span className="text-sm font-semibold text-sand-900">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="rounded-[1.75rem] border border-orange-200 bg-orange-50 p-5 text-sm leading-6 text-sand-700/80">
              This is the value for guests who need to stay productive without
              spending the whole day hunting for a workable café setup.
            </div>
          </div>

          <div className="surface-card overflow-hidden p-3">
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <img
                src="/assets/img/coworking/co9.jpg"
                alt="Main co-working room at Tropica Gili Hotel"
                className="aspect-4/5 h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-[1.75rem] border border-white/25 bg-white/86 p-5 backdrop-blur-md">
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-orange-600">
                  Designed for long workdays
                </div>
                <div className="mt-2 text-xl font-extrabold text-sand-900">
                  Work without leaving the property
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-20">
          <div className="mb-8">
            <div className="section-kicker">Gallery</div>
            <h2 className="mt-4 text-3xl font-extrabold text-sand-900">
              Inside the co-working area
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {images.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="overflow-hidden rounded-3xl border border-sand-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className="h-full w-full"
                  aria-label={`Open coworking photo ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`Coworking facility photo ${index + 1}`}
                    className="aspect-video h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-3">
          {[
            'Useful for digital nomads who need better structure during the stay.',
            'Good for calls, admin work, and a more focused routine.',
            'Pairs naturally with the gym and recovery offer for balanced work-travel days.',
          ].map((item) => (
            <div key={item} className="surface-card p-6">
              <div className="flex items-start gap-3 text-sm leading-6 text-sand-700/80">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-500" />
                <span>{item}</span>
              </div>
            </div>
          ))}
        </section>

        <GalleryLightbox
          images={images.map((src, index) => ({
            src,
            alt: `Coworking facility photo ${index + 1}`,
          }))}
          activeIndex={activeImageIndex}
          onClose={() => setActiveImageIndex(null)}
          onPrev={() =>
            setActiveImageIndex((current) =>
              current === null
                ? 0
                : (current - 1 + images.length) % images.length,
            )
          }
          onNext={() =>
            setActiveImageIndex((current) =>
              current === null ? 0 : (current + 1) % images.length,
            )
          }
        />
      </div>
    </div>
  )
}
