import {
    ArrowRight,
    Bath,
    CheckCircle2,
    Droplets,
    Dumbbell,
    Waves,
    Wind,
    Zap,
} from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

import GalleryLightbox from '@/src/components/GalleryLightbox'
import SectionLink from '@/src/components/SectionLink'

const images = [
  '/assets/img/gym/gym1.jpg',
  '/assets/img/gym/gym2.jpg',
  '/assets/img/gym/gym3.jpg',
  '/assets/img/gym/gym4.jpg',
  '/assets/img/gym/gym5.jpg',
  '/assets/img/gym/gym6.jpg',
  '/assets/img/gym/gym7.jpg',
  '/assets/img/gym/gym8.jpg',
  '/assets/img/gym/gym9.jpg',
  '/assets/img/gym/gym11.jpg',
  '/assets/img/gym/gym12.jpg',
  '/assets/img/gym/gym13.jpg',
  '/assets/img/gym/sauna.jpg',
  '/assets/img/gym/icebath1.jpg',
  '/assets/img/gym/icebath2.jpg',
  '/assets/img/gym/jacuzzi.jpg',
]

const features = [
  {
    icon: <Wind className="h-5 w-5" />,
    label: 'Air-conditioned training floor',
  },
  { icon: <Waves className="h-5 w-5" />, label: 'Ice bath recovery access' },
  { icon: <Bath className="h-5 w-5" />, label: 'Free Towel' },
  { icon: <Zap className="h-5 w-5" />, label: 'Red light therapy' },
  { icon: <Droplets className="h-5 w-5" />, label: 'Sauna and jacuzzi' },
  {
    icon: <Dumbbell className="h-5 w-5" />,
    label: 'Strength and cardio equipment',
  },
]

export default function Gym() {
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
            Book with gym access
            <ArrowRight className="h-4 w-4" />
          </SectionLink>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-8">
            <div className="section-kicker">
              <Dumbbell className="h-4 w-4" />
              Gym & Recovery Spa
            </div>
            <div className="space-y-4">
              <h1 className="section-title">
                Train properly, then recover properly.
              </h1>
              <h1 className="text-3x1 md:text-5x1 text-red-500">
                OPEN DAILY AT 7 AM - 8 PM
              </h1>
              <p className="section-copy">
                This facility is designed for guests who do not want fitness to
                disappear while traveling. You get a proper training setup plus
                recovery tools that make longer stays more sustainable.
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
              Hotel stays include gym access, so you are not paying extra just
              to keep your routine intact.
            </div>
          </div>

          <div className="surface-card overflow-hidden p-3">
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <img
                src="/assets/img/gym/gym-1.jpg"
                alt="Main training space at Tropica Gili gym"
                className="aspect-4/5 h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-[1.75rem] border border-white/25 bg-white/86 p-5 backdrop-blur-md">
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-orange-600">
                  Included in stay
                </div>
                <div className="mt-2 text-xl font-extrabold text-sand-900">
                  Fitness + recovery in one place
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <div className="section-kicker">Gallery</div>
              <h2 className="mt-4 text-3xl font-extrabold text-sand-900">
                Inside the gym facility
              </h2>
            </div>
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
                  aria-label={`Open gym photo ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`Gym facility photo ${index + 1}`}
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
            'Train without needing an external day pass.',
            'Recover after long island walks, surf sessions, or lifting days.',
            'Move directly from room to gym without losing time.',
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
            alt: `Gym facility photo ${index + 1}`,
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
