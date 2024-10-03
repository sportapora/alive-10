import React from "react";

const LogoPhilosophy = () => {
    return (
        <div className="bg-[#2B2B2B] relative text-white p-6">
            <h2 className="text-center font-jost text-3xl md:text-4xl font-extrabold mb-16 mt-6">
                Logo Philosophy
            </h2>
            <div className="flex md:flex-row flex-col gap-10 justify-around items-center px-10 lg:px-30">
                <div className="relative bg-gray-200 w-[80%] lg:w-[30%] max-h-[443px] flex flex-col items-center rounded-lg shadow-lg aspect-[3/4]">
                    <div className="absolute -top-6 w-16 h-16 bg-white rounded-full flex items-center justify-center border border-gray-300 shadow-md">
                        <div
                            className="w-12 h-12 bg-contain bg-no-repeat"
                            style={{
                                backgroundImage: `url("Assets/Images/home_assets/ARM.png")`,
                            }}
                        ></div>
                    </div>
                    <p className="mt-10 font-jost font-extrabold text-lg md:text-3xl text-gray-800">
                        Arm
                    </p>
                    <p className="mt-16 lg:mt-20 font-jost font-semibold text-lg lg:text-2xl text-gray-800 text-center">
                        Tangan: Mewakili fokus utama tahun ini yang menekankan
                        pentingnya menjaga kesehatan kulit.
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
                    <p className="mt-10 font-jost font-extrabold text-lg md:text-3xl text-gray-800">
                        Heart
                    </p>
                    <p className="mt-16 lg:mt-20 font-jost font-semibold text-lg lg:text-2xl text-gray-800 text-center">
                        Simbol Hati: Melambangkan kepedulian terhadap kesehatan
                        kulit mahasiswa.
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
                    <p className="mt-10 font-jost font-extrabold text-lg md:text-3xl text-gray-800">
                        Cross
                    </p>
                    <p className="mt-16 lg:mt-20 font-jost font-semibold text-lg lg:text-2xl text-gray-800 text-center">
                        Palang Hijau: Simbol identitas dari UMN Medical Center,
                        penyelenggara acara ini.
                    </p>
                </div>
            </div>
            <img
                src="/Assets/Images/home_assets/bubble_merged_1.png"
                alt="Bubble merged 1"
                className="absolute bottom-[250px] -right-[120px] lg:invisible"
            />
            <img
                src="/Assets/Images/home_assets/kiwi.PNG"
                alt="Kiwi"
                className="absolute -bottom-[35px] lg:-bottom-[150px] -right-[140px] lg:-left-[170px] w-[244px] lg:w-[450px] overflow-hidden z-10"
            />
            <img
                src="/Assets/Images/home_assets/jeruk.png"
                alt="Jeruk"
                className="absolute -bottom-[200px] -right-[200px] w-[399px] z-5 lg:invisible"
            />
            <img
                src="/Assets/Images/home_assets/daun 1.png"
                alt="Daun 1"
                className="absolute -bottom-[150px] -left-[120px] w-[271px] lg:invisible"
            />
        </div>
    );
};

export default LogoPhilosophy;
