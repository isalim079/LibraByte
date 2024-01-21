"use client";

import LeftSideSection from "./LeftSideSection/LeftSideSection";
import MiddleSideSection from "./MiddleSideSection/MiddleSideSection";
import RightSideSection from "./RightSideSection/RightSideSection";

const Blog = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-10 mb-10">
            {/* Full blog container */}

            <div className="grid grid-cols-3 gap-10">
                {/* Left side section */}

                <div className="">
                    <LeftSideSection />
                </div>

                {/* Middle section */}
                <div className="">
                    <MiddleSideSection />
                </div>

                {/* Right section */}
                <div className="">
                    <RightSideSection />
                </div>
            </div>
        </div>
    );
};

export default Blog;
