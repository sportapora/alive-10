import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import IonIcon from "@reacticons/ionicons"; // library for icons
import Alive from "../../../../public/Assets/Images/alivelogo.png";
import Medic from "../../../../public/Assets/Images/medic_umn.png";

function Navbar({ color }) {
    const Links = [
        { name: "HOME", link: route('home') },
        { name: "ABOUT", link: route('about') },
        { name: "FLOW", link: route('flow') },
        { name: "GALLERY", link: route('gallery') },
    ];

    const [open, setOpen] = useState(false);
    const [navBackground, setNavBackground] = useState("bg-transparent");
    const [textColor, setTextColor] = useState("text-black");

    // Function to dynamically change the navbar color based on the color prop
    const changeNavbarColor = (color) => {
        switch (color) {
            case "orange":
                setNavBackground("bg-[#C97A40] bg-opacity-60 backdrop-blur-md");
                setTextColor("text-white");
                break;
            case "light orange":
                setNavBackground("bg-[#EAC09E] bg-opacity-60 backdrop-blur-md");
                setTextColor("text-white");
                break;
            case "purple":
                setNavBackground("bg-[#B719ED] bg-opacity-60 backdrop-blur-md");
                setTextColor("text-white");
                break;
            default:
                setNavBackground("bg-transparent");
                setTextColor("text-black");
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0 || open) {
                changeNavbarColor(color);  // Use the color prop here
            } else {
                changeNavbarColor("transparent");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [open, color]);

    return (
        <div
            className={`w-[100%] fixed top-0 left-0 z-50 ${navBackground} transition-colors duration-300 z-[99]`}
        >
            <div className="lg:flex items-center justify-between py-1 lg:px-10 px-7">
                <div
                    className={`font-bold text-2xl cursor-pointer flex items-center ${textColor} font-sans`}
                >
                    <span className="text-3xl flex flex-row lg:items-center items-center gap-10 mr-4 lg:pt-0 pt-2">
                        <img
                            src={Medic}
                            alt="logo_medic"
                            className="lg:h-40 w-auto h-20"
                        />
                        <img
                            src={Alive}
                            alt="logo_alive"
                            className="lg:h-20 w-auto h-10"
                        />
                    </span>
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className={`text-3xl absolute right-8 top-9 cursor-pointer lg:hidden ${textColor}`}
                >
                    <IonIcon name={open ? "close" : "menu"}></IonIcon>
                </div>
                <ul
                    className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[-1] left-0
            w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in-out
            ${
                open
                    ? `top-[96px] ${navBackground}`
                    : "top-[-490px] bg-transparent"
            } ${textColor}`}
                >
                    {Links.map((link, index) => (
                        <li
                            key={index}
                            className={`lg:ml-8 text-[16px] hover:text-white lg:my-0 mr-6 my-7 text-center ${textColor}`}
                        >
                            <Link href={link.link} className="backdrop-blur-md">{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
