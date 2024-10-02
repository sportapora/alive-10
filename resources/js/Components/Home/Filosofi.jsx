import React from "react";

const LogoPhilosophy = () => {
    return (
        <div className="bg-[#2B2B2B] text-white p-6">
            <h2 className="text-center font-jost text-3xl md:text-4xl font-extrabold mb-16 mt-6">Logo Philosophy</h2>
            <div className="flex md:flex-row flex-col gap-10 justify-around items-center px-10 lg:px-20">
                <div
                    className="relative bg-gray-200 w-[80%] lg:w-[30%] max-h-[443px] flex flex-col items-center rounded-lg shadow-lg aspect-[3/4]">
                    <div
                        className="absolute -top-6 w-16 h-16 bg-white rounded-full flex items-center justify-center border border-gray-300 shadow-md">
                        <div
                            className="w-12 h-12 bg-contain bg-no-repeat"
                            style={{
                                backgroundImage: `url("Assets/Images/home_assets/ARM.png")`,
                            }}
                        ></div>
                    </div>
                    <p className="mt-10 font-jost font-extrabold text-lg md:text-3xl text-gray-800">Arm</p>
                    <p className="mt-16 lg:mt-20 font-jost font-semibold text-lg lg:text-2xl text-gray-800 text-center">
                        Tangan: Mewakili fokus utama tahun ini yang menekankan pentingnya menjaga kesehatan kulit.
                    </p>
                </div>

                <div
                    className="relative bg-gray-200 w-[80%] lg:w-[30%] max-h-[443px] aspect-[3/4] flex flex-col items-center rounded-lg shadow-lg">
                    <div
                        className="absolute -top-6 w-16 h-16 bg-white rounded-full flex items-center justify-center border border-gray-300 shadow-md">
                        <div
                            className="w-12 h-12 bg-contain bg-no-repeat"
                            style={{
                                backgroundImage: `url("Assets/Images/home_assets/HEART.png")`,
                            }}
                        ></div>
                    </div>
                    <p className="mt-10 font-jost font-extrabold text-lg md:text-3xl text-gray-800">Heart</p>
                    <p className="mt-16 lg:mt-20 font-jost font-semibold text-lg lg:text-2xl text-gray-800 text-center">
                        Simbol Hati: Melambangkan kepedulian terhadap kesehatan kulit mahasiswa.
                    </p>
                </div>

                <div
                    className="relative bg-gray-200 w-[80%] lg:w-[30%] max-h-[443px] aspect-[3/4] flex flex-col items-center rounded-lg shadow-lg">
                    <div
                        className="absolute -top-6 w-16 h-16 bg-white rounded-full flex items-center justify-center border border-gray-300 shadow-md">
                        <div
                            className="w-12 h-12 bg-contain bg-no-repeat"
                            style={{
                                backgroundImage: `url("Assets/Images/home_assets/CROSS.png")`,
                            }}
                        ></div>
                    </div>
                    <p className="mt-10 font-jost font-extrabold text-lg md:text-3xl text-gray-800">Cross</p>
                    <p className="mt-16 lg:mt-20 font-jost font-semibold text-lg lg:text-2xl text-gray-800 text-center">
                        Palang Hijau: Simbol identitas dari UMN Medical Center, penyelenggara acara ini.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LogoPhilosophy;
