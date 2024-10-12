import React from 'react'
import hand_icon from './Asset/Frontend_Assets/hand_icon.png'
import arrow_icon from './Asset/Frontend_Assets/arrow.png'
import hero_image from './Asset/Frontend_Assets/hero_image.png'

function Hero() {
    return (
        <div className='flex md:justify-between justify-center h-screen bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)]'>
            <div className='flex flex-col gap-6  lg:pl-44 md:pl-32 ml-6  justify-center'>
                <h2 className='text-black text-3xl font-semibold'>NEW ARRIVAL ONLY </h2>
                <div>
                    <div className='flex items-center gap-5'>
                        <h3 className='font-[poppins] leading-4 text-black text-6xl font-semibold'>new</h3>
                        <img src={hand_icon} height={105} width={70} alt="" />
                    </div>
                    <p className='font-[poppins] text-6xl font-semibold '>Collections</p>
                    <p className='font-[poppins] text-6xl font-semibold'>for everyone</p>
                </div>
                <div className='flex w-60 bg-rose-600 items-center gap-3 rounded-full justify-center'>
                    <p className='font-sm text-lg text-white py-3'>Latest Collection</p>
                    <img src={arrow_icon} className='h-5' alt="" />
                </div>
            </div>
            <div className='md:flex hidden'>
                <img src={hero_image} className='h-screen max-w-full' alt="" />
            </div>

        </div>
    )
}

export default Hero