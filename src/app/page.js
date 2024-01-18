import Banner from "@/components/Banner/Banner";
import Arrival from "@/components/Arrival/Arrival";
import BestSelling from "@/components/BestSelling/BestSelling";
import FeatureSection from "@/components/FeatureSection/FeatureSection";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <BestSelling></BestSelling>
      <FeatureSection />
      <Arrival />
    </div>
  )
}
