"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  GSDevTools,
  MotionPathPlugin,
  ScrollTrigger,
} from "gsap/all";

import { IconUserCheck, IconBolt, IconSchool } from "@tabler/icons-react";
import ShineBorder from "../ui/shine-border";
import { SixBeamsAnimated } from "../minor/six-beams-animated";

function About() {
  const svgRef = useRef(null);
  const teamMembers = [1, 2, 3, 4];

  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, useGSAP);

  useGSAP(() => {
    const tl = gsap.timeline({});
    const tl2 = gsap.timeline();

    tl.fromTo(
      ".line-svg-path",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 5,
        scrollTrigger: {
          trigger: ".line-svg-path",
          start: "top bottom-=200",
          end: "top center",
          scrub: true,
        },
      },
    );

    tl2.fromTo(
      ".box",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".box",
          start: "top bottom-=150",
          end: "top center",
          scrub: true,
        },
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
          start: "top bottom-=200",
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
          start: "top bottom-=200",
          end: "top center",
          scrub: true,
        },
      },
    );
    tl2.fromTo(
      ".line-svg2",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".line-svg2",
          start: "top bottom-=220",
          end: "top bottom-=220",
          scrub: true,
        },
      },
    );

    tl2.fromTo(
      ".freelance-box",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".freelance-box",
          start: "top bottom-=200",
          end: "top center-=100",
          scrub: true,
        },
      },
    );
  });

  return (
    <div className="section flex w-full flex-col items-center justify-center overflow-clip pt-12">
      <div className="flex flex-col items-center justify-center gap-10 px-6 md:max-w-2xl lg:max-w-4xl lg:flex-row xl:max-w-5xl">
        <div className="tracking-wider lg:w-3/5">
          <h2 className="text-center uppercase lg:text-start">
            Who’s Behind GeekPie?
          </h2>
          <p className="mt-5 text-base leading-relaxed">
            Hi! We’re a small team that loves solving problems with software.
            For years, we’ve been helping startups and small businesses build
            and grow their web apps. People might call us a{" "}
            <span className="bg-zinc-800 p-1">
              &ldquo;software company&ldquo;
            </span>
            , but we like to think of ourselves as problem solvers.{" "}
            <q className="bg-zinc-800 p-1 italic leading-loose">
              First-principle thinking and thinking in inversion are our
              breakfast
            </q>
            . <br />
            We started GeekPie to help businesses create a strong online
            presence with unique web apps that stand out and scale up. Plus, we
            share web development tips—and a bit of fun—on{" "}
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
        <ShineBorder
          className="bg-background relative flex h-[26rem] w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl lg:h-[23rem] lg:w-2/5"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            GeekPie
          </span>
        </ShineBorder>
      </div>
      <div className="relative -z-10 mt-16 flex flex-col items-center justify-center pt-20">
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 800 400"
          className="line-svg2 mr-40 mt-16"
        >
          <path
            d="M379.82061767578125,8.968609809875488C379.9700978597005,11.509715874989828,380.5680185953776,18.983556906382244,380.7174987792969,24.215246200561523C380.8669789632161,29.446935494740803,380.7174987792969,35.276533444722496,380.7174987792969,40.35874557495117C380.7174987792969,45.44095770517985,380.5680236816406,49.92526054382324,380.7174987792969,54.708518981933594C380.8669738769531,59.491777420043945,381.4648742675781,64.72346750895183,381.6143493652344,69.05829620361328C381.7638244628906,73.39312489827473,381.6143493652344,76.53214009602864,381.6143493652344,80.71749114990234C381.6143493652344,84.90284220377605,381.6143493652344,89.387144724528,381.6143493652344,94.17040252685547C381.6143493652344,98.95366032918294,387.1449940999349,113.30343500773112,381.6143493652344,109.41703796386719C376.0837046305339,105.53064092000325,352.91478474934894,75.03737131754558,348.43048095703125,70.85202026367188C343.94617716471356,66.66666920979817,352.6158498128255,80.71748860677083,354.7085266113281,84.304931640625C356.80120340983075,87.89237467447917,358.29595947265625,88.93871180216472,360.9865417480469,92.37667846679688C363.6771240234375,95.81464513142903,365.9192860921224,102.69057846069336,370.8520202636719,104.93273162841797C375.7847544352214,107.17488479614258,386.2481180826823,107.62331899007161,390.58294677734375,105.82959747314453C394.9177754720052,104.03587595621745,394.91779073079425,97.75784683227539,396.8609924316406,94.17040252685547C398.804194132487,90.58295822143555,400.59791056315106,87.44394429524739,402.2421569824219,84.304931640625C403.8864034016927,81.16591898600261,405.23170471191406,77.7279561360677,406.7264709472656,75.3363265991211C408.2212371826172,72.94469706217448,410.463373819987,70.85201644897461,411.21075439453125,69.95515441894531"
            fill="none"
            stroke-width="5"
            stroke="hsl(0, 0%, 80%)"
            stroke-linecap="round"
            stroke-dasharray="10 7"
          ></path>
          <defs>
            <linearGradient id="SvgjsLinearGradient1001">
              <stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop>
              <stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="freelance-box -mt-[12rem] w-full px-6 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <div className="flex w-full flex-col items-center justify-center gap-10 lg:mt-10 lg:flex-row lg:gap-12">
          <div className="w-full bg-gradient-to-b from-neutral-200 to-neutral-300 bg-clip-text text-transparent lg:w-3/5">
            <h3 className="">Plus, Our Freelance Powerhouses</h3>
            <p className="mt-6">
              We also collaborate with exceptionally talented freelancers who
              bring unique skills to our projects when we need to expand our
              external team. We carefully handpick and verify each freelancer
              before they become part of our team. Once they qualify, they join
              us as official freelance partners, ready to jump in when the
              project requires their expertise.
            </p>
          </div>
          <div className="w-full lg:w-2/5">
            <SixBeamsAnimated />
          </div>
        </div>
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
