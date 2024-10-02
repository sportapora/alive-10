import React from 'react'

export default function AboutHome() {
    return (
        <>
            <div className='flex pb-20 bg-[#BF90C1]'>
                <div className="flex-grow flex-shrink">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300" className='w-screen'>
                        <path
                            fill="#2B2B2B"
                            d="M0,96L21.8,122.7C43.6,149,87,203,131,229.3C174.5,256,218,256,262,261.3C305.5,267,349,277,393,282.7C436.4,288,480,288,524,282.7C567.3,277,611,267,655,224C698.2,181,742,107,785,112C829.1,117,873,203,916,250.7C960,299,1004,309,1047,277.3C1090.9,245,1135,171,1178,154.7C1221.8,139,1265,181,1309,165.3C1352.7,149,1396,75,1418,37.3L1440,0L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
                        ></path>
                    </svg>
                    <h1 className='text-[#6B4E76] mt-14 md:mt-10 font-extrabold text-[20px] text-center'>
                        © 2024 Alive Medic UMN All Rights Reserved.
                    </h1>
                </div>
            </div>
        </>
    );
}
