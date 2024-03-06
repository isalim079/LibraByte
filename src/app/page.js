import Banner from "@/components/Home/Banner/Banner";
import Arrival from "@/components/Home/Arrival/Arrival";
import BestSelling from "@/components/Home/BestSelling/BestSelling";
import FeatureSection from "@/components/Home/FeatureSection/FeatureSection";
import Subscribe from "@/components/Subscribe/Subscribe";
import TopBanner from "@/components/Home/TopBanner/TopBanner";
import ChatBot from '@/components/ChatBot/ChatBot'
import Vision from "@/components/Home/Vision/Vision";
import OurValues from "@/components/Home/OurValues/OurValues";
import Faq from "@/components/Home/FAQ/Faq";
import ContactUs from "@/components/Home/ContactUs/ContactUs";
import NavigationBar from "@/components/shared/NavigationBar/NavigationBar";
import Footer from "@/components/shared/Footer/Footer";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import TopBanner2 from "@/components/Home/TopBanner/TopBanner2";


export default function Home() {

    return (
        <div className="overflow-hidden">
            <NavigationBar />
            {/* <TopBanner /> */}
            <TopBanner2 />
            <BestSelling />
            <Banner />
            {/* <BestAuthor /> */}
            <FeatureSection />
            {/* <NoSSRFeatureSection /> */}
            <Arrival />
            <Vision></Vision>
            <OurValues></OurValues>
            {/* <Subscription /> */}
            <Subscribe />
            <Testimonials />
            <Faq></Faq>
            <ContactUs></ContactUs>
            <ChatBot />
            <Footer />
        </div>
    );
}
