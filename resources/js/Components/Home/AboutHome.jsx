import React from "react";

export default function AboutHome() {
    return (
        <>
            <div className="flex flex-col md:flex-row bg-[#EAC09E]">
                <div className="flex justify-around">
                    <img
                        src="Assets/Images/home_assets/logo alive-04.png"
                        className="w-[108px] md:w-[369px] h-[100%] object-contain"
                    />
                </div>
                <div className="bg-[#E8E8E8] p-8 w-[239px] md:h-[450px] justify-center rounded-xl mb-5">
                    <h2 className="font-jost font-extrabold text-4xl">
                        About Alive 10.0
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <button className="bg-[#ED9948] w-[177px] rounded-xl">
                        read more
                    </button>
                </div>
            </div>
        </>
    );
}
