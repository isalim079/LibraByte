import Arrival from "@/components/Arrival/Arrival";
import FeatureSection from "@/components/FeatureSection/FeatureSection";

export default function Home() {
  return (
    <div>

      <h1 className='text-3xl text-center'>LibraByte</h1>
      <FeatureSection />
      <Arrival />
      <h1>This is home page </h1>
    </div>
  )
}
