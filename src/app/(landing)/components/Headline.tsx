import React from "react";
import { Kufam } from "next/font/google";
const kufam_bold = Kufam({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});
const kufam = Kufam({ weight: "400", style: "normal", subsets: ["latin"] });
export default function Headline() {
  return (
    <div className="flex flex-col items-center">
      <h1
        className={`${kufam_bold.className} text-[2.5rem] md:text-[3.5rem] lg:text-[6rem] text-[#E2E2E2] leading-[2rem] md:leading-[3rem] lg:leading-[4rem] text-center`}
      >
        NameNation
      </h1>
      <div className="w-11/12 lg:w-full h-[2px] bg-gradient-to-r from-[#F7FF00] to-[#DB36A4]"></div>
    </div>
  );
}
