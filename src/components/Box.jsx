import React from "react";

const Box = ({ head, text }) => {
  return (
    <div className=" flex flex-col justify-center items-center box">
      <div className="p-[15px]">
      <h1 className="text-[#001F27] font-semibold text-[20px] leading-[32px] mb-[10px] ">
        {head}
      </h1>
      <p className="font-medium text-[16px] leading-[21px] text-[#808F93]">
        {text}
      </p>
      </div>
    </div>
  );
};

export default Box;
