import Banner from "@/components/Banner/Banner";
import Arrival from "@/components/Arrival/Arrival";
import BestSelling from "@/components/BestSelling/BestSelling";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import BestAuthor from "@/components/BestAuthor/BestAuthor";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Banner></Banner>
      <BestSelling></BestSelling>
      <BestAuthor />
      <FeatureSection />
      <Arrival />
    </div>
  )
}
