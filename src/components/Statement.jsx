// "Who We Are" — the exact profile intro, in the centered italic-serif pattern.
// Bug 2 fix retained: reveal threshold amount 0.2 so text never stays hidden.
import React from 'react'
import { motion } from 'framer-motion'
import { Placeholder } from './ui.jsx'

const rise = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}
const VP = { once: true, amount: 0.2 }

export default function Statement() {
  return (
    <section id="about" className="relative bg-cream px-6 py-[clamp(80px,14vh,160px)] text-center">
      <div className="relative mx-auto max-w-[880px]">
        <motion.div variants={rise} initial="hidden" whileInView="show" viewport={VP}>
          <p className="eyebrow text-gold-dark">Who We Are</p>
          <div className="rule-gold mx-auto mt-5 w-24" />
        </motion.div>

        <motion.p
          variants={rise} initial="hidden" whileInView="show" viewport={VP}
          className="serif mx-auto mt-8 max-w-[64ch] text-[clamp(1.3rem,2.6vw,2.1rem)] italic leading-[1.3] text-ink"
        >
          Essence-Ciel is a professional event management company specialized in concept creation, event
          management and high-end production. Its dedicated team members have accumulated a wealth of
          12 years of experience in providing clients with custom-made and distinctly creative events in
          Lebanon and beyond.
        </motion.p>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { n: 'team-group', a: 'The Essence-Ciel team' },
          { n: 'hall-lights', a: 'A production-scale event hall' },
          { n: 'decor-greenery', a: 'High-end floral styling' },
        ].map((p, i) => (
          <motion.div key={p.n} variants={rise} initial="hidden" whileInView="show" viewport={VP} transition={{ delay: i * 0.08 }}>
            <Placeholder name={p.n} alt={p.a} sizes="(min-width:640px) 33vw, 100vw" mono className="aspect-[4/3] w-full" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
