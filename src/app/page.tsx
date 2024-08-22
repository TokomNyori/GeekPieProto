import Image from "next/image";
import Hero from "@/components/Major/Hero";
import AdvantageScroll from "@/components/Major/AdvantageScroll";
import Introduction from "@/components/Major/Introduction";
import Services from "@/components/Major/Services";
import TechIntegration from "@/components/Major/TechIntegration";
import ChatBotIntro from "@/components/Major/ChatBotIntro";
import FeaturedSection from "@/components/Major/FeaturedSection";
import Partners from "@/components/Major/Partners";
import Showcase from "@/components/Major/Showcase";
import { BorderBeam } from "@/components/ui/border-beam";
import About from "@/components/Major/About";

export default function Home() {
  return (
    <main className="min-h-screen antialiased">
      <Hero />
      <Introduction />
      <AdvantageScroll />
      <TechIntegration />
      <FeaturedSection />
      <Partners />
      <Showcase/>
      <Services />
      <About/>
      <div className="h-96"></div>
    </main>
  );
}
