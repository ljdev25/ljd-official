import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import Products from "@/components/Products";
import Partners from "@/components/Partners";
import Newsroom from "@/components/Newsroom";
import KayuMadang from "@/components/KayuMadang";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Pillars />
      <Products />
      <Partners />
      <Newsroom />
      <KayuMadang />
      <Newsletter />
      <Footer />
    </>
  );
}
