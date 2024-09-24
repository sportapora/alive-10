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
                <div className="bg-[#E8E8E8] p-8 mx-20 h-[347px] lg:h-[450px] rounded-xl mb-5">
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
