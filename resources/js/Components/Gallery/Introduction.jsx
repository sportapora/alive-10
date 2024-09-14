import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import BSBig from "../../../../public/Assets/Images/gallery/bookshelfBig.png";
import BottleBig from "../../../../public/Assets/Images/gallery/botolBig.png";

const Introduction = ({ theme, bgimg }) => {
    const bgColor = theme === 'dark' ? 'bg-[#ed9948]' : 'bg-[#eac09e]';
    const bgImg = bgimg === 'shelf' ? BSBig : BottleBig;

    return (
        <div className={`min-h-[120vh] flex flex-col justify-center items-center p-8 ${bgColor} text-white font-sans`}>
            <div className="flex flex-col items-center text-center mt-20">
                <header>
                    <div className="text-4xl mt-2">GALLERY</div>
                    <div className="text-lg mt-2">Harmonize Your Skin Confidence Within</div>
                </header>
            </div>

            <nav className="w-full flex justify-between items-center mt-8 mb-8 px-8">
                <InertiaLink href="/gallery/pleno1" className="text-white no-underline text-lg px-4 py-2 flex-1 text-center">Pleno 1</InertiaLink>
                <InertiaLink href="/gallery/pleno2" className="text-white no-underline text-lg px-4 py-2 flex-1 text-center">Pleno 2</InertiaLink>
                <InertiaLink href="/gallery/pleno3" className="text-white no-underline text-lg px-4 py-2 flex-1 text-center">Pleno 3</InertiaLink>
                <InertiaLink href="/gallery/booth" className="text-white no-underline text-lg px-4 py-2 flex-1 text-center">Booth</InertiaLink>
                <InertiaLink href="/gallery/workshop" className="text-white no-underline text-lg px-4 py-2 flex-1 text-center">Workshop</InertiaLink>
                <InertiaLink href="/gallery/talkshow" className="text-white no-underline text-lg px-4 py-2 flex-1 text-center">Talkshow</InertiaLink>
            </nav>

            <div
                className="grid grid-cols-3 gap-4 w-full h-[110vh] mt-8"
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Any other content you want in the grid */}
            </div>
        </div>
    );
};

export default Introduction;
