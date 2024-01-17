import Banner from '@/components/Banner/Banner'
import Arrival from "@/components/Arrival/Arrival";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import Footer from '@/components/Footer/Footer'


export default function Home() {
  return (
    <div>
 
      <h1 className='text-3xl text-center'>LibraByte</h1>
      <Banner></Banner> 
      <FeatureSection />
      <Arrival />
      <Footer></Footer> 
    </div>
  )
}
