
const OurValues = () => {
    return (
        <div className="bg-bgTexture">
            <div className="mx-8 md:mx-28 lg:mx-[180px] py-16">
            <h1 className="text-4xl text-center font-semibold">Our Values</h1>
            <h6 className="md:text-lg text-base text-textLightWhite text-center">Empowering Connections: Our Guiding Principles</h6>
            {/* <div className="divider divider-neutral w-96 md:w-72 lg:w-96 mx-auto my-2"></div> */}
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="">
                    <img src="https://i.ibb.co/mRQL6sF/brainstorming-1319789.png" alt="Shoes" className=" skeleton w-28 p-8 rounded-full mx-auto bg-[#F9DCA2]"/>
                    <div className="text-center">
                        <h1 className="font-semibold text-xl pt-6 pb-2">Knowledge Sharing</h1>
                        <p className="text-royalBlue text-justify">Connect, collaborate, and explore together – our platform is a hub for diverse minds to share knowledge and ideas.</p>
                    </div>
                </div>
                <div className="">
                    <img src="https://i.ibb.co/SQMPy4g/shield-13624486.png" alt="Shoes" className=" skeleton w-28 p-8 rounded-full mx-auto bg-[#F9DCA2]" />
                    <div className="text-center">
                        <h1 className="font-semibold text-xl pt-6 pb-2">Data Security and Privacy</h1>
                        <p className="text-royalBlue text-justify">Your privacy matters. We employ top-notch encryption for a secure and confidential user experience.</p>
                    </div>
                </div>
                <div className="">
                    <img src="https://i.ibb.co/BCcjS0s/blended-learning-11832863.png" alt="Shoes" className=" skeleton w-28 p-8 rounded-full mx-auto bg-[#F9DCA2]" />
                    <div className="text-center">
                        <h1 className="font-semibold text-xl pt-6 pb-2">Education and Learning</h1>
                        <p className="text-royalBlue text-justify">Fuel your curiosity with our educational resources - from curated reading lists to interactive courses, we're dedicated to lifelong learning.</p>
                    </div>
                </div>
                <div className="">
                    <img src="https://i.ibb.co/C9YPd58/team-3633449.png" alt="Shoes" className=" skeleton w-28 p-8 rounded-full mx-auto bg-[#F9DCA2]" />
                    <div className="text-center">
                        <h1 className="font-semibold text-xl pt-6 pb-2">Community building</h1>
                        <p className="text-royalBlue text-justify">Join a vibrant community of learners and enthusiasts; together, we foster connections and celebrate a shared passion for literature and knowledge.</p>
                    </div>
                </div>
                <div className="">
                    <img src="https://i.ibb.co/gjP1yJL/learning-11152664.png" alt="Shoes" className=" skeleton w-28 p-8 rounded-full mx-auto bg-[#F9DCA2]" />
                    <div className="text-center">
                        <h1 className="font-semibold text-xl pt-6 pb-2">Sustainability and Responsibility</h1>
                        <p className="text-royalBlue text-justify">Green practices are woven into our DNA, from paperless initiatives to eco-friendly partnerships, ensuring responsible and sustainable library management.</p>
                    </div>
                </div>
                <div className="">
                    <img src="https://i.ibb.co/HK5vgGZ/efficiency-7973948.png" alt="Shoes" className=" skeleton w-28 p-8 rounded-full mx-auto bg-[#F9DCA2]" />
                    <div className="text-center">
                        <h1 className="font-semibold text-xl pt-6 pb-2">Continuous Improvement</h1>
                        <p className="text-royalBlue text-justify">We thrive on innovation. Your feedback drives our continuous improvement, keeping us agile and at the forefront of technology for an ever-enhanced user experience.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default OurValues;