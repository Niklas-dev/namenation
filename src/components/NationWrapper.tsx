import React from "react";

export default function NationWrapper({ children }: { children: any }) {
  return (
    <div className="w-[40rem] flex flex-row justify-center pt-12">
      <ul className="flex flex-col items-center gap-6 lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-6">
        {children}
      </ul>
    </div>
  );
}
