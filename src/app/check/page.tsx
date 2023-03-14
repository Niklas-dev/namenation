import React from "react";
import { Kufam } from "next/font/google";

const kufam_bold = Kufam({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});
const kufam = Kufam({ weight: "400", style: "normal", subsets: ["latin"] });
export default function Check() {
  return (
    <div className="h-screen w-screen flex flex-row justify-center bg-[#222222]">
      <div className="flex flex-col items-center pt-20">
        <h1
          className={`${kufam_bold.className} text-center text-[4rem] text-[#E2E2E2]`}
        >
          NameNation
        </h1>
        <div className="flex flex-col pt-20">
          <label
            className={`${kufam_bold.className} text-[1.25rem] text-[#E2E2E2]`}
            htmlFor="search"
          >
            Your Name
          </label>
          <input
            className="h-14 w-[35rem] rounded-xl bg-[#E2E2E2] shadow-lg"
            id="search"
            type="text"
          />
        </div>
        <div className="w-[34rem]">
          <ul className="">
            <li className="">Test</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
