import React from "react";

export default function AboutHome() {
    return (
        <>
            <div className="flex flex-col lg:flex-row h-screen bg-[#EAC09E] flex-wrap content-center justify-center">
                <div className="flex justify-center">
                    <img
                        src="Assets/Images/home_assets/logo alive-04.png"
                        className="w-[108px] lg:w-[369px] h-[100%] object-contain"
                    />
                </div>
                <div className="flex flex-col gap-5 justify-between bg-[#E8E8E8] font-jost p-8 mt-10 lg:mt-0 mx-20 w-[80%] lg:w-[54%] rounded-[63px] mb-5">
                    <h2 className="font-extrabold text-4xl">
                        About Alive 10.0
                    </h2>
                    <p className="font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <div className="w-full flex justify-center lg:justify-normal">
                        <button className="bg-[#ED9948] w-[177px] font-normal mt-10 rounded-xl">
                            read more
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
