import React, { useState } from 'react';
import FancyCarousel from 'react-fancy-circular-carousel';
import 'react-fancy-circular-carousel/FancyCarousel.css';
import  DataDivisi  from './DataDivisi';

const images = import.meta.glob('/public/Assets/Images/divisiLogo/*.webp', { eager: true });

const getImageByName = (name) => {
    const path = `/public/Assets/Images/divisiLogo/${name}.webp`;
    return images[path]?.default || images[path] || null;
};

function Carousel() {
    const [focusElement, setFocusElement] = useState(0);

    const imagePaths = DataDivisi.map(item => getImageByName(item.imageName));
    const info = DataDivisi.map(item => item.info);
    const desc = DataDivisi.map(item => item.desc);

    const handleNext = () => {
        setFocusElement((prevFocus) => (prevFocus + 1) % images.length);
    };

    const handlePrev = () => {
        setFocusElement((prevFocus) => (prevFocus - 1 + images.length) % images.length);
    };


    return (
        <>
            <div className="relative h-[900px] top-[-110px] right-[500px] md:block hidden">
                <div className='relative flex flex-row items-center z-20'>
                    <FancyCarousel
                        images={imagePaths}
                        offsetAngle={270}
                        carouselRadius={400}
                        peripheralImageRadius={80}
                        centralImageRadius={0}
                        focusElementStyling={{ border: '5px solid #ba4949' }}
                        autoRotateTime={5}
                        borderWidth={0}
                        borderHexColor={'1c364f'}
                        setFocusElement={setFocusElement}
                        className=''
                    />
                    <div className="text-black relative left-[200px] w-[700px]">
                        <h1 className='text-[40px] font-extrabold font-jost'>{info[focusElement]}</h1>
                        <p className='text-justify'>{desc[focusElement]}</p>
                    </div>
                </div>
                <div className="relative top-[-850px] left-[-100px] w-[900px] h-[900px] border-[6px] border-black rounded-full inset-0 z-10"></div>
            </div>
            <div className='md:hidden block relative left-[-0.2%] top-[-36%]'>
                <div className='relative flex flex-col items-center z-50'>
                    <FancyCarousel
                        images={imagePaths}
                        offsetAngle={180}
                        carouselRadius={290}
                        peripheralImageRadius={50}
                        centralImageRadius={0}
                        focusElementStyling={{ border: '5px solid #ba4949' }}
                        autoRotateTime={5}
                        borderWidth={0}
                        borderHexColor={'1c364f'}
                        setFocusElement={setFocusElement}
                        className=''
                    />
                    <div className="text-black top-[100px] relative left-0 w-[300px]">
                        <h1 className='text-[40px] text-center font-extrabold font-jost'>{info[focusElement]}</h1>
                        <p className='text-left'>{desc[focusElement]}</p>
                    </div>
                </div>
                <div className="relative top-[-700px] left-[-100px] w-[600px] h-[600px] border-[9px] border-black rounded-full inset-0 z-10"></div>
            </div>
        </>
    )
}

export default Carousel;
