"use client";


import LeftSideSection from "./LeftSideSection/LeftSideSection";
import MiddleSideSection from "./MiddleSideSection/MiddleSideSection";
import RightSideSection from "./RightSideSection/RightSideSection";

const Blog = () => {
    return (
        <div className="max-w-screen-xl mx-auto pt-24 md:pt-28 mb-10 overflow-x-hidden">
            {/* Full blog container */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
                {/* Left side section */}

                <div className="p-3 lg:p-0">
                    <LeftSideSection />
                </div>

                {/* Middle section */}
                <div className="p-3 lg:p-0">
                    <MiddleSideSection />
                </div>

                {/* Right section */}
                <div className="p-3 lg:p-0">
                    <RightSideSection />
                </div>
            </div>
        </div>
    );
};

export default Blog;
