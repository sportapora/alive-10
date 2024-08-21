import IonIcon from '@reacticons/ionicons';
import React, { useState, useEffect } from 'react';
import Alive from '../../../../public/Assets/Images/alivelogo.png';
import Medic from '../../../../public/Assets/Images/medic_umn.png';

function Navbar() {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "FLOW", link: "/" },
    { name: "GALLERY", link: "/" },
  ];

  let [open, setOpen] = useState(false);
  let [navBackground, setNavBackground] = useState('bg-transparent');
  let [textColor, setTextColor] = useState('text-black');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 || open) {
        setNavBackground('bg-[#EAC09E] bg-opacity-60');
        setTextColor('text-black');
      } else {
        setNavBackground('bg-transparent');
        setTextColor('text-black');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [open]);

  return (
    <div className={`w-[100%] fixed top-0 left-0 z-50 ${navBackground} transition-colors duration-300`}>
      <div className="md:flex items-center justify-between py-1 md:px-10 px-7">
        <div className={`font-bold text-2xl cursor-pointer flex items-center ${textColor} font-sans`}>
          <span className='text-3xl flex flex-row md:items-center items-center gap-10 mr-4 md:pt-0 pt-2'>
            <img src={Medic} alt="logo_medic" className='md:h-40 w-auto h-20' />
            <img src={Alive} alt="logo_alive" className='md:h-20 w-auto h-10' />
          </span>
        </div>
        <div onClick={() => setOpen(!open)} className={`text-3xl absolute right-8 top-9 cursor-pointer md:hidden ${textColor}`}>
          <IonIcon name={open ? 'close' : 'menu'}></IonIcon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0
            w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
            ${open ? `top-[96px] ${navBackground}` : 'top-[-490px] bg-transparent'} ${textColor}`}>
          <li className="md:ml-8 mr-6 md:my-0 my-7 text-center">
            <a href={Links[0].link}>
              <button className={`rounded-full px-5 py-1 focus:outline-none focus:ring-4 focus:ring-blue-300 ${textColor}`}>{Links[0].name}</button>
            </a>
          </li>
          {
            Links.map((Link, index) => (
              <li key={Link.name} className={`md:ml-8 text-[16px] hover:text-gray-300 md:my-0 mr-6 my-7 text-center ${index === 0 ? 'hidden' : 'block'} ${textColor}`}>
                <a href={Link.link}>{Link.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
