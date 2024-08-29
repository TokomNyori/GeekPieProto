import Link from "next/link";
import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { Button } from "../buttons/moving-border";
import dynamic from "next/dynamic";
import { globeConfig, sampleArcs } from "@/data/globeData";
import { StarsBackground } from "../ui/stars-background";
import { ShootingStars } from "../ui/shooting-stars";
import TailwindConnectBtn from "../buttons/tailwindConnectBtn";
import { IconBrandReact, IconCode } from '@tabler/icons-react';
import { HoverBorderGradient } from "@/components/buttons/hover-border-gradient";
import localFont from "next/font/local";
import clsx from "clsx";
const proxmaNova = localFont({
  src: [
    {
      path: "../../assets/fonts/proxima-nova/ProximaNovaBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../assets/fonts/proxima-nova/ProximaNovaBoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../assets/fonts/proxima-nova/ProximaNovaSemibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../assets/fonts/proxima-nova/ProximaNovaSemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../assets/fonts/proxima-nova/ProximaNovaRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/proxima-nova/ProximaNovaRegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../assets/fonts/proxima-nova/ProximaNovaLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../assets/fonts/proxima-nova/ProximaNovaLightItalic.otf",
      weight: "300",
      style: "italic",
    },
  ],
  display: "swap",
});

const proximaNovaCondensedBold = localFont({
  src: [
    {
      path: "../../assets/fonts/proxima-nova/ProximaNovaCondensedBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});

const Scene = dynamic(() => import("@/components/test/Scene"), {
  ssr: false,
});

function Hero() {
  //dark:bg-grid-white/[0.2] bg-grid-black/[0.2]
  return (
    <div className="h-auto minxl:h-screen w-full rounded-md flex flex-col-reverse minxl:flex-row justify-between items-center minxl:justify-between minxl:items-center overflow-hidden relative py-10 minxl:py:0 ">
      <ShootingStars />
      <StarsBackground />
      <Spotlight
        className="-top-10 left-0 minxl:left-0 minxl:-top-20"
        fill="white"
      />
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_-75%,black)]"></div> */}
      <div className="relative w-full z-10 p-4 px-6 minxl:px-8 text-center minxl:text-start mt-2 minxl:ml-10 minxl:mt-0">
        <TailwindConnectBtn text="Introducing GeekPie" className="mb-4" />
        <h1 className={clsx(`font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 uppercase text-4xl md:leading-none md:text-[3.5rem] py-1`, proxmaNova.className)}>
          Cutting-Edge Apps. <br /> Stunning Design.
        </h1>
        <p className="mt-4 mb-5 font-normal text-base md:text-lg text-neutral-200 mx-auto minxl:mx-0 max-w-lg">
          We craft web and mobile apps that deliver real results. No Calls. No BS. Just Results.
        </p>
        <Link className="" href={"#"}>
          <Button className="">
            Chat GeekPIe AI
          </Button>
        </Link>
      </div>
      <div className="relative h-80 md:h-[36rem] minxl:h-[100%] w-full flex justify-center items-start mt-14 md:mt-0">
        {/* <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-20" /> */}
        <div className="absolute w-full h-80 md:w-[95%] md:h-[95%] minxl:w-[95%] minxl:h-[95%] bottom-0 minxl:bottom-2 z-10 p-0">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
      <div className="absolute z-30 bottom-2 minxl:bottom-10 text-center mx-auto w-full text-neutral-300">
        Backed by
        <IconCode className="inline mx-1 animate-pulse text-white" stroke={1} />
        Computer Science
      </div>
    </div>
  );
}

export default Hero;
