import { Menu, Sparkles, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

import SectionLink from '@/src/components/SectionLink'
import { cn } from '@/src/lib/utils'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'Facilities', href: '/#facilities' },
  { name: 'Rooms', href: '/#rooms' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Location', href: '/#location' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname, location.hash])

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full border-b transition-all duration-300',
        scrolled
          ? 'border-sand-200/80 bg-sand-50/88 py-2.5 shadow-[0_14px_42px_-32px_rgba(74,63,53,0.42)] backdrop-blur-xl'
          : 'border-transparent bg-sand-50/72 py-3.5 backdrop-blur-md',
      )}
    >
      <div className="container mx-auto flex items-center justify-between gap-4 px-4">
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-3 rounded-[1.75rem] px-1 py-1"
          aria-label="Go to Tropica Gili Hotel homepage"
        >
          <div className="flex items-center justify-center rounded-3xl bg-white px-3 py-2 shadow-[0_18px_40px_-28px_rgba(255,107,53,0.5)] ring-1 ring-sand-200/90 transition-all group-hover:-translate-y-0.5 group-hover:shadow-[0_24px_56px_-30px_rgba(255,107,53,0.46)]">
            <img
              src="/assets/img/tropicalogo.png"
              alt="Tropica Gili Hotel logo"
              className="h-11 w-auto object-contain sm:h-13"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-black uppercase leading-none tracking-wide text-sand-900 sm:text-base">
              Tropica Gili Hotel
            </div>
            <div className="mt-1 truncate text-[11px] font-bold uppercase tracking-[0.24em] text-orange-600 sm:text-xs">
              Stay, Work, Recover
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-sand-200/80 bg-white/88 p-1.5 shadow-[0_18px_40px_-36px_rgba(74,63,53,0.5)] md:flex">
          {navLinks.map((link) => (
            <SectionLink
              key={link.name}
              to={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-sand-700 hover:bg-sand-100 hover:text-sand-900"
            >
              {link.name}
            </SectionLink>
          ))}
          <SectionLink
            to="/#booking"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-extrabold text-white shadow-[0_18px_30px_-20px_rgba(255,107,53,0.85)] hover:bg-orange-600"
          >
            <Sparkles className="h-4 w-4" />
            Book Now
          </SectionLink>
        </div>

        <button
          type="button"
          className="rounded-2xl border border-sand-200/80 bg-white/92 p-2.5 text-sand-700 shadow-[0_12px_28px_-24px_rgba(74,63,53,0.55)] hover:text-sand-900 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[76px] bg-sand-900/18 backdrop-blur-[2px] md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              className="absolute left-0 top-full w-full px-4 pb-4 md:hidden"
            >
              <div className="surface-card overflow-hidden p-4">
                <div className="mb-3 px-2 text-xs font-bold uppercase tracking-[0.28em] text-sand-400">
                  Explore Tropica Gili
                </div>
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <SectionLink
                      key={link.name}
                      to={link.href}
                      onNavigate={() => setIsOpen(false)}
                      className="rounded-2xl px-4 py-3 text-base font-semibold text-sand-700 hover:bg-sand-100 hover:text-sand-900"
                    >
                      {link.name}
                    </SectionLink>
                  ))}
                </div>
                <SectionLink
                  to="/#booking"
                  onNavigate={() => setIsOpen(false)}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-5 py-4 text-base font-extrabold text-white shadow-[0_18px_30px_-20px_rgba(255,107,53,0.85)] hover:bg-orange-600"
                >
                  <Sparkles className="h-4 w-4" />
                  Book Your Stay
                </SectionLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
