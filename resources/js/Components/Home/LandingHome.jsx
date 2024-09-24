import React from "react";

export default function LandingHome() {
    return (
        <div>
            <div className="relative flex flex-col h-screen bg-[#ED9947]">
                <div className="bg-[#ED9947] flex flex-col lg:flex-row gap-4 relative items-center justify-center lg:left-20 flex-auto z-0">
                    <div className="w-screen relative z-40 font-jost text-white text-center lg:text-left">
                        <h2 className="text-2xl lg:text-5xl mb-2">
                            Welcome to
                        </h2>
                        <h1 className="font-modak text-[50px] text-8xl lg:text-[170px]">
                            ALIVE 10.0
                        </h1>
                        <h2 className="relative z-40 text-xl lg:text-2xl">
                            <b>Harmonize </b>Your Skin <b>Confidence</b> Within
                        </h2>
                    </div>
                    <div className="flex flex-row justify-center w-[1050px] z-10">
                        <img
                            src="Assets/Images/home_assets/maskot_merged.png"
                            className="w-[712px] hidden lg:block"
                        />
                        <img
                            src="Assets/Images/home_assets/mobile atas.png"
                            className="w-[400px] block lg:hidden"
                        />
                    </div>
                </div>

                <div className="flex flex-shrink basis-auto flex-col relative z-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 300"
                        className="absolute bottom-0"
                    >
                        <path
                            fill="#EAC09F"
                            fillOpacity="1"
                            d="M0,160L24,176C48,192,96,224,144,224C192,224,240,192,288,176C336,160,384,160,432,138.7C480,117,528,75,576,96C624,117,672,203,720,224C768,245,816,203,864,202.7C912,203,960,245,1008,240C1056,235,1104,181,1152,165.3C1200,149,1248,171,1296,154.7C1344,139,1392,85,1416,58.7L1440,32L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
                        ></path>
                    </svg>
                    <div className="bg-[#EAC09E] flex-grow flex-shrink"></div>
                </div>
            </div>
            <img
                src="Assets/Images/home_assets/Asset_Kanan.png"
                alt="Right Decoration"
                className="absolute top-[380px] right-[-350px] md:right-[-260px] w-[700px] overflow-hidden z-10"
            />
            <img
                src="Assets/Images/home_assets/tube.png"
                alt="Left Decoration"
                className="absolute top-[280px] md:top-[310px] left-[-250px] md:left-[-250px] w-[510px] md:w-[851px] overflow-hidden z-10"
            />
            <img
                src="Assets/Images/home_assets/kiwi.png"
                alt="Kiwi"
                className="absolute top-[0px] md:top-[1700px] left-[0px] md:left-[-170px] w-[0px] md:w-[450px] overflow-hidden z-10"
            />
            <img
                src="Assets/Images/home_assets/bubble 2.png"
                alt="Bubble big"
                className="absolute top-[0px] md:top-[1395px] left-[0px] md:left-[-50px] w-[0px] md:w-[130px] overflow-hidden z-10"
            />
            <img
                src="Assets/Images/home_assets/bubble 2.png"
                alt="Bubble small"
                className="absolute top-[0px] md:top-[1480px] left-[0px] md:left-[20px] w-[0px] md:w-[70px] overflow-hidden z-10"
            />
        </div>
    );
}
