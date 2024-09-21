import React from "react";
import Arm from "../../../../public/Assets/Images/home_assets/ARM.png";
import Heart from "../../../../public/Assets/Images/home_assets/HEART.png";
import Cross from "../../../../public/Assets/Images/home_assets/CROSS.png";

const LogoPhilosophy = () => {
    return (
        <div className="bg-gray-900 text-white p-6">
            <h2 className="text-center text-2xl mb-6">Logo Philosophy</h2>
            <div className="flex md:flex-row flex-col gap-4 justify-around items-center">
                <div className="bg-gray-200 w-[40%] h-52 flex flex-col items-center justify-center rounded-lg">
                    <div
                        className="w-12 h-12 bg-contain bg-no-repeat mb-4"
                        style={{
                            backgroundImage: Arm,
                        }}
                    ></div>
                    <p className="text-lg text-gray-800">Arm</p>
                </div>
                <div className="bg-gray-200 w-[40%] h-52 flex flex-col items-center justify-center rounded-lg">
                    <div
                        className="w-12 h-12 bg-contain bg-no-repeat mb-4"
                        style={{
                            backgroundImage: Heart,
                        }}
                    ></div>
                    <p className="text-lg text-gray-800">Heart</p>
                </div>
                <div className="bg-gray-200 w-[40%] h-52 flex flex-col items-center justify-center rounded-lg">
                    <div
                        className="w-12 h-12 bg-contain bg-no-repeat mb-4"
                        style={{
                            backgroundImage: Cross,
                        }}
                    ></div>
                    <p className="text-lg text-gray-800">Cross</p>
                </div>
            </div>
        </div>
    );
};

export default LogoPhilosophy;
