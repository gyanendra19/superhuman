import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Nav";

export default function Home() {

  return (
    <main className="w-full max-h-screen overflow-hidden">
      <Navbar />
      <HeroSection />
    </main>
  );
}
