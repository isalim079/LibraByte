import Banner from "@/components/Home/Banner/Banner";
import Arrival from "@/components/Home/Arrival/Arrival";
import BestSelling from "@/components/Home/BestSelling/BestSelling";
import FeatureSection from "@/components/Home/FeatureSection/FeatureSection";
import Subscribe from "@/components/Home/Subscribe/Subscribe";

import Footer from "@/components/shared/Footer/Footer";
import TopBanner from "@/components/Home/TopBanner/TopBanner";
import Subscription from "@/components/Home/Subscription/Subscription";
import NavigationBar from "@/components/shared/NavigationBar/NavigationBar";

export default function Home() {
    return (
        <div className="overflow-hidden">
            <NavigationBar />

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
