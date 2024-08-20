import { partners } from "@/data/GeneralData";
import { partnersType } from "@/types/typeScriptTypes";
import Image from "next/image";
import React from "react";
import { div } from "three/webgpu";

function Partners() {
  return (
    <div className="section relative flex w-full flex-col items-center justify-center bg-dot-white/[0.2]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)] dark:bg-black"></div>
      <h2 className="z-10 px-4 text-center uppercase">Our Power Partners</h2>
      <div className="z-10 mt-10 grid grid-cols-1 items-center gap-10 px-4 md:px-6 md:grid-cols-3 md:gap-6">
        {partners.map((partner: partnersType, index) => {
          if (partner.description) {
            return (
              <div
                key={index}
                className="flex items-center justify-center space-x-3 w-fit mx-auto mt-0 md:mt-2"
              >
                <Image
                  key={index}
                  src={`/partners/${partner.image}`}
                  alt={`"Partner - "${partner.partner}`}
                  width={partner.width}
                  height={partner.height}
                  className="w-24 rounded-full"
                />
                <div className="flex flex-col bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                  <text className="text-lg">Kardo Nyigyor</text>
                  <text className="text-sm italic">
                    &ldquo;Deputy Speaker of <br />
                    Arunachal Pradesh <br />
                    Legislative Assembly&ldquo;
                  </text>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="flex items-center justify-center w-fit mx-auto"
              >
                <Image
                  src={`/partners/${partner.image}`}
                  alt={`"Partner - "${partner.partner}`}
                  width={partner.width}
                  height={partner.height}
                  className=""
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Partners;
