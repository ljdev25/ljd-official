import Navbar from "@/components/Navbar";
import ShopHero from "@/components/ShopHero";
import ShopGrid from "@/components/ShopGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Shop — LJD Corporation",
  description:
    "Shop handcrafted jewellery made from recycled plastic waste by LJD Corporation. Enquire on WhatsApp to order.",
};

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <ShopHero />
      <ShopGrid />
      <Newsletter />
      <Footer />
    </>
  );
}
