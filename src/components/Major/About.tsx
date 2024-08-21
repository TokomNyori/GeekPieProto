"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  DrawSVGPlugin,
  GSDevTools,
  MotionPathPlugin,
  ScrollTrigger,
} from "gsap/all";

import { IconUserCheck, IconBolt, IconSchool } from "@tabler/icons-react";

function About() {
  const svgRef = useRef(null);
  const teamMembers = [1, 2, 3, 4];

  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin, useGSAP);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".line-svg-path",
        start: "top bottom",
        end: "bottom center",
        scrub: true,
      },
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".box",
        start: "top center+=150",
        end: "top center",
        scrub: true,
      },
    });

    tl.fromTo(
      ".line-svg-path",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 5,
      },
    );

    tl2.fromTo(
      ".box",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
      },
    );
    tl2.fromTo(
      ".box2",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".box2",
          start: "top center+=150",
          end: "top center",
          scrub: true,
        },
      },
    );
    tl2.fromTo(
      ".box3",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".box3",
          start: "top center+=150",
          end: "top center",
          scrub: true,
        },
      },
    );
  });

  return (
    <div className="section flex w-full flex-col items-center justify-center overflow-clip pt-12">
      <div className="max-w-3xl px-6 text-center tracking-wider">
        <h2 className="uppercase">Who’s Behind GeekPie?</h2>
        <p className="mt-5 text-base leading-relaxed">
          Hi! We’re <span className="bg-zinc-800 p-1">GeekPie</span>, a small
          team that loves solving problems with software. For years, we’ve been
          helping startups and small businesses build and grow their web apps.
          People might call us a{" "}
          <span className="bg-zinc-800 p-1">
            &ldquo;software company&ldquo;
          </span>
          , but we like to think of ourselves as problem solvers.{" "}
          <q className="bg-blue-800 p-1 italic leading-loose">
            First-principle thinking and thinking in inversion are our breakfast
          </q>
          . <br />
          We started GeekPie to help businesses create a strong online presence
          with unique web apps that stand out and scale up. Plus, we share web
          development tips—and a bit of fun—on{" "}
          <Link
            href={`https://www.instagram.com/geekpie.in/`}
            target="_blank"
            className="bg-zinc-800 p-1"
          >
            Instagram
          </Link>
          .
        </p>
      </div>
      <div className="relative mb-[25rem] mt-16 flex flex-col items-center justify-center py-20">
        <div className="box absolute left-[14.3rem] top-3 flex items-start justify-start space-x-2 rounded-full">
          <div className="w-24">
            <Image
              src={`/images/profile-pic.png`}
              width={200}
              height={200}
              alt="test pic"
              className=""
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <p className="ml-1 text-lg">Tokom Nyori</p>
            <div className="flex flex-col space-y-0.5 text-sm">
              <p className="flex items-center gap-x-1">
                <IconUserCheck className="h-5 w-5" /> Self-taught Software
                Engineer
              </p>
              <p className="flex items-center gap-x-1">
                <IconSchool className="h-5 w-5" /> BA in Economics
              </p>
              <p className="flex items-center gap-x-1">
                <IconBolt className="h-5 w-5" /> Chief Problem Solver
              </p>
            </div>
          </div>
        </div>
        <div className="box2 absolute left-[16.7rem] top-[14.5rem] flex flex-row-reverse items-start justify-start space-x-3 space-x-reverse">
          <div className="w-24 rounded-full">
            <Image
              src={`/images/profile-pic.png`}
              width={200}
              height={200}
              alt="test pic"
              className=""
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <p className="ml-1 text-lg">Femi Omojuwa</p>
            <div className="flex flex-col items-start space-y-0.5 text-sm">
              <p className="flex items-center gap-x-1">
                <IconUserCheck className="h-5 w-5" />
                Software/Cloud Engineer
              </p>
              <p className="flex items-center gap-x-1">
                <IconSchool className="h-5 w-5" /> BSc in Computer Science
              </p>
              <p className="flex items-center gap-x-1">
                <IconBolt className="h-5 w-5" /> Operations Maestro
              </p>
            </div>
          </div>
        </div>
        <div className="box3 absolute left-[15rem] top-[29rem] flex items-start justify-start space-x-2 rounded-full">
          <div className="w-24">
            <Image
              src={`/images/profile-pic.png`}
              width={200}
              height={200}
              alt="test pic"
              className=""
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <p className="ml-1 text-lg">Karim Amar</p>
            <div className="flex flex-col space-y-0.5 text-sm">
              <p className="flex items-center gap-x-1">
                <IconUserCheck className="h-5 w-5" /> Software Engineer/Designer
              </p>
              <p className="flex items-center gap-x-1">
                <IconSchool className="h-5 w-5" /> Bsc in Computer Science
              </p>
              <p className="flex items-center gap-x-1">
                <IconBolt className="h-5 w-5" /> Tech Wizard
              </p>
            </div>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 800 400"
          width={800}
          height={400}
          className="line-svg"
        >
          <path
            d="M276.6816101074219,8.071748733520508C276.6816101074219,11.838565063476562,276.6816101074219,19.730942153930663,276.6816101074219,26.90583038330078C276.6816101074219,34.0807186126709,276.32286376953124,36.412557983398436,276.6816101074219,43.946189880371094C277.0403564453125,51.47982177734375,277.9372253417969,56.68161315917969,278.475341796875,64.57398986816406C279.0134582519531,72.46636657714843,278.6547058105469,76.59192962646485,279.3721923828125,83.40807342529297C280.0896789550781,90.22421722412109,278.8340759277344,92.37668304443359,282.0627746582031,98.65470886230469C285.2914733886719,104.93273468017578,289.23765869140624,109.59640960693359,295.51568603515625,114.79820251464844C301.79371337890626,119.99999542236328,306.636767578125,121.61434478759766,313.4529113769531,124.6636734008789C320.26905517578126,127.71300201416015,321.7040283203125,128.4304946899414,329.5964050292969,130.0448455810547C337.48878173828126,131.65919647216796,343.94618530273436,132.1973114013672,352.914794921875,132.7354278564453C361.88340454101564,133.27354431152344,366.188330078125,132.7354278564453,374.439453125,132.7354278564453C382.690576171875,132.7354278564453,385.5605407714844,132.7354278564453,394.17041015625,132.7354278564453C402.7802795410156,132.7354278564453,407.98207397460936,132.5560546875,417.4888000488281,132.7354278564453C426.9955261230469,132.91480102539063,432.7354309082031,131.30045471191406,441.70404052734375,133.63229370117188C450.6726501464844,135.9641326904297,454.43947143554686,140.2690643310547,462.33184814453125,144.39462280273438C470.22422485351564,148.52018127441406,474.7085266113281,149.5964111328125,481.1659240722656,154.2600860595703C487.6233215332031,158.92376098632812,490.49327392578124,160.35873718261718,494.61883544921875,167.71299743652344C498.74439697265626,175.0672576904297,499.8206359863281,182.06277465820312,501.7937316894531,191.03138732910156C503.76682739257814,200,503.9461975097656,204.66368408203124,504.48431396484375,212.55606079101562C505.0224304199219,220.4484375,505.3811767578125,223.67713012695313,504.48431396484375,230.49327087402344C503.587451171875,237.30941162109374,502.8699584960938,240.35873413085938,500,246.6367645263672C497.1300415039062,252.914794921875,497.3094116210938,257.21974182128906,490.134521484375,261.8834228515625C482.9596313476562,266.54710388183594,474.70850830078126,267.6233337402344,464.12554931640625,269.9551696777344C453.54259033203124,272.28700561523436,447.2645690917969,272.6457458496094,437.2197265625,273.5426025390625C427.1748840332031,274.4394592285156,423.94617919921876,273.54259033203124,413.9013366699219,274.439453125C403.856494140625,275.33631591796876,399.9103088378906,276.77130737304685,386.9955139160156,278.02691650390625C374.0807189941406,279.28252563476565,361.52467041015626,280.00001220703126,349.3273620605469,280.7174987792969C337.1300537109375,281.4349853515625,333.5426086425781,279.1031433105469,326.00897216796875,281.6143493652344C318.4753356933594,284.12555541992185,317.04034423828125,288.0717346191406,311.6591796875,293.2735290527344C306.27801513671875,298.47532348632814,301.7937316894531,300.6278015136719,299.1031494140625,307.6233215332031C296.4125671386719,314.61884155273435,298.5650146484375,320.7174987792969,298.2062683105469,328.2511291503906C297.84752197265624,335.7847595214844,297.66815795898435,338.11658935546876,297.3094177246094,345.2914733886719C296.9506774902344,352.466357421875,296.2331970214844,356.23317260742186,296.4125671386719,364.12554931640625C296.59193725585936,372.01792602539064,297.8475280761719,380.62779541015624,298.2062683105469,384.75335693359375"
            fill="none"
            stroke-width="4"
            stroke="hsl(0, 0%, 80%)"
            stroke-linecap="round"
            stroke-dasharray="11 6"
            className="line-svg-path"
          ></path>
          <defs>
            <linearGradient id="SvgjsLinearGradient1000">
              <stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop>
              <stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default About;

const TeamCard = () => {
  return (
    <div
      className={
        "relative w-72 rounded-lg bg-zinc-900 p-5 text-center shadow-lg"
      }
    >
      <Image
        src={"/images/profile-pic.png"}
        alt={`tri`}
        width={200}
        height={200}
        className={`mx-auto mb-4 h-24 w-24 rounded-full object-cover`}
      />
      <h3 className={`mb-2 text-xl font-semibold`}>Tokom Nyori</h3>
      <p className={`text-gray-600`}>Software Engineer</p>
    </div>
  );
};
