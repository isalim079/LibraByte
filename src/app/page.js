import Banner from "@/components/Banner/Banner";
import Arrival from "@/components/Arrival/Arrival";
import BestSelling from "@/components/BestSelling/BestSelling";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import Subscribe from "@/components/Subscribe/Subscribe";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import TopBanner from "@/components/Home/TopBanner/TopBanner";
import Subscription from "@/components/Subscription/Subscription";

export default function Home() {
    return (
        <div className="overflow-hidden">
            <Navbar />
            <TopBanner />
            <BestSelling />
            <Banner />
            {/* <BestAuthor /> */}
            <FeatureSection />
            <Arrival />
            <Subscription />
            <Subscribe />
            
            <Footer />
        </div>
    );
}
