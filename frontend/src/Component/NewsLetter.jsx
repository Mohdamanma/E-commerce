import React from 'react'

function NewsLetter() {
    return (
        <div className='flex flex-col items-center justify-center gap-6 m-auto sm:px-36 lg:w-5/6 bg-gradient-to-t from-violet-100 to-fuchsia-100 h-96 mb-28 '>
            <h2 className='font-[poppins] lg:text-5xl pl-7 text-4xl font-semibold text-slate-800 '>Get Exclusive Offer On Your Email</h2>
            <p className='font-[poppins] text-xl pl-11 text-slate-500'>Subscribe to our newsletter and stay updated</p>
            <div className='flex  items-center justify-between h-14 md:w-2/4 bg-white border-2 border-solid border-slate-500 rounded-full'>
                <input className='ml-4 outline-none' type="text" placeholder='Your email id' />
                <button className='bg-black text-white w-36 h-14 rounded-full'>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter