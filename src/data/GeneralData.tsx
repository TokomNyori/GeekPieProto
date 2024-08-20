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
import { partnersType, servicesType } from "@/types/typeScriptTypes";

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
        icon: <SiVercel className="w-4 h-4" />,
      },
      {
        iconId: "i2",
        icon: <SiNodedotjs className="w-6 h-6 text-green-500" />,
      },
      {
        iconId: "i3",
        icon: <SiNextdotjs className="w-8 h-8" />,
      },
      {
        iconId: "i4",
        icon: <SiReact className="text-blue-400 w-6 h-6" />,
      },
      {
        iconId: "i5",
        icon: <FaAws className="w-4 h-4" />,
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
        icon: <SiOpenai className="w-4 h-4" />,
      },
      {
        iconId: "i2",
        icon: <SiGooglegemini className="w-6 h-6 text-blue-500" />,
      },
      {
        iconId: "i3",
        icon: <SiLangchain className="w-8 h-8" />,
      },
      {
        iconId: "i4",
        icon: <TbVectorBezier className="w-6 h-6" />,
      },
      {
        iconId: "i5",
        icon: <SiPytorch className="w-4 h-4 text-orange-400" />,
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
        icon: <TbBrandReactNative className="w-4 h-4 text-blue-400" />,
      },
      {
        iconId: "i2",
        icon: <SiApple className="w-6 h-6" />,
      },
      {
        iconId: "i3",
        icon: <SiFlutter className="w-8 h-8" />,
      },
      {
        iconId: "i4",
        icon: <SiAndroid className="w-6 h-6 text-green-500" />,
      },
      {
        iconId: "i5",
        icon: <FaAws className="w-4 h-4" />,
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
        icon: <SiGoogle className="w-4 h-4" />,
      },
      {
        iconId: "i2",
        icon: <SiInstagram className="w-6 h-6" />,
      },
      {
        iconId: "i3",
        icon: <SiMeta className="w-8 h-8 text-blue-500" />,
      },
      {
        iconId: "i4",
        icon: <TbSeo className="w-6 h-6" />,
      },
      {
        iconId: "i5",
        icon: <SiGooglebigquery className="w-4 h-4" />,
      },
    ],
  },
];
