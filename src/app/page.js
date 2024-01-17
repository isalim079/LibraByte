import Arrival from "@/components/Arrival/Arrival";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import Subscribe from "@/components/Subscribe/Subscribe";

export default function Home() {
  return (
    <div>
      <h1 className='text-3xl text-center'>LibraByte</h1>
      <FeatureSection />
      <Arrival />
      <Subscribe />
    </div>
  )
}
