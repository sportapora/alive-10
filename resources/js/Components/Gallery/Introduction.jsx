import React from 'react';
import { useMediaQuery } from 'react-responsive';
import BSBig from "../../../../public/Assets/Images/gallery/bookshelfBig.png";
import BottleBig from "../../../../public/Assets/Images/gallery/botolBig.png";

const Introduction = ({ theme, bgimg }) => {
    const bgColor = theme === 'dark' ? 'bg-[#ed9948]' : 'bg-[#eac09e]';
    const bgImg = bgimg === 'shelf' ? BSBig : BottleBig;

    // Sample photo URLs for gallery items
    const photos = [
        'https://via.placeholder.com/300', // Replace with actual image URLs
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300'
    ];

    // Use media query to detect if the screen width is mobile size
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <div className={`min-h-[120vh] flex flex-col justify-center items-center p-8 ${bgColor} text-white font-sans`}>
            <div className="flex flex-col items-center text-center mt-20">
                <header>
                    <div className="text-3xl md:text-4xl mt-2">GALLERY</div>
                    <div className="text-base md:text-lg mt-2">Harmonize Your Skin Confidence Within</div>
                </header>
            </div>

            {isMobile ? (
                // Dropdown for mobile view
                <select
                    className="w-full max-w-xs mt-8 mb-8 px-4 py-2 text-sm md:text-lg bg-[#ed9948] text-white"
                    onChange={(e) => {
                        if (e.target.value) {
                            window.location.href = e.target.value;
                        }
                    }}
                >
                    <option value="" disabled selected>Pilih Galeri</option>
                    <option value="/gallery/pleno1">Pleno 1</option>
                    <option value="/gallery/pleno2">Pleno 2</option>
                    <option value="/gallery/pleno3">Pleno 3</option>
                    <option value="/gallery/booth">Booth</option>
                    <option value="/gallery/workshop">Workshop</option>
                    <option value="/gallery/talkshow">Talkshow</option>
                </select>
            ) : (
                // Navigation links for larger screens
                <nav className="w-full flex flex-wrap justify-center md:justify-between items-center mt-8 mb-8 px-4 md:px-8">
                    <a href="/gallery/pleno1" className="text-white no-underline text-sm md:text-lg px-2 md:px-4 py-2 flex-1 text-center">Pleno 1</a>
                    <a href="/gallery/pleno2" className="text-white no-underline text-sm md:text-lg px-2 md:px-4 py-2 flex-1 text-center">Pleno 2</a>
                    <a href="/gallery/pleno3" className="text-white no-underline text-sm md:text-lg px-2 md:px-4 py-2 flex-1 text-center">Pleno 3</a>
                    <a href="/gallery/booth" className="text-white no-underline text-sm md:text-lg px-2 md:px-4 py-2 flex-1 text-center">Booth</a>
                    <a href="/gallery/workshop" className="text-white no-underline text-sm md:text-lg px-2 md:px-4 py-2 flex-1 text-center">Workshop</a>
                    <a href="/gallery/talkshow" className="text-white no-underline text-sm md:text-lg px-2 md:px-4 py-2 flex-1 text-center">Talkshow</a>
                </nav>
            )}

            <div className="flex justify-center w-full h-auto mt-8">
                {/* Wrapper div to handle centering */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full justify-items-center"
                    style={{
                        backgroundColor: bgImg ? 'transparent' : 'black',
                        backgroundImage: bgImg ? `url(${bgImg})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Render gallery photos */}
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className="relative w-[90vw] h-[200px] sm:w-[250px] md:w-[300px] bg-cover bg-center mt-8 mb-8"
                            style={{ backgroundImage: `url(${photo})` }}
                        >
                            {/* You can add overlay or other content here if needed */}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Introduction;
