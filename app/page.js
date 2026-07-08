import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Designs from "@/components/sections/Designs";
import LongForm from "@/components/sections/LongForm";
import TalkingHeads from "@/components/sections/TalkingHeads";
import Vlogs from "@/components/sections/Vlogs";
import Cinematics from "@/components/sections/Cinematics";
import About from "@/components/sections/About";
import SoftwareScroller from "@/components/sections/SoftwareScroller";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="bg-[#050b2f]">
      <Navbar />
      <Hero />
      <Designs />
      <LongForm />
      <TalkingHeads />
      <Vlogs />
      <Cinematics />
      <About />
      <SoftwareScroller />
      <Skills />
    </main>
  );
}