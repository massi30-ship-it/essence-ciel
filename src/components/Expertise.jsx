// "Expertise" — the intro plus all eight categories from the profile, with
// every listed event included verbatim. Photos alternate side to side.
import React from 'react'
import { motion } from 'framer-motion'
import { Placeholder } from './ui.jsx'

const VP = { once: true, amount: 0.12 }
const rise = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }

const CATS = [
  {
    title: 'Private Functions', photos: ['private-1', 'private-2', 'private-3'],
    desc: 'Essence-Ciel team enjoys a hands-on expertise in creating and running all types of celebrations and corporate parties. No project is too big or too small: our team is specialized in helping you create a concept that reflects your vision and fulfills your aspirations.',
    events: [],
  },
  {
    title: 'Festivals', photos: ['festival-1', 'festival-3', 'festival-2', 'festival-4'],
    desc: 'After spending a decade creating concepts for the cosmopolitan, fast-paced city of Dubai, Essence-Ciel management team has accumulated a wealth of experience in organizing concerts and national-scale festivals that bring together exotic cultures, native craftsmen and outstanding art in a harmonious rendition of space and substance.',
    events: [
      "‘Baher Ramadan Nights’, United Nations Development Program (UNDP), Tripoli-Lebanon, July 2016",
      'Dubai Shopping Festival (14th edition), Official Launch Event, Dubai-UAE, 2009',
      'Dubai Summer Surprises Signature events: the Collectors Event, Dubai-UAE, 2009',
      'Dubai Summer Surprises: Photography Event, Dubai-UAE, 2009',
      'Dubai Shopping Festival: Al Seef, World Bazar, Dubai-UAE, 2007',
      'Global Nights Ramadan tent, Global Village, Dubai-UAE, 2007',
      "‘Ajjaj’ Launch, Mega Character Production in Modhesh City-Dubai-UAE, 2007",
      'W hotel Ramadan Tent Traditional and cultural acts, in Doha-Qatar, 2012',
      'W hotel Ramadan Tent in Doha-Qatar, 2013',
      'Al Thani Weddings, Grand Hyatt Doha-Qatar, 2010',
      'Al Thani Weddings, Al Rayyan Palace (4,000 invitees), Doha-Qatar, 2010',
      'Global Village, Dubai Shopping Festival-UAE, 2021',
    ],
  },
  {
    title: 'Wedding Celebrations', photos: ['wedding-1', 'wedding-3', 'wedding-2'],
    desc: 'The Essence-Ciel team listens for what truly matters to every couple, ultimately providing them with a remarkable celebration of their Big Day. We create intimate, themed, out-of-the-box and classical wedding celebrations. Our signature weddings are as diverse as our clients, providing them with creative setups and impeccable organization.',
    events: [],
  },
  {
    title: 'Conferences & Public Events', photos: ['conference-1', 'conference-2'],
    desc: '',
    events: [
      'GIZ – Annual Partnership Retreat, Grand Hills Resort, Broumana-Lebanon, 18-23 October 2019',
      'GIZ Qudra - Graduation Ceremony, Antwork, Beirut-Lebanon, 8 July 2019',
      'Memorial of Dr. Kamal Salibi, American University of Beirut, Lebanon, 16 November 2017 and 2018',
      "‘URBICIDE II: Urban Killing & Post War Reconstruction Conference’, American University of Beirut, Lebanon, 6-8 April 2017",
      "‘United Nations Development Programme LHSP Graduation Ceremony’, Platea Jounieh-Lebanon, 26 March 2017",
    ],
  },
  {
    title: 'Corporate Events', photos: ['corporate-1', 'corporate-2', 'corporate-3'],
    desc: '',
    events: [
      "‘The Druze: Celebrating Thousand Years of Diversity’, American University of Beirut, Beirut-Lebanon, 30-31 October 2018",
      "‘Riyadi Club’, Annual Gala Dinner — Champion across Asian, Arab and Lebanese basketball championships, Four Seasons Hotel, Beirut-Lebanon, 20 September 2018",
      "‘Libnen Herzen’, Public Event for MP Fouad Makhzoumi, Seaside Hall in Beirut-Lebanon, 29 April 2018",
      "‘Libnen Herzen’, Electoral List Announcement for MP Fouad Makhzoumi, Kempinski Hotel in Beirut-Lebanon, 19 March 2018",
      "‘Moore Stephens Tabbal STREAM Launch’, Phoenicia Intercontinental Hotel, Beirut-Lebanon, 23 January 2018",
      "‘The Earth Hour Lebanon’ event, first edition, 2015",
      "‘Versace Annual Gathering’, Dubai-UAE, 2008",
      "‘Forum for the Future’, Dubai-UAE, 2008",
      'Jetta Volkswagen car launch in Dubai-UAE, 2010',
    ],
  },
  {
    title: 'Concerts & Musicals', photos: ['concert-1', 'concert-2'],
    desc: '',
    events: [
      'The Four Musketeers concert, a Rahbani Group Production, Dubai-UAE, 2008',
      'Return of the Phoenix Musical, a Rahbani Group Production, Dubai-UAE, 2008',
      "‘Zenobia’ Musical, a Rahbani Group Production, Dubai-UAE, 2007",
    ],
  },
  {
    title: 'Sports Events', photos: ['sports-1', 'sports-2'],
    desc: '',
    events: [
      "‘Riyadi Cares’ Initiative to support Lebanese NGOs, Beirut-Lebanon, 2016-2017",
      'Ansar Football Team Celebration, Beirut-Lebanon, 2023',
      'Ansar Football Academy Graduation, Beirut-Lebanon, 2023',
      'Supporting “AK. Rally Driver” (Ahmad Khaled) Rally Racing Champion in Lebanon, Qatar and Jordan, 2023 and 2024',
    ],
  },
  {
    title: 'Corporate Social Responsibility', photos: ['csr-1', 'csr-award', 'csr-2'],
    desc: '',
    events: [
      'Food parcel Distribution in collaboration with The Kuwaiti Embassy and local influencers, public figures and celebrities post the “Port Blast” in Beirut-Lebanon, July-August 2020',
      'Hilal Ramadan Ceremony, with Badr Foundation (MP Nabil Badr) and Beirut Arab University, Lebanon, 2023',
      "‘Sandouk El Zakat’ Ramadan media campaigns, Dar Al Fatwa Al Lubnaniya, Beirut-Lebanon, 2024",
      "‘Sandouk El Zakat’ official Imams and Mufti Iftars, Dar Al Fatwa Al Lubnaniya, Beirut-Lebanon, 2024",
      "‘Sandouk El Zakat’ Donations Distribution, Dar Al Fatwa Al Lubnaniya, Beirut-Lebanon, 2024",
      "‘Dar Al Aytam Al Islamiyya’ × ‘Badr Foundation’ (MP Nabil Badr) Iftar, Beirut-Lebanon, 2024",
      "‘Al Mawlid Al Nabawi Celebration’ × ‘Badr Foundation’ (MP Nabil Badr), Beirut-Lebanon, 2023",
    ],
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="bg-cream px-6 py-[clamp(80px,13vh,150px)] md:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <p className="eyebrow text-gold-dark">Expertise</p>
          <div className="rule-gold mx-auto mt-5 w-24" />
          <p className="serif mx-auto mt-8 max-w-[68ch] text-[clamp(1.1rem,1.8vw,1.5rem)] italic leading-relaxed text-ink/80">
            The well-seasoned Essence-Ciel co-founders have worked with regional and international brands and
            offered event consultancy, concept creation and activation in various sectors. Besides weddings,
            engagement parties and similar private celebrations, the Essence-Ciel team has worked with
            prestigious partners to deliver an outstanding array of events.
          </p>
          <div className="mx-auto mt-10 grid max-w-[900px] grid-cols-2 gap-4">
            <Placeholder name="expertise-1" alt="A grand themed venue" sizes="(min-width:768px) 45vw, 50vw" mono className="aspect-[4/3]" />
            <Placeholder name="expertise-2" alt="Immersive set design" sizes="(min-width:768px) 45vw, 50vw" mono className="aspect-[4/3]" />
          </div>
        </div>

        <div className="mt-[clamp(50px,9vh,100px)] space-y-[clamp(50px,9vh,100px)]">
          {CATS.map((c, i) => (
            <motion.div
              key={c.title}
              variants={rise} initial="hidden" whileInView="show" viewport={VP}
              className={`grid grid-cols-1 items-start gap-[clamp(24px,4vw,60px)] border-t border-black/10 pt-[clamp(34px,5vh,60px)] md:grid-cols-2 ${i % 2 ? 'md:[&>.ex-media]:order-2' : ''}`}
            >
              {/* photos */}
              <div className="ex-media grid grid-cols-2 gap-3">
                {c.photos.map((n, j) => (
                  <Placeholder
                    key={n} name={n} alt={`${c.title} — Essence-Ciel`}
                    sizes="(min-width:768px) 25vw, 45vw"
                    mono={!(c.title === 'Wedding Celebrations' && j === 0)}
                    className={`aspect-[4/5] ${c.photos.length === 3 && j === 0 ? 'col-span-2 aspect-[16/10]' : ''} ${c.photos.length === 4 && j === 0 ? 'col-span-2 aspect-[16/9]' : ''}`}
                  />
                ))}
              </div>
              {/* text */}
              <div>
                <h3 className="serif text-[clamp(1.8rem,3.6vw,2.8rem)] italic text-gold-dark">{c.title}</h3>
                {c.desc && <p className="serif mt-4 max-w-[52ch] text-[clamp(1rem,1.4vw,1.2rem)] italic leading-relaxed text-ink/70">{c.desc}</p>}
                {c.events.length > 0 && (
                  <ul className="mt-5 space-y-3">
                    {c.events.map((e, k) => (
                      <li key={k} className="relative pl-6 text-[clamp(0.9rem,1.1vw,1.02rem)] leading-snug text-ink/75">
                        <span className="absolute left-0 top-[0.5em] h-2 w-2 rotate-45 bg-gold" />
                        {e}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
