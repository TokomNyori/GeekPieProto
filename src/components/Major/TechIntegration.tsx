import Image from "next/image";
import Imgeee from "@/assets/images/test.png";
import IconInfiniteScroll from "../inhouse-ui/icon-infinite-scroll";
import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandFigma,
  IconBrandVercel,
  IconBrandAws,
  IconBrandFramerMotion,
  IconBrandTailwind,
} from "@tabler/icons-react";
import { SiGreensock } from "react-icons/si";

const iconList = [
  {
    icon: <IconBrandNextjs className="" />,
    text: 'Next.js'
  },
];

const images = [
  "next.js.png",
  "react.js.png",
  "aws.png",
  "vercel.png",
  "node.js.png",
  "figma.png",
  "gsap.png",
  "framer-motion.svg",
  "langchain.png",
]

function TechIntegration() {
  return (
    <div className="w-full flex justify-center">
      <IconInfiniteScroll images={images} />
    </div>
  );
}

export default TechIntegration;
