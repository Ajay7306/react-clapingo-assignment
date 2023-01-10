import React from "react";
import { news2, news3, news4 } from "../assets";
import New1 from "./New1";
import New2 from "./New2";

const New = () => {
  return (
    <div className="flex flex-col justify-center w-[100%] h-[100%] px-12 ">
          <h1 className="font-semibold text-[40px] leading-[52px] text-[#001F27] mb-[60px]">
            Latest News and Resources
          </h1>
        <div className="newcontainer ">
          <div  >
            <New1 />
          </div>

          <div >
            <New2
              text={
                "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution"
              }
              img={news2}
              head={
                "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
              }
            />
            <New2
              text={
                "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution"
              }
              img={news3}
              head={
                "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
              }
            />
            <New2
              text={
                "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution"
              }
              img={news4}
              head={
                "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
              }
            />
          </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-[100%]">
        <button className="border-[3px] w-[163px] h-[43px] border-[#f4c467] rounded-[80px] text-[18px] text-[#F4C467] leading-[27px] font-medium">
          VISIT BLOG
        </button>
      </div>
    </div>
  );
};

export default New;
