import React from 'react';
import Maskot1 from '../../../../public/Assets/Images/maskot1.png'
import Maskot2 from '../../../../public/Assets/Images/maskot2.png'


function MascotAbout() {
  return (
    <>
      <div>
        <div className='bg-[#ED9948] h-[450px] md:block hidden'>
          <div className='flex flex-row justify-between items-center h-full px-8'>
            <div className='absolute -rotate-90 -left-20'>
                <h1 className='text-[#C97A40] text-[70px] font-extrabold font-jost'>
                    HYDRO
                </h1>
            </div>
            <div className='w-1/4 z-0'>
              <h1 className='text-[40px] font-extrabold font-jost'>Hydro</h1>
              <p className='text-[20px]'>
                Hydro, berwarna kuning, memberikan kesan hangat dan optimis. menampilkan wajah riang dan mengenakan headband yang melambangkan proteksi, dan ajakan untuk merawat kulit. Headband sering digunakan dalam proses perawatan wajah untuk mencegah gangguan rambut saat menggunakan skincare.
              </p>
            </div>
            <div className='w-[400px] h-[450px] bg-[#C97A40] flex py-3 justify-center mx-4'>
                <h1 className='text-white font-extrabold font-jost text-[50px]'>
                    MASCOTS
                </h1>
            </div>
            <div className='w-1/4 text-right'>
              <h1 className='text-[40px] font-extrabold font-jost'>Hydra</h1>
              <p className='text-[20px]'>
                Hydra, berwarna ungu, menciptakan kesan ketenangan dan kebijaksanaan. menampilkan wajah riang dan mengenakan headband yang melambangkan proteksi, dan ajakan untuk merawat kulit. Headband sering digunakan dalam proses perawatan wajah untuk mencegah gangguan rambut saat menggunakan skincare.
              </p>
            </div>
          </div>
          <div className='relative top-[-80%] inset-0 m-auto flex items-center justify-center'>
            <div className='flex flex-row space-x-[-220px]'>
                <img src={Maskot2} alt="" className='h-[470px] rotate-12' />
                <img src={Maskot1} alt="" className='h-[470px] -rotate-12' />
            </div>
          </div>
        </div>
        <div className='bg-[#ED9948] h-auto md:hidden block overflow-hidden'>
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
                    <p>
                      Hydro, berwarna kuning, memberikan kesan hangat dan optimis. menampilkan wajah riang dan mengenakan headband yang melambangkan proteksi, dan ajakan untuk merawat kulit. Headband sering digunakan dalam proses perawatan wajah untuk mencegah gangguan rambut saat menggunakan skincare.
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
                    <p className='text-right'>
                      Hydra, berwarna ungu, menciptakan kesan ketenangan dan kebijaksanaan. menampilkan wajah riang dan mengenakan headband yang melambangkan proteksi, dan ajakan untuk merawat kulit. Headband sering digunakan dalam proses perawatan wajah untuk mencegah gangguan rambut saat menggunakan skincare.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default MascotAbout;
