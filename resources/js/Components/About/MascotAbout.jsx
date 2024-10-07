import React from 'react';
import Maskot1 from '../../../../public/Assets/Images/maskot1.png'
import Maskot2 from '../../../../public/Assets/Images/maskot2.png'


function MascotAbout() {
  return (
    <>
      <div>
        <div className='bg-[#ED9948] h-auto xl:block hidden'>
          <div className='flex flex-row justify-between items-center h-full px-8'>
            <div className='absolute flex flex-row items-center justify-center left-1/2 space-x-[150%] -translate-x-1/2 '>
              <h1 className=' font-extrabold font-jost text-[90px] text-[#C97A40] -rotate-90'>
                HYDRO
              </h1>
            </div>
            <div className='w-1/4 z-20 inset-0'>
              <h1 className='text-[40px] font-extrabold font-jost'>Hydro</h1>
              <p className='text-[22px]'>
                "Hydro", maskot berwarna kuning yang optimis dan penuh percaya diri akan menjaga keseruan dalam setiap acara ALIVE 10.0 dengan semangat nya yang luar biasa. Kedua maskot ini menggunakan headband sebagai simbol proteksi, mendorong peserta ALIVE 10.0 untuk selalu menjaga dan memahami pentingnya kelembaban kulit.
              </p>
            </div>
            <div className='w-[500px] h-auto bg-[#C97A40] flex flex-col items-center py-3 justify-center -ml-12'>
                <h1 className='text-white font-extrabold font-jost text-[50px]'>
                    MASCOTS
                </h1>
                <div className='relative left-[-10%] inset-0 m-auto flex items-center '>
                  <div className='flex flex-row z-10 space-x-[-270px]'>
                      <img src={Maskot2} alt="maskot2" className='h-[430px] rotate-12' />
                      <img src={Maskot1} alt="maskot1" className='h-[430px] -rotate-12' />
                  </div>
                </div>
            </div>
            <div className='w-1/4 text-right z-20 inset-0'>
              <h1 className='text-[40px] font-extrabold font-jost'>Hydra</h1>
              <p className='text-[22px] z-10'>
                Nama kedua maskot ALIVE 10.0 ini berasal dari kata "hydration" yaitu zat yang menjaga kelembaban dan kesehatan kulit. “Hydra”, maskot berwarna ungu ini melambangkan ketenangan dan kebijaksanaan dalam perawatan kulit. Dengan ekspresi wajah riang, Hydra mengajak partisipan ALIVE 10.0 untuk menjaga kulit dengan semangat positif dan keceriaan.
              </p>
            </div>
          </div>
        </div>
        <div className='bg-[#ED9948] h-auto xl:hidden block overflow-hidden'>
            <div className='absolute -rotate-90 mt-[150px] ml-[-140px]'>
                <h1 className='text-[90px] text-[#C97A40] font-extrabold font-jost'>
                    HYDRO
                </h1>
            </div>
            <div className='relative flex flex-col justify-center items-center'>
                <div className='relative text-center w-[240px] h-[400px] bg-[#C97A40]'>
                    <h1 className='text-[45px] text-white font-extrabold font-jost'>
                        MASCOTS
                    </h1>
                </div>
                <div className='absolute left-1/2 -translate-x-2/4 top-[5%] w-[400px]'>
                    <img src={Maskot2} alt="" className='h-[370px] rotate-12' />
                </div>
                <div className='flex flex-col pt-[60px] pb-5 w-[260px]'>
                    <h1 className='text-[30px] font-extrabold font-jost text-center'>
                        HYDRO
                    </h1>
                    <p className="text-[18px]">
                      "Hydro", maskot berwarna kuning yang optimis dan penuh percaya diri akan menjaga keseruan dalam setiap acara ALIVE 10.0 dengan semangat nya yang luar biasa. Kedua maskot ini menggunakan headband sebagai simbol proteksi, mendorong peserta ALIVE 10.0 untuk selalu menjaga dan memahami pentingnya kelembaban kulit.
                    </p>
                </div>
                <div className='absolute -rotate-90 top-[1200px] right-[-140px]'>
                    <h1 className='text-[#C97A40] text-[90px] font-extrabold font-jost'>
                        HYDRA
                    </h1>
                </div>
                <div className='relative text-center w-[240px] h-[400px] bg-[#C97A40]'></div>
                <div className='absolute left-1/2 -translate-x-2/4 top-[55%] w-[400px]'>
                    <img src={Maskot1} alt="" className='h-[370px] -rotate-12' />
                </div>
                <div className='flex flex-col pt-[60px] pb-5 w-[260px]'>
                    <h1 className='text-[30px] font-extrabold font-jost text-center'>
                        HYDRA
                    </h1>
                    <p className='text-right text-[18px]'>
                      Nama kedua maskot ALIVE 10.0 ini berasal dari kata "hydration" yaitu zat yang menjaga kelembaban dan kesehatan kulit. “Hydra”, maskot berwarna ungu ini melambangkan ketenangan dan kebijaksanaan dalam perawatan kulit. Dengan ekspresi wajah riang, Hydra mengajak partisipan ALIVE 10.0 untuk menjaga kulit dengan semangat positif dan keceriaan.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default MascotAbout;
