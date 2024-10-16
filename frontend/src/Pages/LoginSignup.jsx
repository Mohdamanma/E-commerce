import React, { useState } from 'react'

function LoginSignup() {

  const [state, setState] = useState('Login')
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const formHandler = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  // console.log("Form Data :", formData)

  const Login = async () => {
    console.log("Login Function Excuted")
    let responseData
    // console.log(user)
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data
      })
    console.log(responseData)

    if (responseData.auth) {
      localStorage.setItem('auth-token', responseData.token)
    } else {
      setError(responseData.error)
    }
  }

  const Signup = async () => {
    console.log("SignUp Function Excuted")
    let responseData
    // console.log(user)
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data
      })
    if (responseData.auth) {
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace('/login')
    } else {
      setError(responseData.error)
    }
  }
  return (
    <div className='h-screen flex justify-center items-center bg-gradient-to-t from-violet-100 to-fuchsia-100 mb-11'>
      <div className={`bg-white w-[580px] ${state === 'Login' ? 'h - [450px]' : 'h - [550px]'} py-9 px-8`}>
        <h1 className='font-semibold font-[poppins] text-3xl '>{state}</h1>
        <div className='flex flex-col gap-5 my-8'>
          {state === 'Sign Up' ? <input className='w-full border-2 border-solid border-slate-200 h-12 pl-5 outline-none  text-xl' name='name' onChange={formHandler} value={formData.name} type="text" placeholder=' Your Name' /> : <></>}
          <input className='w-full border-2 border-solid border-slate-200 h-12 pl-5 outline-none  text-xl' type="text" placeholder='Email Address' name='email' onChange={formHandler} value={formData.email} />
          <input className='w-full border-2 border-solid border-slate-200 h-12 pl-5 outline-none text-xl' type="password" name='password' onChange={formHandler} value={formData.password} placeholder='password' />
        </div>
        {/*if email or PasswordIncorrect */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button className='bg-red-500 w-full h-12 text-white '
          onClick={() => state === 'Login' ? Login() : Signup()}>Continue</button>
        {state === 'Sign Up' ? <p className='font-[poppins] mt-4'>Already have an Account ?<span className='text-red-500 font-semibold cursor-pointer ' onClick={() => setState('Login')} >Click here</span></p> :
          <p className='font-[poppins] mt-4'>Create an account? <span className='text-red-500 font-semibold cursor-pointer ' onClick={() => setState('Sign Up')}>Click here</span></p>
        }
        <div className='flex  gap-3 mt-4'>
          <input type="checkbox" />
          <p>By continuing.i agree to the term of use & privacy policy</p>
        </div>
      </div >
    </div >
  )
}

export default LoginSignup