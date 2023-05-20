import React from "react";

export default function AgeDisplay({ age }: { age: number }) {
  return (
    <div
      className={`font-poppins font-bold mt-10 h-20 w-1/2 py-2 px-3 rounded-xl text-[1rem] lg:text-[1.25rem] bg-[#222222]  lg:w-[32rem] text-[#D1D1D1] text-center flex flec-col items-center justify-center gap-1`}
    >
      From your name you could be {age} years old.
    </div>
  );
}
