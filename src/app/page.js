import Banner from "@/components/Banner/Banner";
import Arrival from "@/components/Arrival/Arrival";
import BestSelling from "@/components/BestSelling/BestSelling";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <BestSelling></BestSelling>
      <FeatureSection />
      <Arrival />
      <Footer></Footer>
    </div>
  )
}
