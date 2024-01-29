import Banner from "@/components/Banner/Banner";
import Arrival from "@/components/Arrival/Arrival";
import BestSelling from "@/components/BestSelling/BestSelling";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import Subscribe from "@/components/Subscribe/Subscribe";

import Footer from "@/components/shared/Footer/Footer";
import TopBanner from "@/components/Home/TopBanner/TopBanner";
import Subscription from "@/components/Subscription/Subscription";
import NavigationBar from "@/components/shared/NavigationBar/NavigationBar";
import Vision from "@/components/AboutUsPage/Vision/Vision";
import OurValues from "@/components/AboutUsPage/OurValues/OurValues";
import Faq from "@/components/AboutUsPage/FAQ/Faq";
import ContactUs from "@/components/AboutUsPage/ContactUs/ContactUs";
import BookCounter from "@/components/Home/BookCounter/BookCounter";

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
