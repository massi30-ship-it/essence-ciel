// "Contact" — only the real channels from the profile (Instagram + two phone
// numbers + the three regions). No invented email or street address.
import React from 'react'
import { motion } from 'framer-motion'

const VP = { once: true, amount: 0.25 }

const ROWS = [
  { label: 'Instagram', value: '@essence_ciel_events', href: 'https://instagram.com/essence_ciel_events' },
  { label: 'Phone', value: '+961 3 902 942', href: 'tel:+9613902942' },
  { label: 'Phone', value: '+961 3 849 306', href: 'tel:+9613849306' },
  { label: 'Where', value: 'Lebanon · United Arab Emirates · Egypt' },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-black px-6 py-[clamp(80px,13vh,150px)] text-offwhite md:px-8">
      <div className="mx-auto max-w-[900px] text-center">
        <p className="eyebrow text-gold">Get in Touch</p>
        <h2 className="serif mt-4 text-[clamp(2.2rem,5vw,4rem)] italic">Let's plan your event.</h2>
        <div className="mx-auto mt-10 max-w-[640px]">
          {ROWS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="flex items-center justify-between gap-6 border-t border-white/12 py-5 text-left last:border-b"
            >
              <span className="navcaps text-offwhite/50">{r.label}</span>
              {r.href ? (
                <a href={r.href} target={r.href.startsWith('http') ? '_blank' : undefined} rel="noopener" className="serif text-[clamp(1.1rem,1.8vw,1.5rem)] italic text-offwhite transition-colors hover:text-gold">{r.value}</a>
              ) : (
                <span className="serif text-[clamp(1.1rem,1.8vw,1.5rem)] italic text-offwhite/90">{r.value}</span>
              )}
            </motion.div>
          ))}
        </div>
        <a href="https://instagram.com/essence_ciel_events" target="_blank" rel="noopener" className="btn-caps btn-champagne mt-10 inline-flex">Message us on Instagram</a>
      </div>
    </section>
  )
}
