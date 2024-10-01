import React from "react";
import face from "../../../../public/Assets/Images/flow/FACE.png";

const Face = () => {
    return (
        <div className="md:p-0 px-5 lg:px-10 overflow-hidden">
            <div className="max-w-[1500px] mx-auto pt-20 md:pt-32">
                <div
                    className="relative md:top-20 gap-3 lg:gap-10 flex flex-col justify-center sm:flex-row lg:justify-start">
                    <img
                        src={face}
                        alt="Face"
                        className="w-full max-w-72 mx-auto md:mx-0 md:max-w-none md:w-80 object-contain"
                    />
                    <div className="flex flex-col w-full md:w-1/2">
                        <h1 className="font-modak text-[50px] sm:text-[60px] md:text-[80px] lg:text-[96px] text-white">
                            FACE
                        </h1>
                        <p className="-mt-2 font-normal font-jost text-base md:text-lg lg:text-xl text-justify">
                            FACE merupakan rangkaian pertama ALIVE 10.0, di mana nantinya akan terdapat booth kesehatan. Acara ini menawarkan konsultasi
                            kesehatan kulit secara on-site untuk seluruh <i>civitas</i> UMN dari kalangan mahasiswa, dosen, dan
                            staf. Booth ini bertujuan memberikan fasilitas pemeriksaan dan konsultasi kesehatan kulit,
                            sekaligus memberikan pengetahuan lebih lanjut tentang cara optimal merawat kulit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Face;
