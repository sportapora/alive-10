import React from "react";

const LogoPhilosophy = () => {
    return (
        <div className="bg-[#2B2B2B] text-white p-6">
            <h2 className="text-center text-2xl mb-6">Logo Philosophy</h2>
            <div className="flex md:flex-row flex-col gap-4 justify-around items-center">
                <div className="bg-gray-200 w-[40%] h-52 flex flex-col items-center justify-center rounded-lg">
                    <div
                        className="w-12 h-12 bg-contain bg-no-repeat mb-4"
                        style={{
                            backgroundImage: `url("Assets/Images/home_assets/ARM.png")`,
                        }}
                    ></div>
                    <p className="text-lg text-gray-800">Arm</p>
                </div>
                <div className="bg-gray-200 w-[40%] h-52 flex flex-col items-center justify-center rounded-lg">
                    <div
                        className="w-12 h-12 bg-contain bg-no-repeat mb-4"
                        style={{
                            backgroundImage: `url("Assets/Images/home_assets/HEART.png")`,
                        }}
                    ></div>
                    <p className="text-lg text-gray-800">Heart</p>
                </div>
                <div className="bg-gray-200 w-[40%] h-52 flex flex-col items-center justify-center rounded-lg">
                    <div
                        className="w-12 h-12 bg-contain bg-no-repeat mb-4"
                        style={{
                            backgroundImage: `url("Assets/Images/home_assets/CROSS.png")`,
                        }}
                    ></div>
                    <p className="text-lg text-gray-800">Cross</p>
                </div>
            </div>
        </div>
    );
};

export default LogoPhilosophy;
