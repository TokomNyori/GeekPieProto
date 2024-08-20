import React from "react";
import { BsQuote } from "react-icons/bs";

function About() {
  return (
    <div className="section flex w-full flex-col items-center justify-center">
      <div className="max-w-3xl px-6 text-center tracking-wider">
        <h2 className="uppercase">Who’s Behind GeekPie?</h2>
        <p className="mt-5 text-base leading-relaxed">
          Hi! We’re <span className="bg-zinc-700 p-1">GeekPie</span>, a small
          team that loves solving problems with software. For years, we’ve been
          helping startups and small businesses build and grow their web apps.
          People might call us a{" "}
          <span className="bg-zinc-700 p-1">
            &ldquo;software company&ldquo;
          </span>
          , but we like to think of ourselves as problem solvers.{" "}
          <q className="bg-blue-700 p-1 italic leading-loose">
            First-principle thinking and thinking in inversion are our
            breakfast
          </q>. <br/>
          We started GeekPie to help businesses create a strong online presence
          with unique web apps that stand out and scale up. Plus, we share web
          development tips—and a bit of fun—on{" "}
          <span className="bg-zinc-700 p-1">Instagram</span>.
        </p>
      </div>
    </div>
  );
}

export default About;
