import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Performers from "@/components/Performers";
import Activities from "@/components/Activities";
import Aftermovie from "@/components/Aftermovie";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Activities />
      <Aftermovie />
      <CTA />
      <Footer />
    </main>
  );
}
