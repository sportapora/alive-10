import React from "react";

const LogoPhilosophy = () => {
    return (
        <div className="bg-[#2B2B2B] text-white p-6">
            <h2 className="text-center text-2xl mb-6">Logo Philosophy</h2>
            <div className="flex md:flex-row flex-col gap-4 justify-around items-center">
                <div className="relative bg-gray-200 w-[40%] h-52 flex flex-col items-center rounded-lg shadow-lg">
                    <div className="absolute -top-6 w-16 h-16 bg-white rounded-full flex items-center justify-center border border-gray-300 shadow-md">
                        <div
                            className="w-12 h-12 bg-contain bg-no-repeat"
                            style={{
                                backgroundImage: `url("Assets/Images/home_assets/ARM.png")`,
                            }}
                        ></div>
                    </div>
                    <p className="mt-10 font-jost font-extrabold text-lg text-gray-800">Arm</p>
                </div>

                <div className="relative bg-gray-200 w-[40%] h-52 flex flex-col items-center rounded-lg shadow-lg">
                    <div className="absolute -top-6 w-16 h-16 bg-white rounded-full flex items-center justify-center border border-gray-300 shadow-md">
                        <div
                            className="w-12 h-12 bg-contain bg-no-repeat"
                            style={{
                                backgroundImage: `url("Assets/Images/home_assets/HEART.png")`,
                            }}
                        ></div>
                    </div>
                    <p className="mt-10 font-jost font-extrabold text-lg text-gray-800">Heart</p>
                </div>

                <div className="relative bg-gray-200 w-[40%] h-52 flex flex-col items-center rounded-lg shadow-lg">
                    <div className="absolute -top-6 w-16 h-16 bg-white rounded-full flex items-center justify-center border border-gray-300 shadow-md">
                        <div
                            className="w-12 h-12 bg-contain bg-no-repeat"
                            style={{
                                backgroundImage: `url("Assets/Images/home_assets/CROSS.png")`,
                            }}
                        ></div>
                    </div>
                    <p className="mt-10 font-jost font-extrabold text-lg text-gray-800">Cross</p>
                </div>
            </div>
        </div>
    );
};

export default LogoPhilosophy;