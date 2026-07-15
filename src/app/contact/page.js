import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import ContactSection from "@/components/ContactSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us — LJD Corporation",
  description:
    "Get in touch with LJD Corporation — Sabah Creative Economy And Innovation Centre (SCENIC), Kota Kinabalu, Sabah. Email info@ljdofficial.com or chat with us on WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactSection />
      <Newsletter />
      <Footer />
    </>
  );
}
