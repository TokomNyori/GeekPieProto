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

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-3 inset-x-0  px-4 md:px-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="ShutUp">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#">All the BSs</HoveredLink>
            <HoveredLink href="#">Shhhhhh...</HoveredLink>
            <HoveredLink href="#">WTF!!!!</HoveredLink>
            <HoveredLink href="#">Shut your mouth</HoveredLink>
            <HoveredLink href="#">You are brat</HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink href="#">Contact</HoveredLink>
      </Menu>
    </div>
  );
}

export default Navbar;
