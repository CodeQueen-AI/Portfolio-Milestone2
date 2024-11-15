import React from 'react'
import Navbar from './Navbar/page'
import Hero from './Hero/page'
import About from './About/page'
import Skills from './Skill/page'
import Projects from './project/page'
import Contact from './Contact/page'

function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>

    </div>
  )
}

export default page
