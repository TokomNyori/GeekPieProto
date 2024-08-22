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
import { IconUserCircle } from "@tabler/icons-react";
import localFont from "next/font/local";
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
  return (
    <div
      className={cn(
        "fixed inset-x-0 top-3 z-50 mx-auto max-w-2xl px-4 md:px-0",
        className,
      )}
    >
      <Menu setActive={setActive} className="flex justify-between">
        <div
          className={`flex h-6 w-6 items-center justify-center rounded-full border bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-base tracking-wide text-transparent`}
        >
          G
        </div>
        <div className="shadow-input relative flex justify-center space-x-4">
          <HoveredLink href="/">Home</HoveredLink>
          <MenuItem setActive={setActive} active={active} item="Shop">
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
        <div>
          <IconUserCircle className="h-7 w-7" />
        </div>
      </Menu>
    </div>
  );
}

export default Navbar;
