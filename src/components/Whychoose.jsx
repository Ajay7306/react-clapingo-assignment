import React from "react";
import { blog1, blog2, blog3, blog4, blog5 } from "../assets";
import Blog1 from "./Blog1";
import Blog2 from "./Blog2";
import Blog3 from "./Blog3";

const Whychoose = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[100%] mb-[80px]">
    <div className="flex flex-col justify-start items-start p-3">
      <div className="flex justify-start items-start ml-[20px] mb-10">
        <h1 className="font-semibold text-[40px] leading-[52px] text-[#001F27] mx-[20px]">
          Why choose Clapingo ?
        </h1>
      </div>

      <div className="container1 justify-center items-center">
        <Blog1
          img={blog1}
          head={"Practice Speaking Skills"}
          text={
            "One of a kind platform where you get to practise your speaking skills and not just be the audience in some lecture."
          }
        />
        <Blog1
          img={blog2}
          head={"Friendly Environment"}
          text={
            "Sage and friendly environment where you can lower your inhibitions and eventually lower your fear of speaking."
          }
        />
          <div className="container relative top-[24px]">


          <Blog2
            img={blog3}
            head={"Learn at your Own Peace"}
            text={
              "We have customised classes to suit each person's individual pace and ability to learn."
            }
            
          />
          <Blog3
            img={blog4}
            head={"Learn at your Own Peace"}
            text={
              "We have customised classes to suit each person's individual pace and ability to learn."
            }
            
          />
          </div>
        <Blog1
          img={blog5}
          head={"Recorded Sessions"}
          text={
            "Recorded sesssions so you can revsit them at anytime, refresh your memeory and work on your shortcomings."
          }
        />
      </div>
    </div>
      <button type="button"  className="px-4 py-2 mr-4 my-[15px] mt-[30px] text-white hover:text-[#FF736A] uppercase bg-[#FF736A] border-2 border-transparent  rounded-[80px] text-md hover:bg-white"
           >
               Book a trial
              </button>

              </div>
  );
};

export default Whychoose;
