import Vision from '@/components/Home/Vision/Vision';
import OurValues from '@/components/Home/OurValues/OurValues';
import React from 'react';
import ContactUs from '@/components/Home/ContactUs/ContactUs';
import Faq from '@/components/Home/FAQ/Faq';

const AboutUs = () => {
    return (
        <div>
            
            <Vision></Vision>
            <OurValues></OurValues>
            <Faq />
            <ContactUs />

        </div>
    );
};

export default AboutUs;