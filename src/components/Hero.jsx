import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-between w-full h-[502px]  items-center overflow-hidden bg-white dark:bg-gray-800 my-[150px] mx-[80px]">
      <div className=" flex justify-center items-start  ">
        <div className="flex flex-col ">
          <h1 className="flex flex-col w-[687px] font-[700] text-[56px] font-[#001F27] leading-[68px] dark:text-white">
            Hone your english speaking skills over
            <span className="texthead w-[350px]">one-on-one</span>video call
          </h1>
          <p className="text-[18px] text-[#001F27] w-[687px] h-[56px]  sm:text-base dark:text-white">
            Practice english conversation with excellent communuicators <br />
            across the country and speak like a PRO 😎.
          </p>
          <div className="flex mt-8">
            <a
              href="#"
              className="px-4 py-2 mr-4 text-white hover:text-[#FF736A] uppercase bg-[#FF736A] border-2 border-transparent  rounded-[80px] text-md hover:bg-white"
            >
             <button type="button">
               Book a trial
              </button>
              
              
            </a>
            <a
              href="#"
              className="px-4 py-2 text-[#FF736A] uppercase bg-transparent border-2 border-[#FF736A] rounded-[80px] dark:text-white hover:bg-[#FF736A] hover:text-white text-md"
            >
              <button type="button">
              Download our app
              </button>
            </a>
          </div>
        </div>
        <div className="border border-black rounded-[30px] w-[483px] h-[286px]"></div>
      </div>
    </div>
  );
};

export default Hero;
