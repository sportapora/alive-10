import React from "react";
import shine from "../../../../public/Assets/Images/flow/SHINE.png";
import shineBg from "../../../../public/Assets/Images/flow/shine_bg.png";

const Shine = () => {
    return (
        <div
            className="py-5 px-5 lg:py-0 lg:px-10 h-auto relative -top-[300px] sm:-top-[400px] lg:-top-[500px] w-full bg-cover bg-no-repeat"
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
                        Sebagai acara puncak dari rangkaian ALIVE 10.0, Talk
                        Show "SHINE" atau Skin Health Innovations and Nutrition
                        Education menghadirkan seminar seputar pengetahuan dan
                        cara menjaga kesehatan kulit yang dibawakan langsung
                        oleh seorang ahli di bidangnya. Partisipan yang
                        mengikuti seluruh rangkaian acara dan mengisi daftar
                        absensi akan memperoleh 2 SKKM Ilmiah dan Penalaran.
                        Selain itu, ada kesempatan bagi 5 partisipan terbaik
                        yang membuat dan mengunggah Instagram Story berdurasi
                        15-30 detik dalam 24 jam, menceritakan pengalaman mereka
                        selama talkshow akan mendapatkan tambahan 1 SKKM Minat
                        dan Bakat sebagai apresiasi atas kreativitas mereka.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Shine;
