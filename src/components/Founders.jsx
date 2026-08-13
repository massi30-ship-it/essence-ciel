// "Meet the Founders" — Aya & Hoda El Kara, with their full bios exactly as
// given in the company profile.
import React from 'react'
import { motion } from 'framer-motion'
import { Placeholder } from './ui.jsx'

const VP = { once: true, amount: 0.15 }
const rise = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }

const FOUNDERS = [
  {
    photo: 'founder-aya', name: 'Aya El Kara', role: 'Co-founder & CEO',
    paras: [
      'As co-founder and CEO of Essence-Ciel, Aya is the brains behind the operation.',
      "After obtaining her Law degree, Aya ventured on an exciting career in events planning in Dubai, UAE, in 2006. It was there that Aya began working on a wide variety of corporate and private events. Aya's tenure in one of Dubai's leading corporations in the implementation of cultural and entertainment activities enabled her to work on a number of famous large-scale events, including the Dubai Shopping Festival (DSF), Dubai Summer Surprises, and Eid in Dubai. It is there that Aya worked on various corporate and private functions, thereby acquiring the skills necessary for managing top-notch, professional, nation-wide events and delivering stellar results under the most challenging work conditions and the tightest deadlines.",
      "In 2011, Aya began studying to obtain her Master's Degree in Event Management at Saint Joseph University in Beirut, the first curriculum of its kind in the MENA region. It is then that she was inspired to found her own company, Essence-Ciel, in an effort to provide clients with the best and most memorable events at competitive prices.",
      'For Aya, Essence-Ciel is more than a business. It is ultimately what she enjoys and is passionate about doing. She is known for her high level of dedication, her attention to detail and her constant search for innovative ideas. Her personal involvement in each and every event ensures that clients and their guests enjoy both a personalized and pleasurable experience.',
    ],
  },
  {
    photo: 'founder-hoda', name: 'Hoda El Kara', role: 'Co-founder & Business Manager',
    paras: [
      'She is the co-founder of Essence-Ciel. As business manager, she takes immense pride in tailor-making impactful experiences for each and every client.',
      "Hoda is a communications professional with extensive experience in event management, public and media relations, marketing and content management. She also holds a Master's Degree in Translation from Saint Joseph University in Beirut.",
      'Having worked in the communications field for over 10 years, Hoda began her career working in multinational Dubai-based PR firms and advertising companies. During this time, she was known for providing quality services to regional clients in the fields of leisure, entertainment, lifestyle, fashion, luxury brands, real estate, technology, FMCG as well as to governmental, non-governmental and international organizations and global agencies and businesses.',
      'In 2011, she co-founded Essence-Ciel with her sister Aya, taking their all-time passion to new heights and creating a powerhouse sister-team dedicated to translating dreams to realities.',
    ],
  },
]

export default function Founders() {
  return (
    <section id="founders" className="bg-black px-6 py-[clamp(80px,13vh,150px)] text-offwhite md:px-8">
      <div className="mx-auto max-w-[1200px] text-center">
        <p className="eyebrow text-gold">Meet the Founders</p>
        <div className="rule-gold mx-auto mt-5 w-24 opacity-70" />
      </div>

      <div className="mx-auto mt-16 max-w-[1160px] space-y-[clamp(60px,10vh,110px)]">
        {FOUNDERS.map((f, i) => (
          <motion.div
            key={f.name}
            variants={rise} initial="hidden" whileInView="show" viewport={VP}
            className={`grid grid-cols-1 items-start gap-[clamp(30px,5vw,70px)] md:grid-cols-[300px_1fr] ${i % 2 ? 'md:[&>.pf]:order-2' : ''}`}
          >
            <div className="pf mx-auto w-full max-w-[320px]">
              <Placeholder name={f.photo} alt={f.name} sizes="320px" className="aspect-[3/4] w-full" />
            </div>
            <div>
              <h3 className="serif text-[clamp(2rem,4vw,3.2rem)] italic text-gold">{f.name}</h3>
              <p className="navcaps mt-2 text-offwhite/60">{f.role}</p>
              <div className="mt-6 space-y-4">
                {f.paras.map((p, j) => (
                  <p key={j} className={`serif text-[clamp(1rem,1.4vw,1.2rem)] leading-relaxed text-offwhite/80 ${j === 0 ? 'italic text-offwhite' : ''}`}>{p}</p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
