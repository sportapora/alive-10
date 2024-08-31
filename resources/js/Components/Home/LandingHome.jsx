import React from "react";
import Ellipse from "../../../../public/Assets/Images/home_assets/Ellipse.png";
import Hydro from "../../../../public/Assets/Images/home_assets/Copy of maskot 1-02.png";
import Hydra from "../../../../public/Assets/Images/home_assets/Copy of maskot 2-03.png";
import Maskot from "../../../../public/Assets/Images/home_assets/maskot merged.png";
import Jeruk from "../../../../public/Assets/Images/home_assets/jeruk.png";

export default function LandingHome() {
    return (
        <>
            <div className="bg-[#ED9947] h-screen md:p-0 p-10 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-4 relative items-center top-20 md:top-[30%] translateY-[-50%] md:left-20">
                    <div className="w-[100%] font-jost text-white text-center md:text-left">
                        <h2 className="text-2xl md:text-5xl">Welcome to</h2>
                        <h1 className="font-modak text-[50px] text-8xl md:text-[170px]">
                            ALIVE 10.0
                        </h1>
                        <h2 className="text-xl md:text-2xl">
                            <b>Harmonize </b>Your Skin <b>Confidence</b> Within
                        </h2>
                    </div>
                    <div className="grid relative items-center justify-center z-10">
                        <img src={Ellipse} className="w-[305px] md:w-[400px]" />
                        <div className="absolute left-0 right-0 grid grid-cols-1 justify-center">
                            <img src={Maskot} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
