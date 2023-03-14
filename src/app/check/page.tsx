import React from "react";
import { Kufam } from "next/font/google";
import Image from "next/image";
const kufam_bold = Kufam({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});
const kufam = Kufam({ weight: "400", style: "normal", subsets: ["latin"] });
export default function Check() {
  return (
    <div className="h-screen w-screen flex flex-row justify-center bg-[#181818] overflow-y-scroll">
      <div className="flex flex-col items-center pt-20">
        <h1
          className={`${kufam_bold.className} text-center text-[2.5rem] lg:text-[4rem] text-[#E2E2E2]`}
        >
          NameNation
        </h1>
        <div className="flex flex-col pt-20">
          <label
            className={`${kufam_bold.className} text-[1.15rem] lg:text-[1.25rem] text-[#E2E2E2] text-center`}
            htmlFor="search"
          >
            Your Name
          </label>
          <div className="relative">
            <input
              maxLength={35}
              className={`${kufam_bold.className} relative text-center w-[22rem] lg:w-[42rem] rounded-xl bg-[#E2E2E2] shadow-lg outline-none text-[1.5rem] lg:text-[2rem] px-4 pt-1`}
              id="search"
              type="text"
            />
            <button className="right-4 absolute top-[22%] lg:top-[28%]">
              <svg
                className="-rotate-90 scale-150 transition-transform hover:scale-[1.40] hover:translate-x-1"
                width={24}
                height={24}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#a)">
                  <path
                    d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8Zm0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 10V9c0-.55-.45-1-1-1s-1 .45-1 1v3H9.21c-.45 0-.67.54-.35.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79a.5.5 0 0 0-.35-.85H13Z"
                    fill="#323232"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
        <div className="w-[40rem] flex flex-row justify-center pt-12">
          <ul className="flex flex-col items-center gap-6 lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-6">
            <li
              className={`${kufam_bold.className} bg-[#222222] h-14 w-72 flex flex-row justify-around items-center py-2 px-3 rounded-xl`}
            >
              <Image
                className="rounded-full w-8 h-8"
                width={50}
                height={50}
                src={"https://flagcdn.com/w160/de.png"}
                alt="flag_de"
              />
              <h3
                className={`${kufam_bold.className} text-[1.25rem] pt-1 text-[#D1D1D1]`}
              >
                Germany
              </h3>
              <p
                className={`${kufam_bold.className} text-[1.25rem] text-[#D1D1D1] bg-[#2E2E2E] rounded-xl px-2 pt-2 pb-[0.25rem]`}
              >
                100%
              </p>
            </li>
            <li
              className={`${kufam_bold.className} bg-[#222222] h-14 w-72 flex flex-row justify-around items-center py-2 px-3 rounded-xl`}
            >
              <Image
                className="rounded-full w-8 h-8"
                width={50}
                height={50}
                src={"https://flagcdn.com/w160/de.png"}
                alt="flag_de"
              />
              <h3
                className={`${kufam_bold.className} text-[1.25rem] pt-1 text-[#D1D1D1]`}
              >
                Germany
              </h3>
              <p
                className={`${kufam_bold.className} text-[1.25rem] text-[#D1D1D1] bg-[#2E2E2E] rounded-xl px-2 pt-2 pb-[0.25rem]`}
              >
                100%
              </p>
            </li>
            <li
              className={`${kufam_bold.className} bg-[#222222] h-14 w-72 flex flex-row justify-around items-center py-2 px-3 rounded-xl`}
            >
              <Image
                className="rounded-full w-8 h-8"
                width={50}
                height={50}
                src={"https://flagcdn.com/w160/de.png"}
                alt="flag_de"
              />
              <h3
                className={`${kufam_bold.className} text-[1.25rem] pt-1 text-[#D1D1D1]`}
              >
                Germany
              </h3>
              <p
                className={`${kufam_bold.className} text-[1.25rem] text-[#D1D1D1] bg-[#2E2E2E] rounded-xl px-2 pt-2 pb-[0.25rem]`}
              >
                100%
              </p>
            </li>
            <li
              className={`${kufam_bold.className} bg-[#222222] h-14 w-72 flex flex-row justify-around items-center py-2 px-3 rounded-xl`}
            >
              <Image
                className="rounded-full w-8 h-8"
                width={50}
                height={50}
                src={"https://flagcdn.com/w160/de.png"}
                alt="flag_de"
              />
              <h3
                className={`${kufam_bold.className} text-[1.25rem] pt-1 text-[#D1D1D1]`}
              >
                Germany
              </h3>
              <p
                className={`${kufam_bold.className} text-[1.25rem] text-[#D1D1D1] bg-[#2E2E2E] rounded-xl px-2 pt-2 pb-[0.25rem]`}
              >
                100%
              </p>
            </li>
          </ul>
        </div>
        <div
          className={`${kufam_bold.className} flex justify-center items-center lg:h-20 text-[1.25rem] bg-[#222222] w-1/2 lg:w-[32rem] h-fit text-[#D1D1D1] text-center rounded-lg mt-8 py-1 px-5`}
        >
          The age 46 has been connected to this name.
        </div>

        <div className="flex flex-col justify-center items-center mt-8 pb-4">
          <h2
            className={`${kufam_bold.className} text-[1rem]  lg:text-[1.25rem]  text-[#D1D1D1] text-center`}
          >
            Random Fact about names
          </h2>
          <div
            className={`${kufam_bold.className} flex justify-center items-center lg:h-20 text-[1.25rem] bg-[#222222] w-1/2 lg:w-[32rem] h-fit text-[#D1D1D1] text-center rounded-lg  py-1 px-5`}
          >
            This a random fact about names in general.
          </div>
        </div>
      </div>
    </div>
  );
}
