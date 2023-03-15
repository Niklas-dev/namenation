import React from "react";
import { Kufam } from "next/font/google";
import Image from "next/image";
const kufam_bold = Kufam({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});
const kufam = Kufam({ weight: "400", style: "normal", subsets: ["latin"] });
export default function NationItem({
  nation,
  percentage,
  img_src,
}: {
  nation: string;
  percentage: string;
  img_src: string;
}) {
  const getTextColor = (percentage: string) => {};
  return (
    <li
      className={`${kufam_bold.className} bg-[#222222] h-14 w-72 lg:w-72 flex flex-row justify-between items-center py-2 px-3 rounded-xl`}
    >
      <Image
        className="rounded-full w-8 h-8"
        width={50}
        height={50}
        src={img_src}
        alt={`flag_${nation}`}
      />
      <h3
        className={`${kufam_bold.className} text-[1.15rem] pt-1 text-[#D1D1D1]`}
      >
        {nation}
      </h3>
      <p
        className={`${kufam_bold.className} text-[1.25rem] text-[#D1D1D1] bg-[#2E2E2E] rounded-xl px-2 pt-2 pb-[0.25rem]`}
      >
        {percentage}
      </p>
    </li>
  );
}
