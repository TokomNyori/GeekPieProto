import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiVercel,
  SiGooglegemini,
  SiOpenai,
  SiLangchain,
  SiPytorch,
  SiMeta,
  SiGoogle,
  SiGooglebigquery,
  SiInstagram,
  SiFlutter,
  SiApple,
  SiAndroid,
} from "react-icons/si";
import { TbVectorBezier, TbSeo, TbBrandReactNative } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import {
  brandsLogoType,
  partnersType,
  servicesType,
} from "@/types/typeScriptTypes";

export const partners: partnersType[] = [
  {
    partner: "Kardo Nyigyor",
    image: "kardonyigyor.jpg",
    width: 200,
    height: 200,
    description: "Deputy Speaker of Arunachal Pradesh Legislative Assembly",
  },
  {
    partner: "K3 Gas Service",
    image: "k3gas.svg",
    width: 150,
    height: 170,
  },
  {
    partner: "FDigiTech",
    image: "fdigitech.png",
    width: 180,
    height: 180,
  },
];

export const brandLogos: brandsLogoType[] = [
  {
    key: "brand logo 1",
    brand: "netflix",
    image: "netflix.png",
  },
  {
    key: "brand logo 2",
    brand: "spotify",
    image: "spotify.png",
  },
  {
    key: "brand logo 3",
    brand: "nike",
    image: "nike.png",
  },
  {
    key: "brand logo 4",
    brand: "openAI",
    image: "openai.png",
  },
  {
    key: "brand logo 5",
    brand: "notion",
    image: "notion.png",
  },
  {
    key: "brand logo 6",
    brand: "twitch",
    image: "twitch.png",
  },
  {
    key: "brand logo 7",
    brand: "tiktok",
    image: "tiktok.png",
  },
  {
    key: "brand logo 8",
    brand: "marvel",
    image: "marvel.png",
  },
  {
    key: "brand logo 9",
    brand: "Nvidia",
    image: "nvidia.png",
    className: "md:hidden",
  },
];

export const services: servicesType[] = [
  {
    id: 1,
    title: "Web Design & Development",
    description:
      "Creating sleek, high-performance websites and custom web apps, including SaaS. We specialize in building powerful, tailored solutions that fit your needs.",
    isFuncional: true,
    icons: [
      {
        iconId: "i1",
        icon: <SiVercel className="h-4 w-4" />,
      },
      {
        iconId: "i2",
        icon: <SiNodedotjs className="h-6 w-6 text-green-500" />,
      },
      {
        iconId: "i3",
        icon: <SiNextdotjs className="h-8 w-8" />,
      },
      {
        iconId: "i4",
        icon: <SiReact className="h-6 w-6 text-blue-400" />,
      },
      {
        iconId: "i5",
        icon: <FaAws className="h-4 w-4" />,
      },
    ],
  },
  {
    id: 2,
    title: "Customer Service AI-Powered Chatbots",
    description:
      "Enhance customer support with smart, responsive AI chatbots. We’re experts in crafting intelligent tools that elevate user experiences.",
    isFuncional: true,
    icons: [
      {
        iconId: "i1",
        icon: <SiOpenai className="h-4 w-4" />,
      },
      {
        iconId: "i2",
        icon: <SiGooglegemini className="h-6 w-6 text-blue-500" />,
      },
      {
        iconId: "i3",
        icon: <SiLangchain className="h-8 w-8" />,
      },
      {
        iconId: "i4",
        icon: <TbVectorBezier className="h-6 w-6" />,
      },
      {
        iconId: "i5",
        icon: <SiPytorch className="h-4 w-4 text-orange-400" />,
      },
    ],
  },
  {
    id: 3,
    title: "Mobile App Design & Development",
    description:
      "Developing seamless, user-friendly mobile apps. Our expertise lies in creating powerful apps that engage users and drive growth.",
    isFuncional: false,
    icons: [
      {
        iconId: "i1",
        icon: <TbBrandReactNative className="h-4 w-4 text-blue-400" />,
      },
      {
        iconId: "i2",
        icon: <SiApple className="h-6 w-6" />,
      },
      {
        iconId: "i3",
        icon: <SiFlutter className="h-8 w-8" />,
      },
      {
        iconId: "i4",
        icon: <SiAndroid className="h-6 w-6 text-green-500" />,
      },
      {
        iconId: "i5",
        icon: <FaAws className="h-4 w-4" />,
      },
    ],
  },
  {
    id: 4,
    title: "Social Media Marketing",
    description:
      "Get ready to amplify your brand’s reach with strategic, impactful social media marketing. We’re gearing up.",
    isFuncional: false,
    icons: [
      {
        iconId: "i1",
        icon: <SiGoogle className="h-4 w-4" />,
      },
      {
        iconId: "i2",
        icon: <SiInstagram className="h-6 w-6" />,
      },
      {
        iconId: "i3",
        icon: <SiMeta className="h-8 w-8 text-blue-500" />,
      },
      {
        iconId: "i4",
        icon: <TbSeo className="h-6 w-6" />,
      },
      {
        iconId: "i5",
        icon: <SiGooglebigquery className="h-4 w-4" />,
      },
    ],
  },
];
