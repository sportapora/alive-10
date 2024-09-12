import React from "react";
import chromaBg from "../../../../public/Assets/Images/flow/chrome_bg.png";
import chroma from "../../../../public/Assets/Images/flow/CHROMA.png";

const Chroma = () => {
    return (
        <div
            className="px-5 lg:px-10 relative -top-44 sm:-top-20 md:-top-20 lg:-top-28 xl:-top-36 w-full h-[1200px] sm:h-[1000px] bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${chromaBg})` }}
        >
            <div className="max-w-[1500px] mx-auto pt-[375px] sm:pt-[300px] md:pt-64 lg:pt-60 xl:pt-96">
                <div className="sm:hidden flex flex-col gap-3">
                    <img
                        src={chroma}
                        alt="Chroma"
                        className="w-full max-w-72 mx-auto md:mx-0 md:max-w-none md:w-80 object-contain"
                    />
                    <div className="flex flex-col w-full md:w-1/2 text-end">
                        <h1 className="font-modak text-[50px] sm:text-[60px] md:text-[80px] lg:text-[96px] text-white">
                            CHROMA
                        </h1>
                        <p className="-mt-2 font-normal font-jost text-base md:text-lg lg:text-xl text-justify md:text-end">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Nam repudiandae aut labore accusamus cum ad
                            similique et mollitia exercitationem aliquam dolores
                            saepe, recusandae quas tempora sapiente expedita
                            explicabo. Doloribus, maiores! Odit, quam. Molestiae
                            amet harum esse iste architecto! Pariatur, iste
                            corporis corrupti, enim modi autem accusamus labore
                            rerum eveniet neque recusandae error quia obcaecati
                            molestiae exercitationem praesentium provident
                            itaque velit!
                        </p>
                    </div>
                </div>

                <div className="hidden sm:flex sm:flex-row justify-center lg:justify-end gap-3 lg:gap-10">
                    <div className="flex flex-col w-full md:w-1/2 text-end">
                        <h1 className="font-modak text-[50px] sm:text-[60px] md:text-[80px] lg:text-[96px] text-white">
                            CHROMA
                        </h1>
                        <p className="-mt-2 font-normal font-jost text-base md:text-lg lg:text-xl text-justify md:text-end">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Nam repudiandae aut labore accusamus cum ad
                            similique et mollitia exercitationem aliquam dolores
                            saepe, recusandae quas tempora sapiente expedita
                            explicabo. Doloribus, maiores! Odit, quam. Molestiae
                            amet harum esse iste architecto! Pariatur, iste
                            corporis corrupti, enim modi autem accusamus labore
                            rerum eveniet neque recusandae error quia obcaecati
                            molestiae exercitationem praesentium provident
                            itaque velit!
                        </p>
                    </div>
                    <img
                        src={chroma}
                        alt="chroma"
                        className="w-full max-w-72 mx-auto md:mx-0 md:max-w-none md:w-80 object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Chroma;
