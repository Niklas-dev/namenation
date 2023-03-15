import React from "react";
import { Kufam } from "next/font/google";

const kufam_bold = Kufam({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});
const kufam = Kufam({ weight: "400", style: "normal", subsets: ["latin"] });

export default function NameInput({
  handleNameSubmit,
  setName,
}: {
  handleNameSubmit: () => void;
  setName: (input: string) => void;
}) {
  return (
    <div className="flex flex-col pt-20">
      <label
        className={`${kufam_bold.className} text-[1.15rem] lg:text-[1.25rem] text-[#E2E2E2] text-center`}
        htmlFor="search"
      >
        Your Name
      </label>
      <div className="relative">
        <input
          onSubmit={() => handleNameSubmit()}
          onChange={(e) => setName(e.target.value)}
          maxLength={35}
          className={`${kufam_bold.className} relative text-center w-[22rem] lg:w-[42rem] rounded-xl bg-[#E2E2E2] shadow-lg outline-none text-[1.5rem] lg:text-[2rem] px-4 pt-1`}
          id="search"
          type="text"
        />
        <button
          role="submit button"
          onClick={() => handleNameSubmit()}
          className="right-4 absolute top-[22%] lg:top-[28%]"
        >
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
  );
}
