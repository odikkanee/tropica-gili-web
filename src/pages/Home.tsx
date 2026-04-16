import { cn, scrollToHashTarget } from '@/src/lib/utils'
import {
    ArrowRight,
    CheckCircle2,
    Clock3,
    Coffee,
    Dumbbell,
    Egg,
    Laptop,
    MapPin,
    ShieldCheck,
    Star,
    Utensils,
    Waves,
    Wifi,
    Wind,
    Zap,
} from 'lucide-react'
import { useEffect, useState } from 'react'

import GalleryLightbox from '@/src/components/GalleryLightbox'
import SectionLink from '@/src/components/SectionLink'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const facilities = [
  {
    icon: <Dumbbell className="h-6 w-6" />,
    title: 'Gym & Recovery Spa',
    desc: 'Strength training, cardio, sauna, ice bath, and recovery access in one polished space.',
    highlights: [
      'Modern equipment',
      'Sauna, jacuzzi, ice bath',
      'Included for hotel guests',
    ],
    link: '/gym',
  },
  {
    icon: <Laptop className="h-6 w-6" />,
    title: 'Co-Working Space',
    desc: 'Quiet air-conditioned work zones built for deep focus, video calls, and long remote-work days.',
    highlights: [
      'Stable fiber internet',
      'Printing and outlets',
      'Free coffee and tea',
    ],
    link: '/coworking',
  },
  {
    icon: <Utensils className="h-6 w-6" />,
    title: 'Restaurant',
    desc: 'Balanced meals and reliable all-day dining for guests who want comfort, protein, and convenience.',
    highlights: [
      'High-protein menu',
      'Breakfast included',
      'Healthy everyday options',
    ],
    link: '/restaurant',
  },
]

const perks = [
  { icon: <Coffee className="h-4 w-4" />, label: 'Free Breakfast' },
  { icon: <Wifi className="h-4 w-4" />, label: 'Stable Wi-Fi' },
  { icon: <Wind className="h-4 w-4" />, label: 'Air-conditioned comfort' },
  { icon: <Waves className="h-4 w-4" />, label: 'Pool access' },
  { icon: <Laptop className="h-4 w-4" />, label: 'Co-working space' },
  { icon: <Dumbbell className="h-4 w-4" />, label: 'Gym access' },
]

const roomOptions = [
  {
    title: 'Double Pool View',
    priceShort: 'Rp 590k',
    priceFull: 'Rp 590,000 / night',
    img: '/assets/img/hero.jpg',
    alt: 'Double Pool View room overlooking the pool area',
    summary:
      'Best for solo guests or couples who want a bright room close to the pool.',
    features: [
      'Pool view',
      'Private bathroom',
      'Work desk',
      'Breakfast + gym access',
    ],
  },
  {
    title: 'Standard Triple',
    priceShort: 'Rp 890k',
    priceFull: 'Rp 890,000 / night',
    img: '/assets/img/rooms/standardtripleroom.jpg',
    alt: 'Standard Triple room with flexible bedding for friends or small groups',
    summary:
      'A practical option for small groups who still want comfort and space to work.',
    features: [
      '1 single + 1 king bed',
      'Pool view',
      'Private bathroom',
      'Breakfast + gym + co-working access',
    ],
  },
  {
    title: 'Triple Room',
    priceShort: 'Rp 990k',
    priceFull: 'Rp 990,000 / night',
    img: '/assets/img/rooms/tripleroom.jpg',
    alt: 'Triple room prepared for a longer group stay',
    summary:
      'The room for longer group stays, surf trips, or friends traveling together.',
    features: [
      '2 single + 1 king bed',
      'Private bathroom',
      'Work desk',
      'Breakfast + gym + co-working access',
    ],
  },
]

const galleryImages = [
  {
    src: '/assets/img/gym/jacuzzi.jpg',
    alt: 'Strength training area inside the gym',
  },
  {
    src: '/assets/img/gym/gym8.jpg',
    alt: 'Recovery area inside the gym facility',
  },
  { src: '/assets/img/coworking/co9.jpg', alt: 'Main co-working desk area' },
  {
    src: '/assets/img/coworking/co3.jpg',
    alt: 'Co-working lounge and collaborative seating',
  },
  {
    src: '/assets/img/rooms/standardtripleroom.jpg',
    alt: 'Double room interior with warm natural light',
  },
  {
    src: '/assets/img/rooms/standardroom.jpeg',
    alt: 'Standard triple room layout',
  },
  {
    src: '/assets/img/gym/gym3.jpg',
    alt: 'Modern equipment and training floor',
  },
  {
    src: '/assets/img/coworking/co5.jpg',
    alt: 'Quiet co-working corner for focused work',
  },
]

const bookingPortals = [
  {
    name: 'Booking.com',
    tagline:
      'Reserve through the platform most international travelers already use.',
    badge: 'Trusted global portal',
    accent: 'from-blue-500/12 to-cyan-500/10',
    border: 'border-blue-200',
    href: 'https://www.booking.com/searchresults.html?aid=318615&label=English_Indonesia_EN_ID_28546570705-G6blYurG1wv5nxy_NQuKzQS634117825086%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-209721654025%3Alp9209135%3Ali%3Adec%3Adm%3Aag28546570705%3Acmp340122265&gclid=Cj0KCQjwp7jOBhDGARIsABe7C4cXB2YohEO8EvYbAgGj4TamR4Lc6wFlNYSPl9XaaD_ReQqn5XEldgcaAt9IEALw_wcB&highlighted_hotels=14847588&redirected=1&city=900048659&hlrd=no_dates&source=hotel&expand_sb=1&keep_landing=1&sid=ba5cac4c7dc914ac07d5bb9f004dd73d',
  },
  {
    name: 'Agoda',
    tagline:
      'A fast mobile-first booking route for guests comparing options across Asia.',
    badge: 'Popular in Asia travel search',
    accent: 'from-rose-500/12 to-orange-500/10',
    border: 'border-orange-200',
    href: 'https://www.agoda.com/tropica-gili-hotel/hotel/lombok-id.html?cid=1844104',
  },
]

const testimonials = [
  {
    quote:
      'Strong Wi-Fi, a calm co-working room, and recovery facilities after training made this one of the easiest long-stay bookings on the island.',
    author: 'Arif, remote worker',
  },
  {
    quote:
      'The staff was responsive on WhatsApp, breakfast was reliable, and the room felt practical for both work and rest.',
    author: 'Rachel, 8-night guest',
  },
  {
    quote:
      'If you want to train, sleep well, and stay close to the harbor without losing comfort, this place gets the balance right.',
    author: 'Daniel, fitness traveler',
  },
]

const bookingAssurances = [
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Direct support',
    copy: 'We confirm availability and details directly on WhatsApp so your request does not disappear into a generic inbox.',
  },
  {
    icon: <Clock3 className="h-5 w-5" />,
    title: 'Fast response',
    copy: 'Best for same-day questions, airport arrival timing, and longer-stay requests.',
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: 'Central location',
    copy: 'A convenient base close to the main harbor area, dining spots, and everyday island logistics.',
  },
]

export default function Home() {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0)
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(
    null,
  )
  const [selectedRoomType, setSelectedRoomType] = useState(roomOptions[0].title)
  const [checkInDate, setCheckInDate] = useState('')

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveRoomIndex(
        (currentIndex) => (currentIndex + 1) % roomOptions.length,
      )
    }, 4500)

    return () => window.clearInterval(intervalId)
  }, [])

  const activeRoom = roomOptions[activeRoomIndex]
  const today = new Date().toISOString().split('T')[0]

  const focusBookingForRoom = (roomTitle: string) => {
    setSelectedRoomType(roomTitle)
    scrollToHashTarget('booking')
  }

  const showPreviousGalleryImage = () => {
    setActiveGalleryIndex((currentIndex) => {
      if (currentIndex === null) {
        return 0
      }

      return (currentIndex - 1 + galleryImages.length) % galleryImages.length
    })
  }

  const showNextGalleryImage = () => {
    setActiveGalleryIndex((currentIndex) => {
      if (currentIndex === null) {
        return 0
      }

      return (currentIndex + 1) % galleryImages.length
    })
  }

  return (
    <div className="relative overflow-hidden">
      <section className="relative pb-20 pt-24 sm:pb-24 md:pt-28">
        <div className="absolute -left-32 top-16 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -right-24 top-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8 lg:col-span-7"
            >
              <div className="section-kicker">
                <Palmtree className="h-4 w-4" />
                Stay, Work, Recover in Gili Trawangan
              </div>

              <div className="space-y-5">
                <h1 className="text-balance text-5xl font-extrabold leading-none tracking-tight text-sand-900 md:text-7xl">
                  A hotel built for
                  <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-orange-600 to-orange-700">
                    travelers with rhythm
                  </span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-sand-700/80 md:text-xl">
                  Tropica Gili Hotel gives you the practical essentials that
                  matter most on a long or active stay: clean rooms, reliable
                  internet, breakfast, gym and recovery access, and a central
                  island base that keeps the day simple.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <SectionLink
                  to="/#booking"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-7 py-4 text-lg font-extrabold text-white shadow-[0_18px_38px_-22px_rgba(255,107,53,0.82)] hover:bg-orange-600"
                >
                  Book your stay
                  <ArrowRight className="h-5 w-5" />
                </SectionLink>
                <SectionLink
                  to="/#facilities"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-sand-200 bg-white px-7 py-4 text-lg font-bold text-sand-900 shadow-[0_12px_30px_-24px_rgba(74,63,53,0.36)] hover:border-orange-200 hover:bg-orange-50"
                >
                  Explore facilities
                </SectionLink>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'Guest rating', value: '4.5 / 5' },
                  { label: 'Ideal for stays', value: '3-14 nights' },
                  { label: 'Workspace speed', value: 'Fiber-ready' },
                ].map((item) => (
                  <div key={item.label} className="surface-card px-5 py-5">
                    <div className="text-xs font-bold uppercase tracking-[0.24em] text-sand-400">
                      {item.label}
                    </div>
                    <div className="mt-3 text-2xl font-extrabold text-sand-900">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                {bookingPortals.map((portal) => (
                  <div
                    key={portal.name}
                    className={cn(
                      'surface-card flex h-full flex-col bg-linear-to-br p-5',
                      portal.accent,
                      portal.border,
                    )}
                  >
                    <div className="mb-3 inline-flex w-fit rounded-full border border-white/90 bg-white/88 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-sand-400">
                      {portal.badge}
                    </div>
                    <h3 className="text-xl font-extrabold text-sand-900">
                      {portal.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-sand-700/80">
                      {portal.tagline}
                    </p>
                    <a
                      href={portal.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-sand-900 px-4 py-3 text-sm font-bold text-white hover:bg-orange-500"
                    >
                      Open {portal.name}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {perks.map((perk) => (
                  <div
                    key={perk.label}
                    className="inline-flex items-center gap-2 rounded-full border border-sand-200 bg-white px-4 py-2 text-sm font-semibold text-sand-700 shadow-[0_10px_24px_-22px_rgba(74,63,53,0.38)]"
                  >
                    <span className="rounded-full bg-orange-100 p-1 text-orange-600">
                      {perk.icon}
                    </span>
                    {perk.label}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative lg:col-span-5"
            >
              <div className="surface-card relative overflow-hidden p-3">
                <div className="relative aspect-4/5 overflow-hidden rounded-[1.75rem]">
                  {roomOptions.map((room, index) => (
                    <img
                      key={room.title}
                      src={room.img}
                      alt={room.alt}
                      className={cn(
                        'absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
                        index === activeRoomIndex ? 'opacity-100' : 'opacity-0',
                      )}
                      referrerPolicy="no-referrer"
                    />
                  ))}
                  <div className="absolute inset-0 bg-linear-to-t from-[#251d17]/78 via-[#251d17]/12 to-transparent" />

                  <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-4">
                    <div className="rounded-full border border-white/20 bg-white/16 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white backdrop-blur-md">
                      Featured room
                    </div>
                    <div className="rounded-full border border-white/20 bg-white/16 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white backdrop-blur-md">
                      Breakfast + co-working + gym access 
                    </div>
                  </div>

                  <div className="absolute inset-x-5 bottom-5">
                    <div className="rounded-[1.75rem] border border-white/30 bg-white/86 p-6 backdrop-blur-md">
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-[0.28em] text-orange-600">
                            {activeRoom.title}
                          </div>
                          <p className="mt-2 max-w-sm text-sm leading-6 text-sand-700/78">
                            {activeRoom.summary}
                          </p>
                        </div>
                        <div className="text-left sm:text-right">
                          <div className="text-xs font-bold uppercase tracking-[0.24em] text-sand-400">
                            From
                          </div>
                          <div className="mt-1 text-3xl font-extrabold text-orange-600">
                            {activeRoom.priceShort}
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          {roomOptions.map((room, index) => (
                            <button
                              key={room.title}
                              type="button"
                              aria-label={`Show ${room.title}`}
                              aria-pressed={index === activeRoomIndex}
                              onClick={() => setActiveRoomIndex(index)}
                              className={cn(
                                'h-2.5 rounded-full transition-all',
                                index === activeRoomIndex
                                  ? 'w-8 bg-orange-500'
                                  : 'w-2.5 bg-sand-300 hover:bg-sand-400',
                              )}
                            />
                          ))}
                        </div>
                        <button
                          type="button"
                          onClick={() => focusBookingForRoom(activeRoom.title)}
                          className="inline-flex items-center gap-2 rounded-full bg-sand-900 px-4 py-2.5 text-sm font-bold text-white hover:bg-orange-500"
                        >
                          Book this room
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="facilities" className="bg-sand-100/80 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
            <div className="section-kicker justify-center">
              Designed for active island stays
            </div>
            <h2 className="section-title">
              Facilities that solve the real daily friction
            </h2>
            <p className="section-copy">
              Instead of a generic resort feature list, Tropica focuses on the
              things long-stay and performance-minded guests actually use every
              day.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link to={facility.link} className="group block h-full">
                  <div className="surface-card h-full p-8">
                    <div className="mb-6 inline-flex rounded-2xl bg-orange-500 p-4 text-white shadow-[0_18px_30px_-22px_rgba(255,107,53,0.8)]">
                      {facility.icon}
                    </div>
                    <h3 className="text-2xl font-extrabold text-sand-900 transition-colors group-hover:text-orange-600">
                      {facility.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-sand-700/78">
                      {facility.desc}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {facility.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-sand-700/76"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-orange-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-orange-600 group-hover:gap-3">
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="rooms" className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <div className="section-kicker">Rooms & rates</div>
              <h2 className="section-title">
                Pick the room size that fits your trip, not just your budget
              </h2>
              <p className="section-copy">
                Every stay includes breakfast and gym access, so the main
                decision is how much room you need and who you are traveling
                with.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-orange-200 bg-orange-50 px-5 py-4 text-sm font-semibold text-sand-700 shadow-[0_12px_30px_-26px_rgba(255,107,53,0.46)]">
              Rates shown are per night and include breakfast + gym access.
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {roomOptions.map((room, index) => (
              <motion.div
                key={room.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="surface-card overflow-hidden"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={room.img}
                    alt={room.alt}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute right-4 top-4 rounded-full border border-white/70 bg-white/88 px-4 py-2 text-sm font-black text-orange-600 backdrop-blur-md">
                    {room.priceFull}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-extrabold text-sand-900">
                    {room.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-sand-700/78">
                    {room.summary}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {room.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-sand-700/78"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-orange-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => focusBookingForRoom(room.title)}
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-sand-900 px-5 py-4 text-base font-extrabold text-white hover:bg-orange-500"
                  >
                    Check availability
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-sand-100/70 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
            <div className="section-kicker justify-center">
              See the stay before you book it
            </div>
            <h2 className="section-title">
              A clearer look at the hotel, rooms, and daily-use spaces
            </h2>
            <p className="section-copy">
              The strongest selling point here is how the full stay works
              together, so the gallery mixes rooms, fitness, work, and common
              areas instead of hiding them on separate pages.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className={cn(
                  'overflow-hidden rounded-3xl border border-sand-200 bg-white',
                  index === 0 || index === 5
                    ? 'md:col-span-2 md:aspect-16/10'
                    : 'aspect-square',
                )}
              >
                <button
                  type="button"
                  onClick={() => setActiveGalleryIndex(index)}
                  className="h-full w-full"
                  aria-label={`Open ${image.alt}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GalleryLightbox
        images={galleryImages}
        activeIndex={activeGalleryIndex}
        onClose={() => setActiveGalleryIndex(null)}
        onPrev={showPreviousGalleryImage}
        onNext={showNextGalleryImage}
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="section-kicker">Guest experience</div>
              <h2 className="section-title">
                A stay people recommend because the basics actually hold up
              </h2>
              <p className="section-copy max-w-2xl">
                Guests usually mention the same reasons for booking here: easier
                workdays, practical recovery after training, and a smoother
                island routine.
              </p>

              <div className="space-y-5">
                {testimonials.map((item, index) => (
                  <motion.div
                    key={item.author}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="surface-card p-6"
                  >
                    <div className="mb-4 flex items-center gap-1 text-orange-500">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="h-4 w-4 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-base leading-7 text-sand-700/82">
                      “{item.quote}”
                    </p>
                    <div className="mt-4 text-sm font-bold text-orange-600">
                      {item.author}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="surface-card relative overflow-hidden p-8 lg:p-10">
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/8 via-transparent to-emerald-400/10" />
              <div className="relative">
                <div className="section-kicker">Why guests book direct</div>
                <div className="mt-6 grid gap-5">
                  {bookingAssurances.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-sand-200 bg-white/88 p-5 backdrop-blur-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="rounded-2xl bg-orange-100 p-3 text-orange-600">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-extrabold text-sand-900">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-sand-700/78">
                            {item.copy}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[1.75rem] bg-sand-900 p-6 text-white shadow-[0_24px_50px_-26px_rgba(74,63,53,0.85)]">
                  <div className="text-xs font-bold uppercase tracking-[0.24em] text-orange-300">
                    Direct booking note
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/78">
                    If you already know your dates, the WhatsApp request form
                    below is the fastest way to confirm the best room option for
                    your stay length.
                  </p>
                  <SectionLink
                    to="/#booking"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-extrabold text-sand-900 hover:bg-orange-100"
                  >
                    Open booking request
                    <ArrowRight className="h-4 w-4" />
                  </SectionLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="bg-orange-50/80 py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-8">
              <div className="section-kicker">Book direct</div>
              <div className="space-y-4">
                <h2 className="section-title">
                  Send one clear booking request and continue the conversation
                  on WhatsApp
                </h2>
                <p className="section-copy max-w-xl">
                  This works best for direct stays, custom arrival times, long
                  bookings, or any questions about room fit before payment.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="surface-card p-5">
                  <div className="text-xs font-bold uppercase tracking-[0.24em] text-sand-400">
                    Includes
                  </div>
                  <div className="mt-3 text-lg font-extrabold text-sand-900">
                    Breakfast + gym access
                  </div>
                  <p className="mt-2 text-sm leading-6 text-sand-700/78">
                    The key value-adds are already built into the nightly rate.
                  </p>
                </div>
                <div className="surface-card p-5">
                  <div className="text-xs font-bold uppercase tracking-[0.24em] text-sand-400">
                    Best for
                  </div>
                  <div className="mt-3 text-lg font-extrabold text-sand-900">
                    Remote work and active trips
                  </div>
                  <p className="mt-2 text-sm leading-6 text-sand-700/78">
                    Useful if you need both productivity and recovery during the
                    stay.
                  </p>
                </div>
              </div>
            </div>

            <div className="surface-card p-8 md:p-10">
              <form
                className="space-y-6"
                onSubmit={(event) => {
                  event.preventDefault()

                  const formData = new FormData(event.currentTarget)
                  const message = `Hello Tropica Gili Hotel, I would like to book a stay.\n\nName: ${formData.get('name')}\nWhatsApp: ${formData.get('wa')}\nCheck-in: ${formData.get('checkin')}\nCheck-out: ${formData.get('checkout')}\nRoom type: ${formData.get('type')}\nGuests: ${formData.get('guests')}\nSpecial requests: ${formData.get('notes') || '-'}`

                  window.open(
                    `https://wa.me/6285337370018?text=${encodeURIComponent(message)}`,
                    '_blank',
                  )
                }}
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="booking-name"
                      className="text-xs font-bold uppercase tracking-[0.24em] text-sand-400"
                    >
                      Full name
                    </label>
                    <input
                      id="booking-name"
                      required
                      name="name"
                      type="text"
                      className="form-field"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="booking-wa"
                      className="text-xs font-bold uppercase tracking-[0.24em] text-sand-400"
                    >
                      WhatsApp number
                    </label>
                    <input
                      id="booking-wa"
                      required
                      name="wa"
                      type="tel"
                      className="form-field"
                      placeholder="+62..."
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="booking-checkin"
                      className="text-xs font-bold uppercase tracking-[0.24em] text-sand-400"
                    >
                      Check-in
                    </label>
                    <input
                      id="booking-checkin"
                      required
                      name="checkin"
                      type="date"
                      min={today}
                      value={checkInDate}
                      onChange={(event) => setCheckInDate(event.target.value)}
                      className="form-field"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="booking-checkout"
                      className="text-xs font-bold uppercase tracking-[0.24em] text-sand-400"
                    >
                      Check-out
                    </label>
                    <input
                      id="booking-checkout"
                      required
                      name="checkout"
                      type="date"
                      min={checkInDate || today}
                      className="form-field"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="booking-type"
                      className="text-xs font-bold uppercase tracking-[0.24em] text-sand-400"
                    >
                      Room type
                    </label>
                    <select
                      id="booking-type"
                      name="type"
                      value={selectedRoomType}
                      onChange={(event) =>
                        setSelectedRoomType(event.target.value)
                      }
                      className="form-field"
                    >
                      {roomOptions.map((room) => (
                        <option
                          key={room.title}
                          className="bg-white"
                          value={room.title}
                        >
                          {room.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="booking-guests"
                      className="text-xs font-bold uppercase tracking-[0.24em] text-sand-400"
                    >
                      Guests
                    </label>
                    <select
                      id="booking-guests"
                      name="guests"
                      className="form-field"
                    >
                      <option className="bg-white">1 Guest</option>
                      <option className="bg-white">2 Guests</option>
                      <option className="bg-white">3 Guests</option>
                      <option className="bg-white">4+ Guests</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="booking-notes"
                    className="text-xs font-bold uppercase tracking-[0.24em] text-sand-400"
                  >
                    Special requests
                  </label>
                  <textarea
                    id="booking-notes"
                    name="notes"
                    className="form-field min-h-28"
                    placeholder="Arrival time, long-stay questions, or anything else we should know"
                  />
                </div>

                <div className="rounded-3xl border border-orange-200 bg-orange-50 px-5 py-4 text-sm leading-6 text-sand-700/80">
                  The booking request opens directly in WhatsApp with your
                  details prefilled so the team can respond faster.
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-5 py-4 text-lg font-extrabold text-white shadow-[0_20px_40px_-22px_rgba(255,107,53,0.8)] hover:bg-orange-600"
                >
                  Send booking request
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
            <div className="section-kicker justify-center">Location</div>
            <h2 className="section-title">
              Central enough for easy arrivals, practical enough for everyday
              island life
            </h2>
            <p className="section-copy">
              Tropica Gili Hotel is positioned near the main harbor area, which
              makes arrivals, departures, and daily movement around Gili
              Trawangan more straightforward.
            </p>
          </div>

          <div className="surface-card overflow-hidden p-3">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative min-h-85 overflow-hidden rounded-[1.75rem] border border-sand-200 bg-white md:min-h-115">
                <iframe
                  title="Tropica Gili Hotel location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63160.33404922071!2d116.03620600000002!3d-8.350309!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdde01e9dd6d8b%3A0x9559e54d2fd2b9fc!2sTropica%20Gili%20Hotel!5e0!3m2!1sen!2sus!4v1772248666683!5m2!1sen!2sus"
                  className="h-full w-full grayscale-[0.18] transition-all duration-700 hover:grayscale-0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="flex flex-col gap-4 p-2">
                <div className="rounded-[1.75rem] border border-sand-200 bg-white p-6 shadow-[0_18px_50px_-34px_rgba(74,63,53,0.4)]">
                  <div className="text-xs font-bold uppercase tracking-[0.24em] text-orange-600">
                    Tropica Gili Hotel
                  </div>
                  <p className="mt-3 text-base leading-7 text-sand-700/82">
                    Front of the main harbor area, Gili Trawangan, North Lombok,
                    Indonesia.
                  </p>
                </div>
                <div className="rounded-[1.75rem] border border-sand-200 bg-sand-100/70 p-6">
                  <h3 className="text-lg font-extrabold text-sand-900">
                    What makes this location useful
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-sand-700/78">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-orange-500" />
                      Easier arrival and departure logistics than more remote
                      spots.
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-orange-500" />
                      Convenient for meals, harbor coordination, and everyday
                      island movement.
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-orange-500" />
                      A practical base for guests balancing work, training, and
                      leisure.
                    </li>
                  </ul>
                </div>
                <a
                  href="https://maps.app.goo.gl/UmacDMEgbeFYMtBDA"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sand-900 px-5 py-4 text-base font-extrabold text-white hover:bg-orange-500"
                >
                  Open in Google Maps
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function Palmtree({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4l1-1 1 1h2Z" />
      <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-2l-1-1-1 1h-4l-1-1-1 1h-2Z" />
      <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.71.71-4.25 4.24c1.96 1.96 5.28 1.8 7.43-.35l-7.78-7.78Z" />
      <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5" />
      <path d="M13 15.5c.5 2.5 1.5 4.5 1 6.5" />
      <path d="M11 15.5c.5-2.5-.17-4.5-1-6.5" />
      <path d="M13 15.5c.5-2.5 1.5-4.5 1-6.5" />
    </svg>
  )
}
