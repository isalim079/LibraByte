import Banner from "@/components/Home/Banner/Banner";
import Arrival from "@/components/Home/Arrival/Arrival";
import BestSelling from "@/components/Home/BestSelling/BestSelling";
import FeatureSection from "@/components/Home/FeatureSection/FeatureSection";
import Subscribe from "@/components/Subscribe/Subscribe";

import Footer from "@/components/shared/Footer/Footer";
import TopBanner from "@/components/Home/TopBanner/TopBanner";
import Subscription from "@/components/Subscription/Subscription";
import NavigationBar from "@/components/shared/NavigationBar/NavigationBar";
import BookCounter from "@/components/Home/BookCounter/BookCounter";
import Vision from "@/components/Home/Vision/Vision";
import OurValues from "@/components/Home/OurValues/OurValues";
import Faq from "@/components/Home/FAQ/Faq";
import ContactUs from "@/components/Home/ContactUs/ContactUs";

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
            <BookCounter></BookCounter>
            <Vision></Vision>
            <OurValues></OurValues>
            <Subscription />
            {/* <Subscribe /> */}
            <Faq></Faq>
            <ContactUs></ContactUs>
            <Footer />
        </div>
    );
}
