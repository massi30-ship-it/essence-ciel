// /our-story — the company's origin narrative, told from the profile's own
// facts (founded 2011 by sisters Aya & Hoda El Kara). Bug 2 fix: low reveal
// thresholds so text always fires on desktop and mobile.
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Placeholder, ChevronDivider } from '../components/ui.jsx'
import { ScrollTrigger } from '../lib/gsap.js'

const VP = { once: true, amount: 0.2 }
const rise = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }

const PARAS = [
  'Essence-Ciel was founded in 2011 by Aya and Hoda El Kara — two sisters who turned an all-time shared passion into a professional event management company specialized in concept creation, event management and high-end production.',
  "Aya, our co-founder and CEO, is the brains behind the operation. After obtaining her Law degree, she began an events-planning career in Dubai in 2006, working on famous large-scale events including the Dubai Shopping Festival, Dubai Summer Surprises and Eid in Dubai. In 2011 she studied for her Master's Degree in Event Management at Saint Joseph University in Beirut — the first curriculum of its kind in the MENA region — and it is then that she was inspired to found Essence-Ciel.",
  "Hoda, our co-founder and Business Manager, is a communications professional with extensive experience in event management, public and media relations, marketing and content management, and holds a Master's Degree in Translation from Saint Joseph University in Beirut. Having worked in communications for over 10 years — beginning in multinational Dubai-based PR and advertising firms — she takes immense pride in tailor-making impactful experiences for each and every client.",
  'In 2011, the two sisters joined forces, taking their all-time passion to new heights and creating a powerhouse sister-team dedicated to translating dreams to realities — delivering flawless festivals, conferences, corporate events, private celebrations and CSR activations across Lebanon, the UAE and beyond.',
]

export default function OurStory() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const id = setTimeout(() => ScrollTrigger.refresh(), 500)
    return () => clearTimeout(id)
  }, [])

  return (
    <>
      <Header />
      <main>
        {/* hero */}
        <section className="relative h-[70vh] min-h-[460px] overflow-hidden bg-black">
          <Placeholder name="team-group" alt="The Essence-Ciel team" sizes="100vw" mono rounded="rounded-none" className="absolute inset-0 h-full w-full scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-x-0 bottom-[10%] px-6 text-center md:px-8">
            <p className="eyebrow text-gold">Our Story</p>
            <h1 className="serif mt-4 text-[clamp(2.6rem,8vw,6rem)] italic leading-[1.02] text-offwhite">A powerhouse sister-team</h1>
          </motion.div>
        </section>

        {/* founding narrative */}
        <section className="bg-cream px-6 py-[clamp(80px,14vh,170px)] text-center">
          <div className="mx-auto max-w-[780px]">
            <motion.h2 variants={rise} initial="hidden" whileInView="show" viewport={VP} className="serif text-[clamp(2rem,5vw,3.6rem)] italic leading-[1.08] text-gold-dark">
              Founded in 2011 by two sisters.
            </motion.h2>
            <div className="rule-gold mx-auto mt-6 w-24" />
            {PARAS.map((p, i) => (
              <motion.p key={i} variants={rise} initial="hidden" whileInView="show" viewport={VP} className="serif mx-auto mt-6 max-w-[66ch] text-[clamp(1.05rem,1.6vw,1.35rem)] italic leading-relaxed text-ink/70">
                {p}
              </motion.p>
            ))}
          </div>
        </section>

        <ChevronDivider color="text-gold" />

        {/* founder portraits */}
        <section className="bg-black px-6 py-[clamp(60px,10vh,110px)] md:px-8">
          <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              { n: 'founder-aya', name: 'Aya El Kara', role: 'Co-founder & CEO' },
              { n: 'founder-hoda', name: 'Hoda El Kara', role: 'Co-founder & Business Manager' },
            ].map((f) => (
              <motion.div key={f.n} variants={rise} initial="hidden" whileInView="show" viewport={VP} className="text-center">
                <Placeholder name={f.n} alt={f.name} sizes="(min-width:640px) 45vw, 100vw" className="aspect-[3/4] w-full" />
                <h3 className="serif mt-4 text-[clamp(1.5rem,3vw,2.2rem)] italic text-gold">{f.name}</h3>
                <p className="navcaps mt-1 text-offwhite/55">{f.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <ChevronDivider color="text-gold" />

        {/* closing — the profile's sign-off */}
        <section className="grid min-h-[54vh] place-items-center bg-cream px-6 text-center">
          <motion.h2 variants={rise} initial="hidden" whileInView="show" viewport={VP} className="serif mx-auto max-w-[22ch] text-[clamp(2rem,5vw,4rem)] italic text-ink">
            Thank you for taking this journey with us… that was Essence-Ciel.
          </motion.h2>
        </section>
      </main>
      <Footer />
    </>
  )
}
