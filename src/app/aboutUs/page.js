import Vision from '@/components/Vision/Vision';
import AboutBanner from '@/components/AboutUS/AboutBanner';
import OurValues from '@/components/OurValues/OurValues';
import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <Vision></Vision>
            <OurValues></OurValues>
        </div>
    );
};

export default AboutUs;