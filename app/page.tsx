import Hero from "@/components/sections/hero";
import MainSection from "@/components/sections/mainsection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">

      <Hero />
      <MainSection />
    </div>
  );
}
