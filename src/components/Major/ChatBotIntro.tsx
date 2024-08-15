"use client";
import React from "react";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";
import { useScroll, useTransform } from "framer-motion";

function ChatBotIntro() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  // const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  // const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  // const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  // const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.7], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.7], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.7], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.7], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.7], [0, 1.2]);
  const title = "We handle every detail!";
  const description =
    "From design to deployment, we handle it all to get your web and mobile app, including your customer service chatbot, launched and ready for action!";
  return (
    <div
      className="w-full h-[150vh] md:h-[300vh] overflow-clip relative pt-10"
      ref={ref}
    >
      <GoogleGeminiEffect
        title={title}
        description={description}
        className="top-40 lg:top-10"
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}

export default ChatBotIntro;
