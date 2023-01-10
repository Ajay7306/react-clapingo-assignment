import React from 'react'

const Blog1 = ({head,text,img}) => {
  return (
    
<div className="m-auto overflow-hidden dark:bg-gray-800 blog shadow-lg cursor-pointer h-[400px] w-[250px] ">
        <img alt="blog photo" src={img} className="object-cover w-[250px] h-[215px] p-2 rounded-2xl"/>
        <div className="w-full p-4  ">
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

export default Blog1