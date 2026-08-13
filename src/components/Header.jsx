// Two-tier header that compresses into a single slim black bar on scroll.
// Tier 1: white band with the centered SVG wordmark. Tier 2: near-black nav row.
// NAV reflects only real content sections from the company profile.
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Wordmark } from './ui.jsx'

// Bug 1 fix: "Our Story" is part of the NAV array, so it shows on desktop too.
const NAV = [
  { label: 'Who We Are', href: '/#about' },
  { label: 'Founders', href: '/#founders' },
  { label: 'Expertise', href: '/#expertise' },
  { label: 'Where We Operate', href: '/#locations' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClass = 'navcaps whitespace-nowrap pb-1 text-offwhite/75 transition-colors hover:text-gold'

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* Tier 1 — white band with centered wordmark (collapses on scroll) */}
        <div
          className="overflow-hidden bg-cream text-black transition-all duration-500 ease-soft"
          style={{ height: scrolled ? 0 : 'clamp(88px,13vh,132px)', opacity: scrolled ? 0 : 1 }}
        >
          <div className="flex h-full items-center justify-center">
            <Link to="/" aria-label="Essence Ciel — home">
              <Wordmark className="h-[clamp(52px,8vh,80px)] text-black" />
            </Link>
          </div>
        </div>

        {/* Tier 2 — near-black nav bar */}
        <div className="bg-black text-offwhite shadow-[0_10px_30px_-20px_rgba(0,0,0,0.8)]">
          <div className="mx-auto flex h-[60px] max-w-[1500px] items-center gap-6 px-5 md:px-8">
            <Link
              to="/"
              className="serif whitespace-nowrap text-2xl italic text-gold transition-all duration-500"
              style={{ opacity: scrolled ? 1 : 0, width: scrolled ? 'auto' : 0, overflow: 'hidden' }}
            >
              Essence Ciel
            </Link>

            <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex">
              {NAV.map((n) =>
                n.to ? (
                  <Link key={n.label} to={n.to} className={navClass}>{n.label}</Link>
                ) : (
                  <a key={n.label} href={n.href} className={navClass}>{n.label}</a>
                )
              )}
            </nav>

            <div className="ml-auto flex items-center gap-4">
              <a href="/#contact" className="btn-caps btn-champagne hidden !px-6 !py-2.5 sm:inline-flex">Get in Touch</a>
              <button
                aria-label="Menu"
                onClick={() => setOpen((v) => !v)}
                className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden"
              >
                <span className={`h-[1.5px] w-6 bg-current transition-transform duration-300 ${open ? 'translate-y-[6.5px] rotate-45' : ''}`} />
                <span className={`h-[1.5px] w-6 bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
                <span className={`h-[1.5px] w-6 bg-current transition-transform duration-300 ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-1 bg-black px-8 text-offwhite lg:hidden"
          >
            {NAV.map((n) =>
              n.to ? (
                <Link key={n.label} to={n.to} onClick={() => setOpen(false)} className="serif border-b border-white/10 py-3 text-3xl italic text-gold">{n.label}</Link>
              ) : (
                <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="serif border-b border-white/10 py-3 text-3xl italic">{n.label}</a>
              )
            )}
            <a href="/#contact" onClick={() => setOpen(false)} className="btn-caps btn-champagne mt-6 w-max">Get in Touch</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
