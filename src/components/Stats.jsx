import React from 'react'
import Dash from "./Dash"

const Stats = () => {
  return (
    <div className='flex  flex-row justify-between items-start gap-[174px] w-full h-[478px]'>
<div className='flex flex-col stat w-[530px] h-[358px]'>
  <div className='flex flex-row justify-between items-center w-[441px] h-[96px] relative top-[72px] left-[162px]'>
<Dash price={50} text={"Mobile Downloads"} />
<Dash price={80} text={"Happy Learners"}/>

  </div>
  <div className='flex flex-row justify-between items-center w-[441px] h-[96px] relative top-[112px] left-[193px]'>
<Dash price={53} text={"Sessions per month"}/>
<Dash price={200} text={"Speakers around the globe"}/>
</div>



</div>
<div className=" flex flex-col justify-center items-start text-start w-1/2  px-4 ">
    <h5 className='text-[16px] font-[500] leading-[24px] text-[#139980]'>Book a trial</h5>
        <h2 className="text-[40px] font-bold text-black dark:text-white sm:text-4xl">
        Start your English <br/> speaking journey today!
        </h2>
        <p className="text-[16px] font-normal mt-4 text-[#001F27] w-[410px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque pellentesque praesent vitae sit sagittis venenatis. </p>
            <button type="button"  className="px-4 py-2 mr-4 my-[15px] text-white hover:text-[#FF736A] uppercase bg-[#FF736A] border-2 border-transparent  rounded-[80px] text-md hover:bg-white"
           >
               Book a trial
              </button>
       
    </div>

    </div>
  )
}

export default Stats