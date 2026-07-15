import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import OurStory from "@/components/OurStory";
import MissionVision from "@/components/MissionVision";
import AboutCTA from "@/components/AboutCTA";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us — LJD Corporation",
  description:
    "LJD Corporation is an accredited social enterprise in Sabah, Malaysia, transforming plastic waste into tourism products while restoring land and empowering marginalised communities.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <OurStory />
      <MissionVision />
      <AboutCTA />
      <Newsletter />
      <Footer />
    </>
  );
}
