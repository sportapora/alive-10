import React from "react";
import Ellipse from "../../../../public/Assets/Images/home_assets/Ellipse.png";
import Hydro from "../../../../public/Assets/Images/home_assets/Copy of maskot 1-02.png";
import Hydra from "../../../../public/Assets/Images/home_assets/Copy of maskot 2-03.png";

export default function LandingHome() {
    return (
        <>
            <div className="bg-[#ED9947] h-screen md:p-0 p-10 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-4 relative items-center top-20 md:top-0 translateY-[-50%] md:left-20">
                    <div className="w-[100%] font-jost text-white text-center md:text-left">
                        <h2 className="text-2xl md:text-5xl">Welcome to</h2>
                        <h1 className="font-modak text-[50px] text-8xl md:text-[170px]">
                            ALIVE 10.0
                        </h1>
                        <h2 className="text-xl md:text-2xl">
                            <b>Harmonize </b>your skin <b>confidence</b> within
                        </h2>
                    </div>
                    <div className="grid relative items-center justify-center">
                        <img src={Ellipse} className="w-[305px] md:w-[710px]" />
                        <div className="absolute left-0 right-0 grid grid-cols-2 justify-center">
                            <img
                                src={Hydro}
                                className="w-[305px] md:w-[710px]"
                            />
                            <img
                                src={Hydra}
                                className="w-[305px] md:w-[710px]"
                            />
                        </div>
                    </div>
                    <div>
                        <svg
                            viewBox="0 0 500 500"
                            preserveAspectRatio="xMinYMin meet"
                            className="relative w-screen "
                        >
                            <path
                                d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
                                className="bg-[#ED9947]"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
}
