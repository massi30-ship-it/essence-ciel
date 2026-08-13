// Brand badge — the SVG wordmark inside a thin gold-bordered lockup with the
// company's real tagline. (No invented venue description.)
import React from 'react'
import { motion } from 'framer-motion'
import { Wordmark } from './ui.jsx'

const VP = { once: true, amount: 0.2 }

export default function LogoBadgeSection() {
  return (
    <section className="relative bg-cream px-6 py-[clamp(70px,12vh,150px)] text-center">
      <div className="relative mx-auto max-w-[720px]">
        <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <div className="mx-auto inline-flex flex-col items-center rounded-[6px] border border-gold px-[clamp(30px,6vw,72px)] py-[clamp(26px,5vh,52px)]">
            <Wordmark className="w-[clamp(220px,42vw,340px)] text-black" sub="Event Management" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="serif mx-auto mt-9 max-w-[54ch] text-[clamp(1.1rem,1.8vw,1.5rem)] italic leading-relaxed text-ink/70"
        >
          Concept creation · Event management · High-end production.
        </motion.p>
      </div>
    </section>
  )
}
