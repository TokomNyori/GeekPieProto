import Image from "next/image";
import Hero from "@/components/Major/Hero"
import AdvantageScroll from "@/components/Major/AdvantageScroll";
import Introduction from "@/components/Major/Introduction";
import Services from "@/components/Major/Services";
import TechIntegration from "@/components/Major/TechIntegration";

export default function Home() {
  return <main className="min-h-screen antialiased">
    <Hero/>
    <Introduction/>
    <AdvantageScroll/>
    <TechIntegration/>
    <Services/>
    
  </main>;
}
