import Navbar from "@/components/Navbar";
import WorkshopsHero from "@/components/WorkshopsHero";
import WorkshopHighlights from "@/components/WorkshopHighlights";
import BookWorkshop from "@/components/BookWorkshop";
import WorkshopsCTA from "@/components/WorkshopsCTA";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Workshops — LJD Corporation",
  description:
    "Hands-on workshops from LJD Corporation teaching sustainability, recycling, and upcycling — turning plastic waste into flowers, keychains, and more.",
};

export default function WorkshopsPage() {
  return (
    <>
      <Navbar />
      <WorkshopsHero />
      <WorkshopHighlights />
      <BookWorkshop />
      <WorkshopsCTA />
      <Newsletter />
      <Footer />
    </>
  );
}
