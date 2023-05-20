import React from "react";

export default function Headline() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-poppins font-bold text-[2.5rem] md:text-[3.5rem] lg:text-[6rem] text-[#E2E2E2] leading-[2.4rem] md:leading-[3rem] lg:leading-[5.6rem] text-center">
        NameNation
      </h1>
      <div className="w-11/12 lg:w-full h-[2px] md:h-[5px] bg-gradient-to-r from-[#F7FF00] to-[#DB36A4]"></div>
    </div>
  );
}
