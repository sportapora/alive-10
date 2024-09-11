import Division from '@/Components/About/Division'
import LandingAbout from '@/Components/About/LandingAbout'
import MascotAbout from '@/Components/About/MascotAbout'
import Navbar from '@/Components/SmallComp/Navbar'
import React from 'react'
import {Head} from "@inertiajs/react";

function About() {
  return (
    <>
        <Head title="About Us" />
      <div>
        <Navbar />
        <LandingAbout />
        <MascotAbout />
        <Division></Division>
      </div>
    </>
  )
}

export default About
