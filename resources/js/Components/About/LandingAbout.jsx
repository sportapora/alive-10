import React from 'react'

function LandingAbout() {
  return (
    <>
        <div className='bg-[#EAC09E] h-screen md:p-20 p-10 overflow-hidden'>
            <div className='flex md:flex-row flex-col gap-20 items-center justify-center relative top-20'>
                <div className='flex flex-col text-black md:text-justify text-center md:w-[40%] w-[80%]'>
                    <h1 className='font-black md:text-[50px] text-[28px]'>
                        About ALIVE
                    </h1>
                    <p className='md:text-[20px] text-[10px] text-justify'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt a est molestiae ut excepturi et, iure voluptates, recusandae in, incidunt facilis quod quam neque quibusdam dicta? Quis libero quidem tempora.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi asperiores consequatur perferendis dolorem nisi illo esse quisquam neque est maxime nobis placeat minus, nemo nesciunt iusto deleniti aspernatur cupiditate. Suscipit.
                    </p>
                </div>
                <div className='flex flex-row'>
                    <div className='md:w-[400px] md:h-[600px] rounded-[60px] w-[350px] h-[300px] md:relative absolute md:top-0 md:left-0 top-[100%] right-[20%] bg-white'></div>
                    <div className='md:w-[300px] md:h-[400px] rounded-[60px] w-[200px] h-[200px] absolute inset-0 md:top-[20%] md:left-[75%] top-[70%] left-[60%] bg-slate-300'></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LandingAbout