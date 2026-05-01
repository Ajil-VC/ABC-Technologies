import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">

      <Hero />
      <Services />
    </div>
  );
}
