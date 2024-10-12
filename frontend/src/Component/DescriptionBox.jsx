import React from 'react'

export default function DescriptionBox() {
  return (
    <div className='sm:mx-44 sm:my-16 my-7 mx-14'>
      <div className='flex'>
        <div className='px-4 py-3 border-2 border-black text-lg font-semibold'>Description</div>
        <div className='px-4 py-3 border-2 border-black text-lg font-semibold'>Review (120)</div>
      </div>
      <div className='flex flex-col gap-6 border-2 border-black sm:p-12 p-3'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio inventore numquam dignissimos provident repellendus veniam nostrum? Quasi officia vel amet repudiandae dolorum cupiditate tenetur nesciunt aperiam ipsam, eos quos incidunt magnam dolorem error nobis consectetur maiores esse reprehenderit. Minima, rerum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam possimus iste fugiat aperiam assumenda accusantium?
        </p>
      </div>
    </div >
  )
}
