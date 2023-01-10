import React from "react";
import { offer1, offer2, offer3 } from "../assets";
import Offercard from "./Offercard";

const offer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[100%] p-5">
      <h1 className="font-semibold text-[40px] leading-[52px] text-[#001F27]">
        What we offer ?
      </h1>
      <div className="flex flex-row justify-between items-center mt-[100px]">
        <Offercard
          img={offer1}
          head={"Customised Curriculum"}
          text={
            "Customised sessions and module for Basic, Intermediate and Advanced learners."
          }
        />
        <Offercard
          img={offer2}
          head={"Experimental Learning"}
          text={"Do not study English, rather consume and use it."}
        />
        <Offercard
          img={offer3}
          head={"Shadowing Method"}
          text={
            "Think and speak in English rather than translating it from mother tongue."
          }
        />
      </div>
    </div>
  );
};

export default offer;
