import React from "react";

const offercard = ({ img, head, text }) => {
  return (
    <div className="flex flex-col-reverse justify-center items-center w-[380px] h-[398px] ml-[35px]">
      <div className="flex flex-col  justify-between items-start offerrect w-[380px] h-[253px] relative top-[-80px] p-5">
        <h1 className="text-[#00D2FF] font-semibold text-[20px] leading-[24px]">
          {head}
        </h1>
        <p className="text-white text-[16px] leading-[21px] font-medium">
          {text}
        </p>
      </div>
      <img src={img} alt="image" className="object-contain" />
    </div>
  );
};

export default offercard;
