"use client";

import LeftSideSection from "./LeftSideSection/LeftSideSection";

const Blog = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-10 mb-10">

            {/* Full blog container */}
            <div className="grid grid-cols-3 gap-10">

                {/* Left side section */}
                <div className="">

                    {/* search section */}
                    <div><LeftSideSection /></div>

                    {/* category section */}
                    <div></div>

                    {/* Top post section */}
                    <div></div>

                    {/* Instagram section */}
                    <div></div>
                </div>

                {/* Middle section */}
                <div className="border border-black">post section 1</div>

                {/* Right section */}
                <div className="border border-black">port section 2</div>
            </div>
        </div>
    );
};

export default Blog;
