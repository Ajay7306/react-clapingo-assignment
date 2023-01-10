import React from "react";
import { news1 } from "../assets";

const New = () => {
  return (
    <div className=" overflow-hidden cursor-pointer h-[525px] w-[482px] md:w-80">
      <a href="#" className="block justify-start w-full h-full">
        <div className="flex flex-col justify-center items-center">
          <img
            alt="blog photo"
            src={news1}
            className="object-cover w-full h-[100%] rounded-lg"
          />
          <div className=" relative top-[-45px] left-[-100px] text-xs mr-2 py-1.5 px-4 text-[#001F27] bg-[#f4c467] rounded-2xl">
            NEWS
          </div>
        </div>
        <div className="w-full">
          <p className="mb-2 text-[18px] font-medium text-[#001F27] dark:text-white">
            Class adds $30 million to its balance sheet for a Zoom-friendly
            edtech solution
          </p>
          <p className="mb-2 font-light text-[16px] text-[#808F93] dark:text-gray-300 text-md">
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </p>
          <a
            href="/gh"
            className="underline  text-[18px] font-medium text-[#001F27] dark:text-white "
          >
            Read more
          </a>
        </div>
      </a>
    </div>
  );
};

export default New;
