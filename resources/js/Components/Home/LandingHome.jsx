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
            <div className="bg-[#ED9948]">
                <svg
                    viewBox="0 0 1437 518"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-screen"
                >
                    <path
                        d="M2 426.735C44 462.858 148 530.976 228 514.462C328 493.821 406 444.797 486 444.797C550 444.797 691.333 432.756 754 426.735H1436V1C1392.67 7.88057 1278.4 42.2834 1168 124.85C1030 228.059 954 333.848 898 328.687C842 323.527 762 222.898 688 228.059C614 233.219 454 426.735 354 426.735H2Z"
                        fill="#EAC09E"
                    />
                    <path
                        d="M2 426.735C44 462.858 148 530.976 228 514.462C328 493.821 406 444.797 486 444.797C550 444.797 691.333 432.756 754 426.735H1436V1C1392.67 7.88057 1278.4 42.2834 1168 124.85C1030 228.059 954 333.848 898 328.687C842 323.527 762 222.898 688 228.059C614 233.219 454 426.735 354 426.735M2 426.735C86 426.735 274 426.735 354 426.735M2 426.735H354"
                        stroke="#EAC09E"
                    />
                </svg>

                <svg
                    viewBox="0 0 389 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[22rem] relative top-[-5.584rem]"
                >
                    <path
                        d="M179.705 69.2781C107.823 81.1525 29.9509 28.707 0 1H388C348.519 18.8117 251.587 57.4036 179.705 69.2781Z"
                        fill="#ED9948"
                        stroke="#ED9948"
                    />
                </svg>
            </div>
            <div className="bg-[#EAC09E]"></div>
        </>
    );
}
