import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

function AdvantageScroll() {
  return (
    <div className="pb-2 overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl md:text-4xl font-semibold text-black dark:text-white capitalize">
              Unfair Advantage over <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                your competitors.
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/test2.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

export default AdvantageScroll;
