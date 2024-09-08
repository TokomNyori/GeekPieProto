import React from "react";
import { Cover } from "@/components/ui/cover";

function Introduction() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 pb-10 pt-3 text-center minxl:pt-10">
      <h1 className="relative z-20 mx-auto mt-6 max-w-7xl bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 bg-clip-text text-xl font-semibold text-transparent dark:from-neutral-800 dark:via-white dark:to-white md:text-2xl lg:text-3xl">
        While some may call us a software company, we prefer to think of
        ourselves as <Cover>problem solvers</Cover>
      </h1>
      {/* <p className="mt-2 italic text-neutral-400">First-principle thinking and thinking in inversion are our breakfast.</p> */}
    </div>
  );
}

export default Introduction;
