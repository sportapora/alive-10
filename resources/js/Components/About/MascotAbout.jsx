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
                <h1 className='text-[#C97A40] text-[70px] font-black'>
                    HYDRO
                </h1>
            </div>
            <div className='w-1/4 z-0'>
              <h1 className='text-[40px] font-black'>Hydro</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur voluptas quia laudantium pariatur facere quam nobis autem nihil optio non doloribus, itaque, iusto quo. Quibusdam vitae natus vel odio beatae!
              </p>
            </div>
            <div className='w-[400px] h-[450px] bg-[#C97A40] flex py-3 justify-center mx-4'>
                <h1 className='text-white font-black text-[50px]'>
                    MASCOTS
                </h1>
            </div>
            <div className='w-1/4 text-right'>
              <h1 className='text-[40px] font-black'>Hydra</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur voluptas quia laudantium pariatur facere quam nobis autem nihil optio non doloribus, itaque, iusto quo. Quibusdam vitae natus vel odio beatae!
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
        <div className='bg-[#ED9948] h-[450px] md:hidden block'>
          <div className='relative top-[-80%] inset-0 m-auto flex items-center justify-center'>
            {/* <div className='flex flex-row space-x-[-220px]'>
                <img src={Maskot2} alt="" className='h-[470px] rotate-12' />
                <img src={Maskot1} alt="" className='h-[470px] -rotate-12' />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default MascotAbout;
