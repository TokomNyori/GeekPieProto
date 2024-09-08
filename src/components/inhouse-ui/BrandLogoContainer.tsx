import { cn } from "@/lib/utils";
import { brandsLogoType } from "@/types/typeScriptTypes";
import Image from "next/image";
import React from "react";

function BrandLogoContainer({ image, brand, key, className }: brandsLogoType) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center space-y-2",
        className,
      )}
      key={key}
    >
      <div className="flex aspect-square h-20 w-20 items-center justify-center rounded-xl bg-white/5 p-2 backdrop-blur-3xl">
        <Image
          src={`/brandLogos/${image}`}
          width={200}
          height={200}
          alt="Logo"
        />
      </div>
      <p className="text-lg capitalize">{brand}</p>
    </div>
  );
}

export default BrandLogoContainer;
