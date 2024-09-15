"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  IconUserCircle,
  IconMenu2,
  IconBulb,
  IconBrush,
  IconSparkles,
  IconRocket,
  IconSeeding,
} from "@tabler/icons-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import localFont from "next/font/local";
import Image from "next/image";
import Modal from "../modals/Modal";
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

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(() => {
    let lastScrollY = 0;

    const toggleNavbar = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY && lastScrollY > 200) {
        // Scrolling down - hide the navbar
        gsap.to(".main-navbar", { y: "-100%", opacity: 0, duration: 0.5 });
      } else {
        // Scrolling up - show the navbar
        gsap.to(".main-navbar", { y: "0%", opacity: 1, duration: 0.5 });
      }

      // Update the last scroll position
      lastScrollY = currentScrollY;
      console.log("Scrolls:");
      console.log("CurrentScrolls:", currentScrollY);
      console.log("LastScrolls:", lastScrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", toggleNavbar);

    // Cleanup the scroll event listener
    return () => {
      window.removeEventListener("scroll", toggleNavbar);
    };
  });

  return (
    <div
      className={cn(
        "main-navbar fixed inset-x-0 top-3 z-50 mx-auto max-w-2xl px-4 md:px-0",
        className,
      )}
    >
      <Menu setActive={setActive} className="flex justify-between">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full border bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-base tracking-wide text-transparent`}
        >
          <Image src={`/1.png`} height={100} width={100} alt="geekpie logo" />
        </div>
        <div className="shadow-input relative flex justify-center space-x-4">
          <HoveredLink className="hidden md:block" href="/">
            Home
          </HoveredLink>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#">All the BSs</HoveredLink>
              <HoveredLink href="#">Shhhhhh...</HoveredLink>
              <HoveredLink href="#">WTF!!!!</HoveredLink>
              <HoveredLink href="#">Shut your mouth</HoveredLink>
              <HoveredLink href="#">You are brat</HoveredLink>
            </div>
          </MenuItem>
          <HoveredLink href="#">Contact</HoveredLink>
        </div>
        <div className="flex cursor-pointer items-center space-x-1 rounded-full">
          <IconMenu2 className="h-[1.7rem] w-[1.7rem]" />
          <Modal
            title="Choose Your Path"
            trigger={<IconUserCircle className="h-8 w-8" />}
            className="min-w-[90%] max-w-[95%] px-6 minxl:min-w-[40%]"
          >
            <Accountype />
          </Modal>
        </div>
      </Menu>
    </div>
  );
}

export default Navbar;

export const Accountype = () => {
  return (
    <div className="mt-8 grid w-full grid-cols-1 gap-10 minxl:grid-cols-3">
      <button className="general-modal-content flex min-h-24 w-auto flex-col items-center justify-center rounded-xl border border-zinc-800 p-4 transition-colors duration-200 ease-in-out hover:bg-zinc-900">
        <IconRocket className="mb-2" />
        <span className="font-semibold">Visionary</span>
        <span className="text-sm">(Client)</span>
      </button>
      <button className="general-modal-content flex min-h-24 w-auto flex-col items-center justify-center rounded-xl border border-zinc-800 p-4 transition-colors duration-200 ease-in-out hover:bg-zinc-900">
        <IconSparkles className="mb-2" />
        <span className="font-semibold">Creator</span>
        <span className="text-sm">(Freelance Partner)</span>
      </button>
      <button className="general-modal-content flex min-h-24 w-auto flex-col items-center justify-center rounded-xl border border-zinc-800 p-4 transition-colors duration-200 ease-in-out hover:bg-zinc-900">
        <IconSeeding className="mb-2" />
        <span className="font-semibold">Ambassador</span>
        <span className="text-sm">(Referral Partner)</span>
      </button>
    </div>
  );
};
