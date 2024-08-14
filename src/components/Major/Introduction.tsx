import React from "react";
import { Cover } from "@/components/ui/cover";

function Introduction() {
  return (
    <div className="w-full px-6 max-w-4xl mx-auto">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        While some may call us a software company, we prefer to think of
        ourselves as <Cover>problem solvers</Cover>
      </h1>
    </div>
  );
}

export default Introduction;
