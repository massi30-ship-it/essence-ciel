// Home page — every section carries only real content from the company
// profile. Photos are used across Hero, Who We Are, Founders and Expertise
// (all 29 supplied images appear across the site).
import React, { useEffect } from 'react'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Statement from '../components/Statement.jsx'       // Who We Are
import WhatWeDo from '../components/WhatWeDo.jsx'
import Founders from '../components/Founders.jsx'
import WhereWeOperate from '../components/WhereWeOperate.jsx'
import Expertise from '../components/Expertise.jsx'
import LogoBadgeSection from '../components/LogoBadgeSection.jsx'
import Contact from '../components/Contact.jsx'
import ClosingStatement from '../components/ClosingStatement.jsx'
import Footer from '../components/Footer.jsx'
import { ScrollTrigger } from '../lib/gsap.js'

export default function Home() {
  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 500)
    return () => clearTimeout(id)
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statement />
        <WhatWeDo />
        <Founders />
        <WhereWeOperate />
        <Expertise />
        <LogoBadgeSection />
        <Contact />
        <ClosingStatement />
      </main>
      <Footer />
    </>
  )
}
