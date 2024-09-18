import Navbar from '@/Components/SmallComp/Navbar'
import Footer from '@/Components/SmallComp/Footer'
import React from 'react'
import {Head} from "@inertiajs/react";
import Introduction from '@/Components/Gallery/Introduction'

function Gallery() {
  return (
    <>
        <Head title="Gallery" />
      <div>
        <Navbar />
        <Introduction theme="light" bgimg="bottle"/>
        <Footer />
      </div>
    </>
  )
}

export default Gallery