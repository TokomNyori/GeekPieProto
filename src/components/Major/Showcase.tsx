import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BorderBeam } from "../ui/border-beam";
import ThreeDCard from "../minor/ThreeDCard";

function Showcase() {
  return (
    <div className="section flex flex-col justify-center items-center w-full">
      {/* <div className="h-[1px] w-full flex justify-center items-start relative overflow-hidden"><BorderBeam size={250} duration={12} delay={9} /></div> */}
    <h2 className="text-center uppercase">A Glimpse at the <br/> Web Wonders We’ve Crafted</h2>
    <div className="flex justify-center items-center gap-10 flex-wrap px-4 mt-10">
      <ThreeDCard title="K3 Gas Service" image="k3-demo.png" link="https://www.k3gasservice.com/"/>
      <ThreeDCard title="GeekPie AI" image="geekpieai-demo.png" link="https://geekpieai.vercel.app/"/>
    </div>
    </div>
  );
}

export default Showcase;

{
  /* <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br uppercase from-slate-300 to-slate-600 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          A glimpse <br/> 
          at the Web <br/>
          Wonders <br/> 
          We’ve Crafted.
        </motion.h1>
      </LampContainer> */
}
