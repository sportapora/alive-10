import Navbar from '@/Components/SmallComp/Navbar'
import FooterGallery from '@/Components/SmallComp/FooterGallery.jsx'
import React from 'react'
import {Head} from "@inertiajs/react";
import Introduction from '@/Components/Gallery/Introduction'

function Gallery({photos, path}) {
  return (
    <>
        <Head title="Gallery" />
      <div>
        <Navbar color="orange"/>
        <Introduction theme="dark" bgimg="shelf" photos={photos} path={path}/>
        <FooterGallery />
      </div>
    </>
  )
}

export default Gallery
