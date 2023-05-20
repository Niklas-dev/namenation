import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", style: "normal", subsets: ["latin"] });
export default function StarOnGithub() {
  return (
    <a
      href={"https://github.com/Niklas-dev/namenation"}
      className={`${poppins.className} text-white underline py-4`}
      target="_blank"
      rel="noopener noreferrer"
    >
      star it on github
    </a>
  );
}
