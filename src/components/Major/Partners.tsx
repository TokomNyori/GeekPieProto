import { partners } from "@/data/generalData";
import { partnersType } from "@/types/typeScriptTypes";
import Image from "next/image";
import React from "react";
import { div } from "three/webgpu";

function Partners() {
  return (
    <div className="section flex flex-col justify-center items-center w-full bg-dot-white/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
      <h2 className="px-4 text-center z-10 uppercase">Our Power Partners</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mt-10 items-center mx-auto z-10 px-4">
        {partners.map((partner: partnersType, index) => {
          if (partner.description) {
            return (
              <div key={index} className="flex items-center justify-end space-x-3">
                <div className="">
                  <Image
                    key={index}
                    src={`/partners/${partner.image}`}
                    alt={`"Partner - "${partner.partner}`}
                    width={partner.width}
                    height={partner.height}
                    className="rounded-full w-24"
                  />
                </div>
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
              <Image
                key={index}
                src={`/partners/${partner.image}`}
                alt={`"Partner - "${partner.partner}`}
                width={partner.width}
                height={partner.height}
                className="mx-auto"
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Partners;
