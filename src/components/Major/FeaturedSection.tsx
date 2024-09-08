"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconTrendingUp,
  IconCloud,
  IconCpu,
  IconPalette,
  IconMessage,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { brandLogos } from "@/data/GeneralData";
import BrandLogoContainer from "../inhouse-ui/BrandLogoContainer";

function FeaturedSection() {
  return (
    <div className="section flex w-full flex-col items-center justify-start">
      <div className="mb-10 max-w-2xl px-6 text-center">
        <h2 className="uppercase">Why We’re Awesome!</h2>
        <p className="mt-2 text-lg italic">
          From industry-standard tech to top-notch support, we take care of
          everything, so you can sit back and watch your project come to life.
        </p>
      </div>
      <BentoGrid className="mx-auto mb-16 max-w-4xl px-4 md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>

      <div className="max-w-2xl px-6 text-center">
        <p>
          We use the same technologies and tech stacks that power the websites
          and apps of companies like Netflix, Spotify, Twitch, and more—bringing
          the industry’s best to your projects.
        </p>
        <div className="relative mx-auto mt-10 grid grid-cols-3 items-center justify-center gap-6 md:grid-cols-4">
          {brandLogos.map((brand, index) => (
            <BrandLogoContainer
              image={brand.image}
              brand={brand.brand}
              key={brand.key}
              className={brand.className}
            />
          ))}
          <div className="glow absolute inset-0 -z-10 aspect-square h-[90%] w-full max-w-xl rounded-full bg-blue-400/25 blur-3xl filter" />
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="mt-10 grid grid-cols-3 md:grid-cols-4 gap-6 mx-auto justify-center items-center">
          {brandLogos.map((brand, index) => (
            <BrandLogoContainer
              image={brand.image}
              brand={brand.brand}
              key={brand.key}
            />
          ))}
        </div> */
}

export default FeaturedSection;

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      <motion.div
        variants={variants}
        className="flex flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <div className="h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
        <div className="h-4 w-full rounded-full bg-gray-100 dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="ml-auto flex w-3/4 flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <div className="h-4 w-full rounded-full bg-gray-100 dark:bg-neutral-900" />
        <div className="h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <div className="h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
        <div className="h-4 w-full rounded-full bg-gray-100 dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex h-4 w-full flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-neutral-100 p-2 dark:border-white/[0.2] dark:bg-black"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2 rounded-lg bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex h-full min-h-[6rem] w-full flex-1 flex-row space-x-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      <motion.div
        variants={first}
        className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black"
      >
        <Image
          src="/images/profile-pic1.png"
          alt="avatar"
          height="100"
          width="100"
          className="h-10 w-10 rounded-full"
        />
        <p className="mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm">
          Pixel-perfect designs, every time.
        </p>
        <p className="mt-4 rounded-full border border-red-500 bg-red-100 px-2 py-0.5 text-xs text-red-600 dark:bg-red-900/20">
          Sharp
        </p>
      </motion.div>
      <motion.div className="relative z-20 flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black">
        <Image
          src="/images/profile-pic.png"
          alt="avatar"
          height="100"
          width="100"
          className="h-10 w-10 rounded-full"
        />
        <p className="mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm">
          Smooth animations, buttery UX.
        </p>
        <p className="mt-4 rounded-full border border-green-500 bg-green-100 px-2 py-0.5 text-xs text-green-600 dark:bg-green-900/20">
          Fluid
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black"
      >
        <Image
          src="/images/profile-pic2.png"
          alt="avatar"
          height="100"
          width="100"
          className="h-10 w-10 rounded-full"
        />
        <p className="mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm">
          Colors that pop and wow.
        </p>
        <p className="mt-4 rounded-full border border-orange-500 bg-orange-100 px-2 py-0.5 text-xs text-orange-600 dark:bg-orange-900/20">
          Vibrant
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      <motion.div
        variants={variants}
        className="flex flex-row items-start space-x-2 rounded-2xl border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <Image
          src="/images/profile-pic.png"
          alt="avatar"
          height="100"
          width="100"
          className="h-10 w-10 rounded-full"
        />
        <p className="text-sm text-neutral-500 md:text-xs">
          Hey, can you make the app icon bigger on mobile? It’s looking too
          small compared to the text.....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="ml-auto flex w-3/4 flex-row items-center justify-end space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <p className="text-sm text-neutral-500 md:text-xs">Sure thing!</p>
        <div className="h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Industry-standard Tech, Every Time",
    description: (
      <span className="text-base md:text-sm">
        We use the tech trusted by Netflix, Spotify, and OpenAI.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconCpu className="h-6 w-6 text-neutral-500 md:h-4 md:w-4" />,
  },
  {
    title: "Real-Time Updates & Tracking",
    description: (
      <span className="text-sm">
        We keep you in the loop, always. No surprises, just progress.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconTrendingUp className="h-6 w-6 text-neutral-500 md:h-4 md:w-4" />,
  },
  {
    title: "Hosting, deployment & maintenance",
    description: (
      <span className="text-sm">
        We’ll get your web/mobile app out there fast and keep it running like a
        dream.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconCloud className="h-6 w-6 text-neutral-500 md:h-4 md:w-4" />,
  },
  {
    title: "Stunning Designs & Flawless Apps",
    description: (
      <span className="text-sm">
        Make heads turn with stunning designs and apps that just work.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconPalette className="h-6 w-6 text-neutral-500 md:h-4 md:w-4" />,
  },

  {
    title: "Support That’s Got Your Back",
    description: (
      <span className="text-sm">
        We’re here, ready to help, whenever you need us.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconMessage className="h-6 w-6 text-neutral-500 md:h-4 md:w-4" />,
  },
];
