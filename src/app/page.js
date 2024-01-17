import Banner from "@/components/Banner/Banner";
import Arrival from "@/components/Arrival/Arrival";
import BestSelling from "@/components/BestSelling/BestSelling";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import Subscribe from "@/components/Subscribe/Subscribe";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>

      <h1 className='text-3xl text-center'>LibraByte</h1>
      <Banner></Banner>
      <BestSelling></BestSelling>
      <FeatureSection />
      <Arrival />
      <Footer></Footer>
    </div>
  )
}
