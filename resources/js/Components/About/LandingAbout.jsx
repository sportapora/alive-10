import React from "react";

function LandingAbout() {
    return (
        <>
            <div className="bg-[#EAC09E] h-[1200px] md:h-[1300px] lg:h-[900px] md:p-0 p-10 overflow-hidden">
                <div className="flex lg:flex-row flex-col gap-20 items-center justify-center relative top-20">
                    <div className="flex flex-col text-black md:text-justify text-center lg:w-[40%] w-[80%]">
                        <h1 className="font-extrabold font-jost md:text-[50px] text-[28px]">
                            About ALIVE
                        </h1>
                        <p className="md:text-[18px] text-[16px] mt-4 text-left">
                            ALIVE 10.0 adalah acara tahunan yang merupakan program kerja dari UMN Medical Center.
                            Kembali hadir dengan tema “Skin Healthiness” yang merupakan edukasi tentang kesehatan kulit,
                            dirancang untuk memberikan pengetahuan mendalam dan praktis tentang perawatan kulit. Acara
                            ini mencakup berbagai rangkaian kegiatan menarik, seperti Booth Kesehatan, Workshop, serta
                            diakhiri dengan Talk Show yang merupakan puncak acara ALIVE 10.0. Maskot ALIVE 10.0 dengan
                            tema “hydration” menghadirkan maskot bernama Hydra dan Hydro untuk menginspirasi peserta
                            dalam menjaga kelembapan dan kesehatan kulit. Acara ini bertujuan untuk meningkatkan
                            kesadaran, memberikan informasi berguna, dan mendorong partisipasi aktif dalam merawat kulit
                            mereka dengan cara yang menyenangkan dan edukatif.
                        </p>
                    </div>
                    <div className="flex flex-row mt-20">
                        <img
                            alt="ALIVE 9.0"
                            className="md:w-[400px] md:h-[600px] rounded-[60px] w-[350px] h-[400px] md:relative absolute md:top-0 md:left-0 top-[100%] right-[20%] object-cover" src="/Assets/Images/about/about-3.jpg" />
                        <img
                            alt="ALIVE 9.0"
                            className="md:w-[300px] md:h-[400px] rounded-[60px] w-[250px] h-[300px] absolute inset-0 md:top-[35%] md:left-[60%] lg:left-[75%] lg:top-[25%] top-[75%] left-[50%] object-cover" src="/Assets/Images/about/about-1.jpg" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingAbout;
