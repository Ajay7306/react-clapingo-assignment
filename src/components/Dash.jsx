import React from 'react'

const Dash = ({price,text}) => {
  return (
    <div className='flex flex-col  w-[205px] h-[96px]  items-center bg-[#3A3636] rounded-[12px]'>
            <div>

            <h1 className='font-medium text-[32px] leading-[48px] text-white mt-[5px] '>{price}<span className='plus'>+</span></h1>
            </div>
            <div>

            <p className='text-[14px] leading-[21px] text-white font-normal'>{text}</p>
            </div>

    </div>
  )
}

export default Dash