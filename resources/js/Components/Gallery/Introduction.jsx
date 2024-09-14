import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
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

    return (
        <div className={`min-h-[120vh] flex flex-col justify-center items-center p-8 ${bgColor} text-white font-sans`}>
            <div className="flex flex-col items-center text-center mt-20">
                <header>
                    <div className="text-4xl mt-2">GALLERY</div>
                    <div className="text-lg mt-2">Harmonize Your Skin Confidence Within</div>
                </header>
            </div>

            <nav className="w-full flex justify-between items-center mt-8 mb-8 px-8">
                <a href="/gallery/pleno1" className="text-white no-underline text-lg px-4 py-2 flex-1 text-center">Pleno 1</a>
                <a href="/gallery/pleno2" className="text-white no-underline text-lg px-4 py-2 flex-1 text-center">Pleno 2</a>
                <a href="/gallery/pleno3" className="text-white no-underline text-lg px-4 py-2 flex-1 text-center">Pleno 3</a>
                <a href="/gallery/booth" className="text-white no-underline text-lg px-4 py-2 flex-1 text-center">Booth</a>
                <a href="/gallery/workshop" className="text-white no-underline text-lg px-4 py-2 flex-1 text-center">Workshop</a>
                <a href="/gallery/talkshow" className="text-white no-underline text-lg px-4 py-2 flex-1 text-center">Talkshow</a>
            </nav>
            
            <div className="flex justify-center w-full h-auto mt-8">
    {/* Wrapper div to handle centering */}
    <div
        className="grid grid-cols-3 gap-4 h-[110vh] w-full justify-items-center"
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
                className="relative w-[300px] h-[200px] bg-cover bg-center mt-8"
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
