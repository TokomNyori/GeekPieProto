import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

function AdvantageScroll() {
  return (
    <div className="overflow-hidden pb-8">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl font-semibold capitalize text-black dark:text-white md:text-4xl">
              Unfair Advantage over <br />
              <span className="mt-1 text-4xl font-bold leading-none md:text-[6rem]">
                your competitors.
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/ipad-image.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto h-full rounded-2xl object-cover object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

export default AdvantageScroll;
