// Closing — the profile's own sign-off line, framed by gold chevron dividers.
import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDivider } from './ui.jsx'

export default function ClosingStatement() {
  return (
    <section className="bg-cream">
      <ChevronDivider color="text-gold" />
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="serif mx-auto max-w-[22ch] px-6 py-[clamp(70px,12vh,150px)] text-center text-[clamp(2.2rem,5.5vw,4.6rem)] italic leading-[1.08] text-ink"
      >
        Thank you for taking this journey with us… that was Essence-Ciel.
      </motion.h2>
      <ChevronDivider color="text-gold" />
    </section>
  )
}
