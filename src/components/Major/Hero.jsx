import Link from "next/link";
import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { Button } from "../buttons/moving-border";
import dynamic from "next/dynamic";
import { globeConfig, sampleArcs } from "@/data/globeData";
import { StarsBackground } from "../ui/stars-background";
import { ShootingStars } from "../ui/shooting-stars";
import TailwindConnectBtn from "../buttons/tailwindConnectBtn";
import { IconBrandReact, IconCode } from "@tabler/icons-react";
import { HoverBorderGradient } from "@/components/buttons/hover-border-gradient";
import localFont from "next/font/local";
import clsx from "clsx";
import { cn } from "@/lib/utils";
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
    <div className="minxl:py:0 relative flex h-auto w-full flex-col-reverse items-center justify-between overflow-hidden rounded-md py-10 minxl:h-screen minxl:flex-row minxl:items-center minxl:justify-between">
      <ShootingStars />
      <StarsBackground />
      <Spotlight
        className="-top-24 left-0 minxl:-top-20 minxl:left-[32rem]"
        fill="#ffd590"
      />
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_-75%,black)]"></div> */}
      <div className="relative z-10 mt-2 w-full p-4 px-6 text-center minxl:ml-10 minxl:mt-0 minxl:px-8 minxl:text-start">
        <TailwindConnectBtn text="Introducing GeekPie" className="mb-4" />
        <h1
          className={cn(
            `bg-gradient-to-b from-yellow-50 to-neutral-500 bg-clip-text py-1 text-4xl font-bold uppercase text-transparent md:text-[3.5rem] md:leading-none`,
            proxmaNova.className,
          )}
        >
          Cutting-Edge Apps. <br /> Stunning Design.
        </h1>
        <p
          className={cn(
            "mx-auto mb-5 mt-4 max-w-lg text-base font-normal text-neutral-200 md:text-lg minxl:mx-0",
            proxmaNova.className,
          )}
        >
          We craft web and mobile apps that deliver real results and help your
          business grow. No Chatter. No BS. Just Results.
        </p>
        <Button className="">Chat GeekPIe AI</Button>

        <div className="mt-10 animate-pulse text-neutral-300 minxl:hidden">
          Backed by
          <IconCode className="mx-1 inline text-white" stroke={1} />
          Computer Science
        </div>
      </div>
      <div className="relative mt-14 flex h-80 w-full items-start justify-center md:mt-0 md:h-[36rem] minxl:h-[100%]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex h-40 w-full select-none items-center justify-center">
          <p
            className={cn(
              "animate-pulse bg-gradient-to-b from-neutral-300 to-neutral-500 bg-clip-text text-base capitalize text-transparent",
              proximaNovaCondensedBold.className,
            )}
          >
            We work globally
          </p>
        </div>
        <div className="absolute bottom-0 z-10 h-[21rem] w-full p-0 md:h-[95%] md:w-[95%] minxl:bottom-2 minxl:h-[95%] minxl:w-[95%]">
          {/* <World data={sampleArcs} globeConfig={globeConfig} /> */}
          <Scene />
        </div>
      </div>
      <div className="absolute bottom-10 z-30 mx-auto hidden w-full text-center text-neutral-300 minxl:block">
        Backed by
        <IconCode className="mx-1 inline text-white" stroke={1} />
        Computer Science
      </div>
    </div>
  );
}

export default Hero;
