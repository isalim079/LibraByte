import Banner from "@/components/Banner/Banner";
import Arrival from "@/components/Arrival/Arrival";
import BestSelling from "@/components/BestSelling/BestSelling";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import BestAuthor from "@/components/BestAuthor/BestAuthor";
import Subscribe from "@/components/Subscribe/Subscribe";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div>
      <Banner />
      </div>
      <BestSelling />
      <BestAuthor />
      <FeatureSection />
      <Arrival />
      <Subscribe />
    </div>
  )
}
