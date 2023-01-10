import React from "react";
import { ad } from "../assets";
import MobileStoreButton from "react-mobile-store-button";


const CTA = () => {
  const iOSUrl =
  "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";
  return (
    <div className="justify-center items-center">
      <div className="absolute z-[10] flex flex-col m-14">
        <h1 className="font-bold text-[40px] leading-[48px] text-[#001F27] mb-[18px]">
          Download our App now!
        </h1>
        <p className="text-[18px] leading-[24px] text-[#8C8C8C] font-normal w-[410px] h-[96px] ">
          Practice english conversation with excellent communicators across the
          country and speak like a pro.
        </p>
        <div className="flex flex-col justify-start items-start">
            <h1 className="text-[16px] leading-[24px] font-medium text-[#18191F] mb-[5px]">Get the App</h1>
            <div className="flex flex-row justify-start items-center">
            <MobileStoreButton
        store="ios"
        url={iOSUrl}
        linkProps={{ title: "iOS Store Button" }}
      style={{ width: "135px", height: "40px" }}      />
      <MobileStoreButton
        store="android"
        url={iOSUrl}
        linkProps={{ title: "iOS Store Button" }}
      style={{ width: "135px", height: "40px" }}      />
            </div>
            <h2 className=" relative left-[150px] text-[14px] leading-[21px] font-medium text-[#18191F]">Coming soon!</h2>
        </div>
      </div>
      <img src={ad} alt="image" className="w-full h-full object-contain relative z-0" />
    </div>
  );
};

export default CTA;
