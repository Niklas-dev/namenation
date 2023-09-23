"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";

export default function NationItem({
  index,
  nation,
  percentage,
  img_src,
}: {
  index: number;
  nation: string;
  percentage: string;
  img_src: string;
}) {
  const [color, setColor] = useState("");

  const getTextColor = () => {
    let numPercentage = Number(percentage);

    if (numPercentage >= 0) {
      setColor("text-[#D75235]");
    }
    if (numPercentage >= 10) {
      setColor("text-[#D78335]");
    }
    if (numPercentage >= 25) {
      setColor("text-[#D3B92C]");
    }
    if (numPercentage >= 40) {
      setColor("text-[#ADCA3B]");
    }
    if (numPercentage >= 50) {
      setColor("text-[#30C136]");
    }
  };

  useEffect(() => {
    getTextColor();
    return () => {};
  }, []);
  return (
    <li
      className={`font-poppins font-bold nation-item bg-[#222222] cursor-pointer relative h-14 w-72 lg:w-72 flex flex-row justify-between items-center py-2 px-3 rounded-xl`}
    >
      <h3
        className={`font-poppins font-bold text-[1.15rem] pt-1 text-[#D1D1D1] hidden lg:block`}
      >
        {index + 1}.
      </h3>
      <Image
        className="rounded-full w-8 h-8"
        width={50}
        height={50}
        src={img_src}
        alt={`flag_${nation}`}
      />
      <h3
        className={`font-poppins font-bold text-[1.15rem] pt-1 text-[#D1D1D1]  w-24 overflow-clip text-ellipsis`}
      >
        {nation}
      </h3>
      <p
        className={`font-poppins font-bold text-[1.25rem] ${color} bg-[#2E2E2E] rounded-xl px-2 pt-2 pb-[0.25rem]`}
      >
        {percentage}%
      </p>
      <div className="tool-tip hidden absolute right-20 top-1 bg-black text-[#D1D1D1] px-2 py-1 rounded-xl">
        {nation}
      </div>
    </li>
  );
}
