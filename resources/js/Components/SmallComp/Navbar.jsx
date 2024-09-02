import React, { useState, useEffect, useRef } from "react";
import { Link } from "@inertiajs/react";
import IonIcon from "@reacticons/ionicons"; // library untuk icon
import Alive from "../../../../public/Assets/Images/alivelogo.png";
import Medic from "../../../../public/Assets/Images/medic_umn.png";

function Navbar() {
    const Links = [
        { name: "HOME", link: "/" },
        { name: "ABOUT", link: "/about" },
        { name: "FLOW", link: "/flow" },
        {
            name: "GALLERY",
            subLinks: [
                { name: "Rapat Pleno 1", link: "/gallery/pleno1" },
                { name: "Rapat Pleno 2", link: "/gallery/pleno2" },
                { name: "Rapat Pleno 2", link: "/gallery/dokumentasi" },
                { name: "Booth", link: "/gallery/dokumentasi" },
                { name: "Workshop", link: "/gallery/dokumentasi" },
                { name: "Talkshow", link: "/gallery/dokumentasi" },
            ],
        },
    ];

    const [open, setOpen] = useState(false);
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [navBackground, setNavBackground] = useState("bg-transparent");
    const [textColor, setTextColor] = useState("text-black");

    const galleryRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0 || open) {
                setNavBackground("bg-[#C97A40] bg-opacity-60");
                setTextColor("text-white");
            } else {
                setNavBackground("bg-transparent");
                setTextColor("text-black");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [open]);

    useEffect(() => {
        if (galleryOpen) {
            galleryRef.current.style.height = `${galleryRef.current.scrollHeight}px`;
            galleryRef.current.style.opacity = "1";
        } else {
            galleryRef.current.style.height = "0px";
            galleryRef.current.style.opacity = "0";
        }
    }, [galleryOpen]);

    return (
        <div
            className={`w-[100%] fixed top-0 left-0 z-50 ${navBackground} transition-colors duration-300`}
        >
            <div className="md:flex items-center justify-between py-1 md:px-10 px-7">
                <div
                    className={`font-bold text-2xl cursor-pointer flex items-center ${textColor} font-sans`}
                >
                    <span className="text-3xl flex flex-row md:items-center items-center gap-10 mr-4 md:pt-0 pt-2">
                        <img
                            src={Medic}
                            alt="logo_medic"
                            className="md:h-40 w-auto h-20"
                        />
                        <img
                            src={Alive}
                            alt="logo_alive"
                            className="md:h-20 w-auto h-10"
                        />
                    </span>
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className={`text-3xl absolute right-8 top-9 cursor-pointer md:hidden ${textColor}`}
                >
                    <IonIcon name={open ? "close" : "menu"}></IonIcon>
                </div>
                <ul
                    className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0
            w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
            ${
                open
                    ? `top-[96px] ${navBackground}`
                    : "top-[-490px] bg-transparent"
            } ${textColor}`}
                >
                    <li className="md:ml-8 mr-6 md:my-0 my-7 text-center">
                        <Link href={Links[0].link} className="hover:text-white">
                            {/* <button
                                className={`rounded-full px-5 py-1 focus:outline-none focus:ring-4 focus:ring-blue-300 ${textColor}`}
                            > */}
                            {Links[0].name}
                            {/* </button> */}
                        </Link>
                    </li>
                    {Links.slice(1).map((link, index) => (
                        <li
                            key={link.name}
                            className={`md:ml-8 text-[16px] hover:text-white md:my-0 mr-6 my-7 text-center ${textColor}`}
                        >
                            {link.subLinks ? (
                                <>
                                    <div
                                        className="flex items-center justify-center cursor-pointer"
                                        onClick={() =>
                                            setGalleryOpen(!galleryOpen)
                                        }
                                    >
                                        {link.name}{" "}
                                        <IonIcon
                                            name={
                                                galleryOpen
                                                    ? "chevron-up"
                                                    : "chevron-down"
                                            }
                                            className="ml-2"
                                        ></IonIcon>
                                    </div>
                                    <ul
                                        ref={galleryRef}
                                        className={`overflow-hidden transition-all duration-500 ease-in-out opacity-0 h-0`}
                                    >
                                        {link.subLinks.map(
                                            (subLink, subIndex) => (
                                                <li
                                                    key={subIndex}
                                                    className="hover:text-gray-500"
                                                >
                                                    <Link href={subLink.link}>
                                                        {subLink.name}
                                                    </Link>
                                                    {/* <a href={subLink.link}>
                                                      {subLink.name}
                                                  </a> */}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </>
                            ) : (
                                <Link href={link.link}>{link.name}</Link>
                                // <a href={Link.link}>{Link.name}</a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
