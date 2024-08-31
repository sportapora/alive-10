import React from "react";

const LogoPhilosophy = () => {
    return (
        <div className="bg-gray-900 text-white p-6">
            <h2 className="text-center text-2xl mb-6">Logo Philosophy</h2>
            <div className="flex justify-around items-center">
                <div className="bg-gray-200 w-36 h-52 flex flex-col items-center justify-center rounded-lg">
                    <div
                        className="w-12 h-12 bg-contain bg-no-repeat mb-4"
                        style={{
                            backgroundImage: "url('path-to-arm-icon.png')",
                        }}
                    ></div>
                    <p className="text-lg text-gray-800">Arm</p>
                </div>
                <div className="bg-gray-200 w-36 h-52 flex flex-col items-center justify-center rounded-lg">
                    <div
                        className="w-12 h-12 bg-contain bg-no-repeat mb-4"
                        style={{
                            backgroundImage: "url('path-to-heart-icon.png')",
                        }}
                    ></div>
                    <p className="text-lg text-gray-800">Heart</p>
                </div>
                <div className="bg-gray-200 w-36 h-52 flex flex-col items-center justify-center rounded-lg">
                    <div
                        className="w-12 h-12 bg-contain bg-no-repeat mb-4"
                        style={{
                            backgroundImage: "url('path-to-cross-icon.png')",
                        }}
                    ></div>
                    <p className="text-lg text-gray-800">Cross</p>
                </div>
            </div>
        </div>
    );
};

export default LogoPhilosophy;
