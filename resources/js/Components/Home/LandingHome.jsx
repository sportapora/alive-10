import React from "react";

export default function LandingHome() {
    return (
        <>
            <div className="bg-[#ED9947] h-screen md:p-0 p-10 overflow-hidden">
                <div className="grid grid-cols-2 gap-4 absolute top-[50%] left-20 translate-y-[-50%]">
                    <div className="font-jost text-white">
                        <h2 className="text-5xl md:text-2xl">Welcome to</h2>
                        <h1 className="font-modak text-[50px] text-9xl md:text-7xl">ALIVE 10.0</h1>
                        <h2 className="font-bold text-2xl md:text-xl">
                            <b>Harmonize </b>your skin <b>confidence</b> within
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}
