import React from "react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="flex flex-col items-center  pt-4">
      <h2
        className={`font-poppins text-[1rem] md:text-[1.4rem]  lg:text-[1.8rem] text-[#E2E2E2] text-center  w-[18rem] md:w-[28rem] lg:w-[40rem]`}
      >
        Check the national background of your name, the related age and more!
      </h2>

      <Link
        href="/check"
        className="bg-[#222222] mt-10 px-5  py-2 rounded-xl shadow-lg transition-transform hover:translate-y-1 hover:scale-105"
      >
        <div
          className={`font-poppins font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-[#F7FF00] to-[#DB36A4] text-[1.6rem] text-[#E2E2E2] `}
        >
          Check It
        </div>
      </Link>
    </div>
  );
}
