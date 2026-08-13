// Hero — full-bleed monochrome photo, near-black gradient, real tagline drawn
// straight from the profile (no invented copy).
import React, { useLayoutEffect, useRef } from 'react'
import { Placeholder } from './ui.jsx'
import { gsap, prefersReducedMotion } from '../lib/gsap.js'

export default function Hero() {
  const root = useRef(null)
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return
    const ctx = gsap.context((self) => {
      gsap.to(self.selector('.hero-bg')[0], {
        yPercent: 16, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to(self.selector('.hero-panel')[0], {
        opacity: 0, y: -30, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'center top', end: 'bottom top', scrub: true },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative h-[92vh] min-h-[560px] overflow-hidden bg-black">
      <div className="hero-bg absolute inset-0 scale-110">
        <Placeholder name="private-2" alt="An Essence-Ciel production" sizes="100vw" mono rounded="rounded-none" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

      <div className="hero-panel absolute inset-x-0 bottom-[10%] px-6 text-center md:px-8">
        <p className="eyebrow text-gold">Event Management · Since 2011</p>
        <h1 className="serif mx-auto mt-5 max-w-[18ch] text-[clamp(2.6rem,8vw,6rem)] italic leading-[1.02] text-offwhite">
          Custom-made, distinctly creative events.
        </h1>
        <p className="serif mx-auto mt-5 max-w-[60ch] text-[clamp(1.05rem,1.6vw,1.35rem)] italic text-offwhite/80">
          Concept creation, event management and high-end production — in Lebanon and beyond.
        </p>
      </div>
    </section>
  )
}
