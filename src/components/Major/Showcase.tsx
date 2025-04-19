import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BorderBeam } from "../ui/border-beam";
import ThreeDCard from "../minor/ThreeDCard";
import { Button } from "../ui/button";

function Showcase() {
  return (
    <div className="section flex w-full flex-col items-center justify-center">
      {/* <div className="h-[1px] w-full flex justify-center items-start relative overflow-hidden"><BorderBeam size={250} duration={12} delay={9} /></div> */}
      <h2 className="text-center uppercase">
        A Glimpse at the <br /> Web Wonders We’ve Crafted
      </h2>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-10 px-4">
        <ThreeDCard
          title="K3 Gas Service"
          image="k3-demo.png"
          link="https://www.k3gasservice.com/"
        />
        <ThreeDCard
          title="Xvariate AI"
          image="geekpieai-demo.png"
          link="https://geekpieai.vercel.app/"
        />
      </div>

      <Button className="mt-12 bg-transparent" size={"lg"} variant={"outline"}>
        See More
      </Button>
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
