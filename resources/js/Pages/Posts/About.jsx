import LandingAbout from '@/Components/About/LandingAbout'
import MascotAbout from '@/Components/About/MascotAbout'
import Navbar from '@/Components/SmallComp/Navbar'
import React from 'react'

function About() {
  return (
    <>
      <div>
        <Navbar />
        <LandingAbout />
        <MascotAbout />
      </div>
    </>
  )
}

export default About