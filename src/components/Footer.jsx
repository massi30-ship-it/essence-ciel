// Footer — near-black ground, gold EC monogram, real navigation + real contact
// details from the profile. No invented links, addresses, or emails.
import React from 'react'
import { Link } from 'react-router-dom'
import { CircleMonogram, ChevronDivider } from './ui.jsx'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-black text-offwhite">
      <div className="mx-auto max-w-[1400px] px-6 py-[clamp(50px,8vh,90px)] md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[auto_1fr]">
          <div className="text-gold"><CircleMonogram size={104} className="text-gold" /></div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <h4 className="eyebrow mb-4 text-gold">Explore</h4>
              <a href="/#about" className="block py-1.5 text-[14px] text-offwhite/75 hover:text-gold">Who We Are</a>
              <a href="/#founders" className="block py-1.5 text-[14px] text-offwhite/75 hover:text-gold">Founders</a>
              <a href="/#expertise" className="block py-1.5 text-[14px] text-offwhite/75 hover:text-gold">Expertise</a>
              <a href="/#locations" className="block py-1.5 text-[14px] text-offwhite/75 hover:text-gold">Where We Operate</a>
              <Link to="/our-story" className="block py-1.5 text-[14px] text-offwhite/75 hover:text-gold">Our Story</Link>
              <a href="/#contact" className="block py-1.5 text-[14px] text-offwhite/75 hover:text-gold">Contact</a>
            </div>

            <div>
              <h4 className="eyebrow mb-4 text-gold">Contact</h4>
              <a href="https://instagram.com/essence_ciel_events" target="_blank" rel="noopener" className="block py-1.5 text-[14px] text-offwhite/75 hover:text-gold">@essence_ciel_events</a>
              <a href="tel:+9613902942" className="block py-1.5 text-[14px] text-offwhite/75 hover:text-gold">+961 3 902 942</a>
              <a href="tel:+9613849306" className="block py-1.5 text-[14px] text-offwhite/75 hover:text-gold">+961 3 849 306</a>
            </div>

            <div>
              <h4 className="eyebrow mb-4 text-gold">Where We Operate</h4>
              <p className="text-[14px] leading-relaxed text-offwhite/75">
                Lebanon<br />United Arab Emirates<br />Egypt
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/12 pt-8">
          <span className="serif text-2xl italic text-gold">Essence-Ciel</span>
          <span className="text-[12px] text-offwhite/50">© {year} Essence-Ciel — Event Management. Concept · Event Management · High-end Production.</span>
        </div>
      </div>
      <ChevronDivider color="text-gold" />
    </footer>
  )
}
