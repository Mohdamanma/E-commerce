import React from 'react'

function LoginSignup() {
  return (
    <div className='h-screen flex justify-center items-center bg-gradient-to-t from-violet-100 to-fuchsia-100 mb-11'>
      <div className='bg-white w-[580px] h-[550px]  py-11 px-8'>
        <h1 className='font-semibold font-[poppins] text-3xl '>Sign Up</h1>
        <div className='flex flex-col gap-5 my-8'>
          <input className='w-full border-2 border-solid border-slate-200 h-12 pl-5 outline-none  text-xl' type="text" placeholder='Your Name' />
          <input className='w-full border-2 border-solid border-slate-200 h-12 pl-5 outline-none  text-xl' type="text" placeholder='Email Address' />
          <input className='w-full border-2 border-solid border-slate-200 h-12 pl-5 outline-none text-xl' type="password" placeholder='password' />
        </div>
        <button className='bg-red-500 w-full h-12 text-white '>Continue</button>
        <p className='font-[poppins] mt-4'>Create an account? <span className='text-red-500 font-semibold cursor-pointer '>Click here</span></p>
        <div className='flex  gap-3 mt-4'>
          <input type="checkbox" />
          <p>By continuing.i agree to the term of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup