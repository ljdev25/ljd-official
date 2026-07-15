import Navbar from "@/components/Navbar";
import SustainabilityHero from "@/components/SustainabilityHero";
import InitiativesList from "@/components/InitiativesList";
import SustainabilityCTA from "@/components/SustainabilityCTA";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sustainability Initiatives — LJD Corporation",
  description:
    "LJD Corporation's sustainability initiatives — land restoration at Kayu Madang, plastic waste management and upcycling, and community empowerment through sustainable livelihoods in Sabah.",
};

export default function SustainabilityPage() {
  return (
    <>
      <Navbar />
      <SustainabilityHero />
      <InitiativesList />
      <SustainabilityCTA />
      <Newsletter />
      <Footer />
    </>
  );
}
