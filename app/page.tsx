import EngineeringSection from "@/components/sections/engineering";
import GridSection from "@/components/sections/gridsection";
import Hero from "@/components/sections/hero";
import MainSection from "@/components/sections/mainsection";
import OutLook from "@/components/sections/outlook";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center bg-zinc-50 font-sans" style={{ background: 'var(--background)' }}>

      <Hero />
      <MainSection />
      <EngineeringSection />
      <OutLook />
      <GridSection />

    </div>
  );
}
