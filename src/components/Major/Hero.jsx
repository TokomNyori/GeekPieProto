import Link from "next/link";
import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { Button } from "../ui/moving-border";
import dynamic from "next/dynamic";
import { globeConfig, sampleArcs } from "@/data/globeData";
import { StarsBackground } from "../ui/stars-background";
import { ShootingStars } from "../ui/shooting-stars";
import TailwindConnectBtn from "../ui/tailwindConnectBtn";
import { IconBrandReact, IconCode } from '@tabler/icons-react';
import localFont from "next/font/local";
import clsx from "clsx";
const formulaCondensed = localFont({
  src: [
    {
      path: "../../assets/fonts/FormulaCondensedBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../assets/fonts/FormulaCondensedLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../assets/fonts/FormulaCondensedRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/FormulaCondensedUltralight.otf",
      weight: "100",
      style: "normal",
    },
  ],
  display: "swap",
});

const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});

function Hero() {
  //dark:bg-grid-white/[0.2] bg-grid-black/[0.2]
  return (
    <div className="h-auto lg:h-screen w-full rounded-md flex flex-col-reverse lg:flex-row justify-between items-center lg:justify-between lg:items-center overflow-hidden relative py-10 lg:py:0 ">
      <ShootingStars />
      <StarsBackground />
      <Spotlight
        className="-top-10 left-0 lg:left-0 lg:-top-20"
        fill="white"
      />
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_-75%,black)]"></div> */}
      <div className="relative w-full z-10 p-4 px-6 lg:px-8 text-center lg:text-start mt-2 lg:ml-10 lg:mt-0">
        <TailwindConnectBtn text="Introducing GeekPie" className="mb-4" />
        <h1 className={clsx(`font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 text-4xl md:text-6xl py-1`)}>
          Cutting-Edge Apps. <br /> Stunning Design.
        </h1>
        <p className="mt-4 mb-4 font-normal text-base md:text-lg text-neutral-200 mx-auto lg:mx-0 max-w-lg">
          We craft web and mobile apps that deliver real results and fuel your business growth. No Calls. No BS. Just Results.
        </p>
        <Link className="" href={"#"}>
          <Button className="">
            Chat GeekPIe AI
          </Button>
        </Link>
      </div>
      <div className="relative h-80 md:h-[36rem] lg:h-[100%] w-full flex justify-center items-start mt-14 md:mt-0">
        {/* <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-20" /> */}
        <div className="absolute w-full h-80 md:w-[95%] md:h-[95%] lg:w-[95%] lg:h-[95%] bottom-0 lg:bottom-2 z-10 p-0">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
      <div className="absolute z-30 bottom-3 lg:bottom-10 text-center mx-auto w-full text-neutral-300">
        Backed by
        <IconCode className="inline mx-1" stroke={1} />
        Computer Science
      </div>
    </div>
  );
}

export default Hero;
