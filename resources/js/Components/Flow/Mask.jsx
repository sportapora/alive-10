import React from "react";
import maskBg from "../../../../public/Assets/Images/flow/chrome_bg.png";
import mask from "../../../../public/Assets/Images/flow/CHROMA.png";

const Mask = () => {
    return (
        <div
            className="px-5 lg:px-10 relative -top-44 sm:-top-20 md:-top-20 lg:-top-28 xl:-top-36 w-full h-[1200px] sm:h-[1000px] bg-no-repeat bg-cover"
            style={{backgroundImage: `url(${maskBg})`}}
        >
            <div className="max-w-[1500px] mx-auto pt-[375px] sm:pt-[300px] md:pt-64 lg:pt-60 xl:pt-96">
                <div className="sm:hidden flex flex-col gap-3">
                    <img
                        src={mask}
                        alt="Chroma"
                        className="w-full max-w-72 mx-auto md:mx-0 md:max-w-none md:w-80 object-contain"
                    />
                    <div className="flex flex-col w-full md:w-1/2 text-end">
                        <h1 className="font-modak text-[50px] sm:text-[60px] md:text-[80px] lg:text-[96px] text-white">
                            MASK
                        </h1>
                        <p className="-mt-2 font-normal font-jost text-base md:text-lg lg:text-xl text-justify md:text-end">
                            Workshop ALIVE 10.0 yaitu MASK (Master Of Applied Skincare) tahun ini mengambil kegiatan
                            tentang meracik pembuatan masker alami.
                            Dalam acara ini partisipan akan belajar langsung dari ahli di bidangnya tentang
                            langkah-langkah, teknik, serta
                            bahan-bahan apa saja yang dapat dijadikan untuk membuat masker alami. Dalam acara ini
                            juga nantinya diadakan mini games, lho!
                            Bagi 5 orang terpilih akan mendapatkan 1 tambahan SKKM minat dan Bakat. Setelah mengikuti
                            acara ini peserta akan mendapatkan 1
                            SKKM minat dan bakat.
                        </p>
                    </div>
                </div>

                <div className="hidden sm:flex sm:flex-row justify-center lg:justify-end gap-3 lg:gap-10">
                    <div className="flex flex-col w-full md:w-1/2 text-end">
                        <h1 className="font-modak text-[50px] sm:text-[60px] md:text-[80px] lg:text-[96px] text-white">
                            MASK
                        </h1>
                        <p className="-mt-2 font-normal font-jost text-base md:text-lg lg:text-xl text-justify md:text-end">
                            Workshop ALIVE 10.0 yaitu MASK (Master Of Applied Skincare) tahun ini mengambil kegiatan
                            tentang meracik pembuatan masker alami.
                            Dalam acara ini partisipan akan belajar langsung dari ahli di bidangnya tentang
                            langkah-langkah, teknik, serta
                            bahan-bahan apa saja yang dapat dijadikan untuk membuat masker alami. Dalam acara ini
                            juga nantinya diadakan mini games, lho!
                            Bagi 5 orang terpilih akan mendapatkan 1 tambahan SKKM minat dan Bakat. Setelah mengikuti
                            acara ini peserta akan mendapatkan 1
                            SKKM minat dan bakat.
                        </p>
                    </div>
                    <img
                        src={mask}
                        alt="chroma"
                        className="w-full max-w-72 mx-auto md:mx-0 md:max-w-none md:w-80 object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Mask;
