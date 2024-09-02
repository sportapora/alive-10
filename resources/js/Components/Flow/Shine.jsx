import React from "react";
import shine from "../../../../public/Assets/Images/flow/SHINE.png";
import shineBg from "../../../../public/Assets/Images/flow/shine_bg.png";

const Shine = () => {
    return (
        <div
            className="py-5 px-5 lg:py-0 lg:px-10 h-screen relative -top-[370px] sm:-top-[400px] lg:-top-[500px] w-full bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${shineBg})` }}
        >
            <div className="max-w-[1500px] mx-auto pt-52 lg:pt-80 gap-3 lg:gap-10 flex flex-col justify-center sm:flex-row lg:justify-start">
                <img
                    src={shine}
                    alt="Shine"
                    className="w-full max-w-72 mx-auto md:mx-0 md:max-w-none md:w-80 object-contain"
                />
                <div className="flex flex-col w-full md:w-1/2">
                    <h1 className="font-modak text-[50px] sm:text-[60px] md:text-[80px] lg:text-[96px] text-white">
                        SHINE
                    </h1>
                    <p className="-mt-2 font-normal font-jost text-base md:text-lg lg:text-xl text-justify">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nam repudiandae aut labore accusamus cum ad
                        similique et mollitia exercitationem aliquam dolores
                        saepe, recusandae quas tempora sapiente expedita
                        explicabo. Doloribus, maiores! Odit, quam. Molestiae
                        amet harum esse iste architecto! Pariatur, iste corporis
                        corrupti, enim modi autem accusamus labore rerum eveniet
                        neque recusandae error quia obcaecati molestiae
                        exercitationem praesentium provident itaque velit!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Shine;
