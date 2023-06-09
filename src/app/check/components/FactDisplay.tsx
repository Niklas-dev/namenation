import React from "react";

export default function FactDisplay({ fact }: { fact: string }) {
  return (
    <div className="flex flex-col  justify-center items-center mt-8 pb-4 w-full">
      <h2
        className={`font-poppins font-bold text-[1rem]  lg:text-[1.25rem]  text-[#D1D1D1] text-center`}
      >
        Fact for you
      </h2>
      <div
        className={`font-poppins flex justify-center items-center lg:h-fit text-[1.1rem] bg-[#222222] w-1/2 lg:w-[32rem] h-fit text-[#D1D1D1] text-center rounded-lg  py-2 px-5`}
      >
        {fact}
      </div>
    </div>
  );
}
