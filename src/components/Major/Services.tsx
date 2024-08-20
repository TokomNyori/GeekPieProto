"use client";
import React from "react";
import {
  IconAdjustmentsBolt,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconWorldWww,
  IconDeviceMobile,
  IconCloud,
  IconMessageChatbot,
  IconTrendingUp,
  IconSocial,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconBolt,
} from "@tabler/icons-react";
import FeaturedCard from "../ui/featured-cards";
import { Cover } from "../ui/cover";
// import { Card } from "../ui/container-scroll-animation";
import {
  CardSkeletonContainer,
  Card,
  CardTitle,
  CardDescription,
  Skeleton,
} from "../ui/ProductCard";
import { services } from "@/data/GeneralData";
import { servicesType } from "@/types/typeScriptTypes";
import ShimmerBtn from "../buttons/shimmer-btn";
import BorderMagicBtn from "../buttons/border-magic-btn";
import { Button } from "../buttons/moving-border";
import FigmaOutlineBtn from "../buttons/figmaOutlineBtn";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Website Design and Development",
    description:
      "Create stunning, responsive websites tailored to your vision, designed to engage and convert visitors into loyal customers.",
    icon: <IconWorldWww />,
  },
  {
    title: "Mobile App Design and Development",
    description:
      "Transform your ideas into sleek, user-friendly mobile apps that deliver a seamless experience across all devices.",
    icon: <IconDeviceMobile />,
  },
  {
    title: "Hosting, Deployment, and Maintenance",
    description:
      "Reliable, hassle-free hosting and maintenance that keeps your site running smoothly, so you can focus on your business.",
    icon: <IconCloud />,
  },
  {
    title: "Customer Service Chatbots",
    description:
      "Enhance customer engagement with intelligent chatbots that provide instant, accurate support around the clock.",
    icon: <IconMessageChatbot />,
  },
  {
    title: "Regular Updates and Progress Tracking",
    description:
      "Stay informed with real-time updates and transparent progress tracking every step of the way.",
    icon: <IconTrendingUp />,
  },
  {
    title: "Social Media Marketing",
    description: "Coming soon!",
    icon: <IconSocial />,
  },
];

const Services = () => {
  return (
    <div className="section relative flex w-full flex-col items-center justify-start bg-grid-small-white/[0.2]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)] dark:bg-black"></div>

      <div className="z-10 max-w-2xl px-6 text-center">
        <h2 className="flex items-center justify-center gap-3 uppercase flex-wrap">
          <span>Our</span>
          <Cover className="flex items-center justify-center gap-x-2">
            Superpowers{" "}
            <IconBolt className="glow-texts inline-block h-10 w-10 animate-pulse text-white" />
          </Cover>
        </h2>
        <p className="mt-4 text-lg italic">
          Crafting sleek web apps, building seamless mobile experiences, and
          creating smart AI chatbots to amplify your brand
        </p>
      </div>
      <div className="relative mt-2 z-10 mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-10 md:gap-6 lg:gap-10 px-5 py-8 md:grid-cols-2 lg:grid-cols-2 lg:px-0">
        {services.map((service: servicesType, index) => (
          <Card key={service.id} className="flex flex-col">
            <CardSkeletonContainer>
              <Skeleton icons={service.icons} />
            </CardSkeletonContainer>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription className="mb-5">{service.description}</CardDescription>
            <div className="mt-auto">
              {/* <button className="py-2 px-5 border border-zinc-400 rounded-lg">
                Select
              </button> */}
              <button
                disabled={!service.isFuncional}
                className={cn(
                  "flex items-center justify-center relative rounded-lg bg-[#e6e5e5] px-8 py-2 font-light text-[#313131] shadow-[0_4px_14px_0_rgb(0,0,0,10%)] transition duration-200 ease-linear hover:shadow-[0_6px_20px_rgba(93,93,93,23%)]",
                  "disabled:bg-[#494949] disabled:text-[#dfdede]",
                )}
              >
                {service.isFuncional ? "Select" : "Coming Soon"}
                <span
                  className={`absolute top-1.5 left-2 h-2 w-2 rounded-full animate-pulse ${service.isFuncional ? "bg-green-500" : "bg-yellow-400"}`}
                />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
