// "Where We Are Located" — the three countries from the profile, with the
// profile's own note that projects also span the wider region.
import React from 'react'
import { motion } from 'framer-motion'

const VP = { once: true, amount: 0.2 }
const COUNTRIES = ['Lebanon', 'United Arab Emirates', 'Egypt']

export default function WhereWeOperate() {
  return (
    <section id="locations" className="bg-cream px-6 py-[clamp(70px,12vh,140px)] text-center md:px-8">
      <p className="eyebrow text-gold-dark">Where We Are Located</p>
      <div className="rule-gold mx-auto mt-5 w-24" />
      <div className="mx-auto mt-12 grid max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-3">
        {COUNTRIES.map((c, i) => (
          <motion.div
            key={c}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="border border-black/10 py-12"
          >
            <span className="serif text-[clamp(1.6rem,3vw,2.4rem)] italic text-ink">{c}</span>
          </motion.div>
        ))}
      </div>
      <p className="serif mx-auto mt-10 max-w-[60ch] text-[clamp(1rem,1.4vw,1.2rem)] italic text-ink/60">
        Our work spans national and international events, grand openings, product and brand launches and gala
        dinners in Lebanon, UAE and Qatar.
      </p>
    </section>
  )
}
