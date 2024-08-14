"use client";
import React, { useEffect, useRef, CSSProperties } from "react";
import Image, { ImageProps } from "next/image";
import { IconProps, Icon } from "@tabler/icons-react";
import { IconType } from "react-icons";

type IconInfiniteScrollProps = {
  images: string[];
};

type ExtendedCSSProperties = CSSProperties & {
  "--position"?: number | string;
};

function IconInfiniteScroll({ images }: IconInfiniteScrollProps) {
  //const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="marquee h-fit">
      <div className="marquee-items">
        {images.map((image: string, index) => (
          <div
            className="image-group"
            key={index}
          >
            <Image
              src={`/logos/${image}`}
              width={200}
              height={200}
              alt={`Logo ${index}`}
              className="img"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="marquee-items">
        {images.map((image: string, index) => (
          <div
            className="image-group"
            key={index}
          >
            <Image
              src={`/logos/${image}`}
              width={100}
              height={100}
              alt={`Logo ${index}`}
              className="img"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default IconInfiniteScroll;
