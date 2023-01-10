import React from "react";
import Box from "./Box";
import { mobile } from "../assets";

const Work = () => {
  return (
    <div className="flex flex-col justify-start items-start m-[80px] w-[100%] h-[700px]">
      <h1 className="font-semibold text-[40px] leading-[52px] text-[#001F27]">
        How it works ?
      </h1>
      <div className="flex flex-col  mt-[50px]">
        <div className="flex flex-row justify-between items-center w-[1250px] mb-[90px] ">
          <Box
            head="1. Create Account"
            text="Create your account using phone number or email and take a free trial at ₹1."
          />
          <Box
            head="2. Subscribe"
            text="Choose your preferred duration and select subscription package for your sessions. "
          />
        </div>
        <div className="absolute flex justify-center items-center left-[600px] top-[2050px]">
          <div className="phone relative z-0 top-[-20px] left-[50px]"/>
          <div className="phonerect absolute top-[340px] z-[10] left-[-20px]"/>
        <img src={mobile} alt="ui" className="w-[235px] h-[510px] relative z-[1] left-[-160px]" />
        </div>
        <div className="flex flex-row justify-between items-center w-[1250px] ">
          <Box
            head="3. Select time slot"
            text="Subscribe & select any time slot between 10 AM to 12 midnight."
          />
          <Box
            head="4. You are done"
            text="That's it! Start practicing and reach your learning goal in speaking."
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
