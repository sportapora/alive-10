import React from "react";
import {Link} from "@inertiajs/react";

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
                <div
                    className="flex flex-col gap-5 justify-between bg-[#E8E8E8] font-jost p-8 mt-10 lg:mt-0 mx-20 w-[80%] lg:w-[54%] rounded-[63px] mb-5">
                    <h2 className="font-extrabold text-4xl mt-4">
                        About Alive 10.0
                    </h2>
                    <p className="font-normal">
                        ALIVE 10.0 adalah acara tahunan yang merupakan program kerja dari UMN Medical Center. Kembali
                        hadir dengan tema “Skin Healthiness” yang merupakan edukasi tentang kesehatan kulit, dirancang
                        untuk memberikan pengetahuan mendalam dan praktis tentang perawatan kulit. Acara ini mencakup
                        berbagai rangkaian kegiatan menarik, seperti Booth Kesehatan, Workshop, serta diakhiri dengan
                        Talk Show yang merupakan puncak acara ALIVE 10.0.
                    </p>
                    <div className="w-full flex justify-center lg:justify-normal">
                        <Link href="/about" className="bg-[#ED9948] text-center w-[177px] font-normal mt-4                                                                                           rounded-xl">
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
