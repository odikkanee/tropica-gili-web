import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'

import SectionLink from '@/src/components/SectionLink'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-sand-200 bg-[#2d231d] pt-16 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-orange-400/80 to-transparent" />
      <div className="absolute -left-32 -top-12 h-52 w-52 rounded-full bg-orange-500/15 blur-3xl" />
      <div className="absolute -bottom-20 -right-8 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="grid gap-12 pb-12 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
          <div className="space-y-6">
            <Link
              to="/"
              className="inline-flex items-center gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
            >
              <img
                src="/assets/img/tropicalogo.png"
                alt="Tropica Gili Hotel logo"
                className="h-12 w-auto rounded-2xl bg-white/95 p-2"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="text-sm font-black uppercase tracking-wide text-white sm:text-base">
                  Tropica Gili Hotel
                </div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.28em] text-orange-300">
                  Stay, Work, Recover
                </div>
              </div>
            </Link>
            <p className="max-w-md text-sm leading-7 text-sand-100/76">
              Built for remote workers, active travelers, and long-stay guests
              who want a clean room, reliable internet, recovery access, and a
              central base in Gili Trawangan.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-sm font-semibold text-orange-200">
              <ShieldCheck className="h-4 w-4" />
              Direct booking support via WhatsApp
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-sand-200/80">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-sand-100/72">
              <li>
                <SectionLink
                  to="/#facilities"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  Facilities
                </SectionLink>
              </li>
              <li>
                <SectionLink
                  to="/#rooms"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  Rooms & rates
                </SectionLink>
              </li>
              <li>
                <SectionLink
                  to="/#gallery"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  Gallery
                </SectionLink>
              </li>
              <li>
                <SectionLink
                  to="/#location"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  Location
                </SectionLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-sand-200/80">
              Facilities
            </h4>
            <ul className="space-y-3 text-sm text-sand-100/72">
              <li>
                <Link
                  to="/gym"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  Gym & recovery spa
                </Link>
              </li>
              <li>
                <Link
                  to="/coworking"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  Co-working space
                </Link>
              </li>
              <li>
                <Link
                  to="/restaurant"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  Restaurant
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-sm font-black uppercase tracking-[0.24em] text-sand-200/80">
              Contact & booking
            </h4>
            <div className="space-y-4 text-sm text-sand-100/78">
              <a
                href="https://wa.me/6285337370018"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 hover:border-orange-300/40 hover:bg-white/8"
              >
                <Phone className="mt-0.5 h-4 w-4 text-orange-300" />
                <span>+62 853 3737 0018</span>
              </a>
              <a
                href="mailto:greenhorsetropicagili@gmail.com"
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 hover:border-orange-300/40 hover:bg-white/8"
              >
                <Mail className="mt-0.5 h-4 w-4 text-orange-300" />
                <span>greenhorsetropicagili@gmail.com</span>
              </a>
              <a
                href="https://maps.app.goo.gl/UmacDMEgbeFYMtBDA"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 hover:border-orange-300/40 hover:bg-white/8"
              >
                <MapPin className="mt-0.5 h-4 w-4 text-orange-300" />
                <span>Front of the main harbor, Gili Trawangan</span>
              </a>
            </div>
            <div className="rounded-[1.75rem] border border-orange-300/20 bg-orange-400/10 p-5">
              <p className="text-sm leading-6 text-sand-100/78">
                Prefer an instant reservation path? Use our verified partner
                booking channels.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://www.booking.com/searchresults.html?aid=318615&label=English_Indonesia_EN_ID_28546570705-G6blYurG1wv5nxy_NQuKzQS634117825086%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-209721654025%3Alp9209135%3Ali%3Adec%3Adm%3Aag28546570705%3Acmp340122265&gclid=Cj0KCQjwp7jOBhDGARIsABe7C4cXB2YohEO8EvYbAgGj4TamR4Lc6wFlNYSPl9XaaD_ReQqn5XEldgcaAt9IEALw_wcB&highlighted_hotels=14847588&redirected=1&city=900048659&hlrd=no_dates&source=hotel&expand_sb=1&keep_landing=1&sid=ba5cac4c7dc914ac07d5bb9f004dd73d"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-bold text-sand-900 hover:bg-orange-100"
                >
                  Booking.com
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://www.agoda.com/tropica-gili-hotel/hotel/lombok-id.html?cid=1844104"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-bold text-white hover:border-orange-300/40 hover:bg-white/8"
                >
                  Agoda
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-sand-100/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Tropica Gili Hotel. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <SectionLink to="/#booking" className="hover:text-white">
              Book direct
            </SectionLink>
            <SectionLink to="/#location" className="hover:text-white">
              Open location
            </SectionLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
