// "What We Do" — vision, core values, and delivery, verbatim from the profile.
import React from 'react'
import { motion } from 'framer-motion'

const VP = { once: true, amount: 0.2 }
const rise = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }

export default function WhatWeDo() {
  return (
    <section className="bg-black px-6 py-[clamp(80px,13vh,150px)] text-offwhite md:px-8">
      <div className="mx-auto max-w-[860px] text-center">
        <p className="eyebrow text-gold">What We Do</p>
        <div className="rule-gold mx-auto mt-5 w-24 opacity-70" />

        <motion.p variants={rise} initial="hidden" whileInView="show" viewport={VP} className="serif mx-auto mt-9 max-w-[64ch] text-[clamp(1.15rem,2vw,1.7rem)] italic leading-[1.35] text-offwhite">
          Essence-Ciel is a client-centered business whose core values are professionalism, uniqueness, and
          resourcefulness. Its vision is to consistently reinforce and integrate excellence into every event,
          large and small, while setting the business trends and proactively delivering distinctive cultural
          events wherever it operates.
        </motion.p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {['Professionalism', 'Uniqueness', 'Resourcefulness'].map((v) => (
            <span key={v} className="navcaps rounded-full border border-gold/50 px-5 py-2 text-gold">{v}</span>
          ))}
        </div>

        <motion.p variants={rise} initial="hidden" whileInView="show" viewport={VP} className="serif mx-auto mt-10 max-w-[62ch] text-[clamp(1rem,1.4vw,1.2rem)] leading-relaxed text-offwhite/75">
          For over a decade, we have organized flawless festivals, conferences, corporate events, private
          celebrations and CSR activations. We have delivered successful projects to the most challenging and
          selective clientele — comprising individuals, companies, non-governmental and international
          organizations across the MENA region.
        </motion.p>
      </div>
    </section>
  )
}
