<<<<<<< HEAD
import Image from 'next/image'
=======
import Banner from "@/components/Banner/Banner";
import Arrival from "@/components/Arrival/Arrival";
import BestSelling from "@/components/BestSelling/BestSelling";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import Footer from "@/components/Footer/Footer";
import Subscribe from "@/components/Subscribe/Subscribe";
>>>>>>> be32fb5e2093fe1078ee3e9e81e864ec49ce30be

export default function Home() {
  return (
    <div>
<<<<<<< HEAD
      <h1 className='text-3xl text-center'>LibraByte</h1>
      <p>This will be your home page and main Brunch ch</p>
=======
 
      <h1 className='text-3xl text-center'>LibraByte</h1>
      <Banner></Banner> 
      <BestSelling></BestSelling>
      <FeatureSection />
      <Arrival />
      <Footer></Footer> 
>>>>>>> be32fb5e2093fe1078ee3e9e81e864ec49ce30be
    </div>
  )
}

