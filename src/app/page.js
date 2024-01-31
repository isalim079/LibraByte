import Banner from "@/components/Banner/Banner";
import Arrival from "@/components/Arrival/Arrival";
import BestSelling from "@/components/BestSelling/BestSelling";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import Subscribe from "@/components/Subscribe/Subscribe";

import Footer from "@/components/shared/Footer/Footer";
import TopBanner from "@/components/Home/TopBanner/TopBanner";
import Subscription from "@/components/Subscription/Subscription";
import { ChatBot } from "@/components/ChatBot/ChatBot";
// import ChatBot from '@/components/ChatBot/ChatBot'
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
            <ChatBot />

            <Footer />
        </div>
    );
}
