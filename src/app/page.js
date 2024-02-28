import Menu from "@/components/menu-components/Menu";
import Header from "@/header/Header";
import HeroSection from "@/hero-section/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="w-auto">
        <Header />
        <HeroSection />
      </main>
    </div>
  );
}
