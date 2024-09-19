import Navbar from '@/Components/SmallComp/Navbar'
import FooterGallery from '@/Components/SmallComp/FooterGallery.jsx'
import React from 'react'
import {Head} from "@inertiajs/react";
import Introduction from '@/Components/Gallery/Introduction'

function Gallery() {
  return (
    <>
        <Head title="Gallery" />
      <div>
        <Navbar />
        <Introduction theme="dark" bgimg="shelf"/>
        <FooterGallery />
      </div>
    </>
  )
}

export default Gallery
