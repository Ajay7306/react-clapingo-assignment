import React from 'react'

const New2 = ({img,text,head}) => {
  return (
    <div className="mb-[60px] cursor-pointer h-[150px] w-[688px]">
      <a href="#" className="flex flex-row w-[100%] h-[100%]">
          <img
            alt="blog photo"
            src={img}
            className="object-cover mt-[5px]"
          />
        <div className="ml-[20px] w-[380px] h-[125px] ">
          <p className="w-[380px] text-[18px] font-medium text-[#001F27] dark:text-white">
          {head}
          </p>
          <p className="w-[380px]  font-light text-[16px] text-[#808F93] dark:text-gray-300 text-md">
          {text}
          </p>
          <a
            href="/gh"
            className="underline  text-[14px] font-medium text-[#001F27] dark:text-white "
          >
            Read more
          </a>
        </div>
      </a>
    </div>
  )
}

export default New2