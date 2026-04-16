import { ArrowRight, Beef, CheckCircle2, Leaf, Utensils } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

import GalleryLightbox from '@/src/components/GalleryLightbox'
import SectionLink from '@/src/components/SectionLink'

const menuItems = [
  {
    name: 'BBQ Chicken Breast',
    price: 'Rp 90k',
    desc: '160gr Chicken, 36 gr Protein.',
    icon: <Beef className="h-4 w-4" />,
  },
  {
    name: 'Grilled Fish',
    price: 'Rp 80k',
    desc: '160 gr Fish, 39 gr Protein.',
    icon: <Leaf className="h-4 w-4" />,
  },
  {
    name: 'Tuna Steak',
    price: 'Rp 90k',
    desc: '160 gr Tuna, 39 gr Protein.',
    icon: <Beef className="h-4 w-4" />,
  },
  {
    name: 'Protein Carb Blast',
    price: 'Rp 90k',
    desc: '150 gr Chicken, 36 gr Protein.',
    icon: <Leaf className="h-4 w-4" />,
  },
   {
    name: 'Tempeh Omelette',
    price: 'Rp 80k',
    desc: '2 eggs, 100 gr Tempeh, 34 gr Protein.',
    icon: <Leaf className="h-4 w-4" />,
  },
   {
    name: 'Grilled Chicken Burger',
    price: 'Rp 90k',
    desc: '160 gr Chicken, 39 gr Protein.',
    icon: <Leaf className="h-4 w-4" />,
  },
   {
    name: 'Grilled Fish Burger',
    price: 'Rp 95k',
    desc: '160 gr Fish, 39 gr Protein.',
    icon: <Leaf className="h-4 w-4" />,
  },
   {
    name: 'Protein Pancake',
    price: 'Rp 75k',
    desc: 'Egg, Protein Powder, Oat, Banana, Carbo 2 gr, 42 gr Protein.',
    icon: <Leaf className="h-4 w-4" />,
  },
   {
    name: 'Chicken Sweet Potato Curry',
    price: 'Rp 85k',
    desc: '160 gr Chicken, 36 gr Protein.',
    icon: <Leaf className="h-4 w-4" />,
  },
   {
    name: 'Tuna Vegetable Curry',
    price: 'Rp 80k',
    desc: '160 gr Tuna, 36 gr Protein.',
    icon: <Leaf className="h-4 w-4" />,
  },
   {
    name: 'Chicken Rice & Vegetable',
    price: 'Rp 80k',
    desc: '160 gr Chicken, 36 gr Protein.',
    icon: <Leaf className="h-4 w-4" />,
  },
   {
    name: 'Grilled Tuna Burger',
    price: 'Rp 90k',
    desc: '160 gr Tuna, 36 gr Protein.',
    icon: <Leaf className="h-4 w-4" />,
  },
  {
    name: 'Vegan Burger',
    price: 'Rp 85k',
    desc: 'Potato, Vegetables',
    icon: <Leaf className="h-4 w-4" />,
  },
   {
    name: 'Crispy Tempeh',
    price: 'Rp 65k',
    desc: '150 gr Protein',
    icon: <Leaf className="h-4 w-4" />,
  },
   {
    name: 'Potato Cake',
    price: 'Rp 65k',
    desc: '150 gr Protein',
    icon: <Leaf className="h-4 w-4" />,
  },
   {
    name: 'Garden Salad',
    price: 'Rp 55k',
    desc: 'Tomato, Cucumber, lettuce, red cabbage, onion, vinegar',
    icon: <Leaf className="h-4 w-4" />,
  },
   {
    name: 'Fish and Chips',
    price: 'Rp 80k',
    desc: '36 gr Protein',
    icon: <Leaf className="h-4 w-4" />,
  },
   {
    name: 'Crispy Calamary',
    price: 'Rp 75k',
    desc: '18 gr Protein',
    icon: <Leaf className="h-4 w-4" />,
  },
   {
    name: 'Chicken Dimsus',
    price: 'Rp 75k',
    desc: '20 gr Protein',
    icon: <Leaf className="h-4 w-4" />,
  },
   {
    name: 'Crispy Fish Baguette',
    price: 'Rp 75k',
    desc: '36 gr Protein',
    icon: <Leaf className="h-4 w-4" />,
  },
  {
    name: 'Grilled Beef Burger',
    price: 'Rp 90k',
    desc: '150 gr Protein, Beef, Vegetables, Potato',
    icon: <Leaf className="h-4 w-4" />,
  },
  {
    name: 'Hawaiian Chicken Burger',
    price: 'Rp 90k',
    desc: '150 gr Protein, Egg, Pinaple, Vegetables, Potato',
    icon: <Leaf className="h-4 w-4" />,
  },

]

const images = [
  '/assets/img/restaurant/resto.jpg',
  '/assets/img/restaurant/menu2.jpeg',
  '/assets/img/restaurant/menu4.jpeg',
  '/assets/img/restaurant/menu5.jpeg',
  '/assets/img/restaurant/menu6.jpeg',
  '/assets/img/restaurant/menu7.jpeg',
  '/assets/img/restaurant/menu8.jpeg',
  '/assets/img/restaurant/menu9.jpeg',
  '/assets/img/restaurant/menu12.jpeg',
  '/assets/img/restaurant/menu13.jpeg',
  '/assets/img/restaurant/menu14.jpeg',
  '/assets/img/restaurant/menu16.jpg',
  '/assets/img/restaurant/menu17.jpg',
  '/assets/img/restaurant/menu18.jpg',
  '/assets/img/restaurant/menu19.jpg',
  '/assets/img/restaurant/menu20.jpg',
  '/assets/img/restaurant/menu21.jpg',
]

export default function Restaurant() {
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
            Book with breakfast included
            <ArrowRight className="h-4 w-4" />
          </SectionLink>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-8">
            <div className="section-kicker">
              <Utensils className="h-4 w-4" />
              Restaurant
            </div>
            <div className="space-y-4">
               <h1 className="section-title">
                Benny's Restaurant
              </h1>
              <h1 className="text-3x1 md:text-5x1 text-green-500">
                Food that supports the stay instead of interrupting it.
              </h1>
              <h1 className="text-3x1 md:text-5x1 text-red-500">
                OPEN DAILY AT 7 AM - 8 PM
              </h1>
              <p className="section-copy">
                The restaurant keeps the stay practical with consistent
                breakfast and simple meal options that make active or work-heavy
                days easier to manage.
              </p>
            </div>

            <div className="space-y-4">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="surface-card flex items-center justify-between gap-4 p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-orange-100 p-3 text-orange-600">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-base font-extrabold text-sand-900">
                        {item.name}
                      </div>
                      <div className="mt-1 text-sm leading-6 text-sand-700/78">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-black text-orange-600">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {images.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className={index === 0 ? 'sm:col-span-2' : ''}
              >
                <button
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className="h-full w-full"
                  aria-label={`Open restaurant photo ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`Restaurant dish photo ${index + 1}`}
                    className={
                      index === 0
                        ? 'aspect-16/10 h-full w-full rounded-3xl border border-sand-200 object-cover'
                        : 'aspect-square h-full w-full rounded-3xl border border-sand-200 object-cover'
                    }
                    referrerPolicy="no-referrer"
                  />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        <section className="mt-20 grid gap-6 lg:grid-cols-3">
          {[
            'Breakfast is already built into the room value, not hidden behind an upsell.',
            'Useful for guests who want protein-forward and practical meal choices.',
            'Keeps the stay more efficient when work, fitness, and recovery all matter.',
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
            alt: `Restaurant dish photo ${index + 1}`,
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
