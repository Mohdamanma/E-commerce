import React from 'react'
import logo from './Asset/Frontend_Assets/logo.png'
import whatsApp from './Asset/Frontend_Assets/whatsapp_icon.png'
import instagram from './Asset/Frontend_Assets/instagram_icon.png'
import pintester from './Asset/Frontend_Assets/pintester_icon.png'


function Footer() {
    return (
        <div className='flex flex-col sm:gap-12 gap-6 items-center justify-center '>
            <div className='flex items-center gap-5'>
                <img src={logo} alt="" />
                <p className='text-4xl font-semibold text-slate-800'>SHOPPER</p>
            </div>
            <ul className='flex justify-between list-none  md:gap-8 gap-4 cursor-pointer sm:font-semibold'>
                <li className=''>Company</li>
                <li className=''>Product</li>
                <li className=''>Offices</li>
                <li className=''>About</li>
                <li className=''>Contact</li>
            </ul>
            <div className='flex items-center gap-7 cursor-pointer'>
                <img src={instagram} className="hover:bg-red-500 rounded-xl" alt="" />
                <img src={whatsApp} className="hover:bg-green-700 rounded-2xl" alt="" />
                <img src={pintester} alt="" />
            </div>
            <div className='flex flex-col items-center w-full gap-8 mb-8 md:text-xl text-sm'>
                <hr className='w-4/5 border-none rounded-xl h-px  bg-slate-600' />
                <p>Copyright @ 2024 - All Right reserved.</p>
            </div>
        </div >
    )
}

export default Footer