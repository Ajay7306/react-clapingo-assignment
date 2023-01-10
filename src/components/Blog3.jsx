import React from 'react'

const Blog3 = ({head,text,img}) => {
  return (
    <div className="mt-[10px] flex flex-row justify-evenly items-center overflow-hidden dark:bg-gray-800 blog shadow-lg cursor-pointer h-[157px] w-[307px] md:w-80">
        <img alt="blog photo" src={img} className="object-cover w-[126px] h-[141px] p-1 rounded-2xl"/>
        <div className="w-[138px] flex flex-col justify-start items-start ">
            <p className="mb-2 text-[16px] font-medium text-[#001f27] dark:text-white">
                {head}
            </p>
            <p className="font-normal text-[12px] text-[#001f27] dark:text-gray-300 text-md">
                {text}
            </p>
        </div>
</div>
  )
}

export default Blog3