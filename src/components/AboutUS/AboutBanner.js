import React from 'react';

const AboutBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse -z-10">
                    <img src="https://i.ibb.co/xHNdd0V/vecteezy-web-developer-and-seo-optimization.jpg" className="md:max-w-lg rounded-md" />
                    <div>
                        <h1 className="text-5xl font-bold">Explore More About Our Dedicated Team!</h1>
                        <p className="py-6">
                            Delve into the exceptional talents and diverse expertise of our dedicated team as you uncover the driving force behind our collective success and unwavering commitment to excellence. Discover the individuals who bring passion and innovation to every project, shaping the foundation of our collaborative success.</p>
                        <button className="btn bg-[#333D2E] text-white">Explore Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;