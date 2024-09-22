import React from "react";

export default function LandingHome() {

    return (
        <div className="overflow-hidden">
            <div className="flex flex-col h-screen overflow-hidden bg-[#ED9947]">
                <div className="bg-[#ED9947] grid md:grid-cols-2 gap-4 relative items-center top-20 md:top-[30%] translateY-[-50%] md:left-20 flex-grow flex-shrink basis-auto z-0">
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
                        <img
                            src="/Assets/Images/home_assets/Ellipse.png"
                            className="w-[305px] md:w-[400px]"
                            alt="Ellipse"
                        />
                        <div className="absolute left-0 right-0 grid grid-cols-1 justify-center z-10">
                            <img src="Assets/Images/home_assets/maskot merged.png" alt="Maskot" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-auto flex-col relative z-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
                        <path
                            fill="#EAC09F"
                            fillOpacity="1"
                            d="M0,160L24,176C48,192,96,224,144,224C192,224,240,192,288,176C336,160,384,160,432,138.7C480,117,528,75,576,96C624,117,672,203,720,224C768,245,816,203,864,202.7C912,203,960,245,1008,240C1056,235,1104,181,1152,165.3C1200,149,1248,171,1296,154.7C1344,139,1392,85,1416,58.7L1440,32L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
                        ></path>
                    </svg>
                    <div className="bg-[#EAC09E] flex-grow p-0"></div>
                </div>
            </div>
            <img src="Assets/Images/home_assets/Asset_Kanan.png" alt="Right Decoration" className="absolute top-[250px] right-[-150px] w-80 overflow-hidden z-20"/>
        </div>
    );
}