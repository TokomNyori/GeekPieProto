import React from "react";
import {
  IconAdjustmentsBolt,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconWorldWww,
  IconDeviceMobile,
  IconCloud,
  IconMessageChatbot,
  IconTrendingUp,
  IconSocial,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import FeaturedCard from "../ui/featured-cards";

const features = [
  {
    title: "Website Design and Development",
    description:
      "Create stunning, responsive websites tailored to your vision, designed to engage and convert visitors into loyal customers.",
    icon: <IconWorldWww />,
  },
  {
    title: "Mobile App Design and Development",
    description:
      "Transform your ideas into sleek, user-friendly mobile apps that deliver a seamless experience across all devices.",
    icon: <IconDeviceMobile />,
  },
  {
    title: "Hosting, Deployment, and Maintenance",
    description:
      "Reliable, hassle-free hosting and maintenance that keeps your site running smoothly, so you can focus on your business.",
    icon: <IconCloud />,
  },
  {
    title: "Customer Service Chatbots",
    description:
      "Enhance customer engagement with intelligent chatbots that provide instant, accurate support around the clock.",
    icon: <IconMessageChatbot />,
  },
  {
    title: "Regular Updates and Progress Tracking",
    description:
      "Stay informed with real-time updates and transparent progress tracking every step of the way.",
    icon: <IconTrendingUp />,
  },
  {
    title: "Social Media Marketing",
    description: "Coming soon!",
    icon: <IconSocial />,
  },
];

const Services = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center section">
      <div className=" text-center px-6 max-w-2xl">
        <h2 className="">We take care of it all!</h2>
        <p className="text-lg italic">
          From design to deployment, we handle it all to get your web and mobile
          app launched and ready for action!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-8 max-w-7xl mx-auto px-5 lg:px-0">
        {features.map((feature, index) => (
          <FeaturedCard key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
