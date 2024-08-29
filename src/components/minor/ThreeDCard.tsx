"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { BorderBeam } from "../ui/border-beam";

type ThreeDCardProps = {
  title: string;
  image: string;
  link: string;
};

function ThreeDCard({ title, image, link }: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="mt-4 w-full">
          <Image
            src={`/projectDemos/${image}`}
            height="1000"
            width="1000"
            className="h-80 w-full rounded-xl object-cover object-top group-hover/card:shadow-xl md:h-72"
            alt="thumbnail"
          />
        </CardItem>
        <div className="mt-10 flex items-center justify-between">
          {/* px-4 py-2 rounded-xl text-xs font-normal dark:text-white */}
          <CardItem
            translateZ={20}
            as={Link}
            href={link}
            target="__blank"
            className="flex items-center justify-center gap-x-2 rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
          >
            <div className="h-2 w-2 rounded-full bg-green-500" />
            Live Preview
          </CardItem>
          {/* <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem> */}
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default ThreeDCard;
