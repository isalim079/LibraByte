import Link from "next/link";

const Categories = () => {
    return (
        <div>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-royalBlue">
                    My Blog
                </h2>
                <div className="border-2 border-customYellow w-[92px] mt-1 mb-5"></div>
            </div>
            <div className=" bg-royalBlue text-slate-400 p-8 rounded-md drop-shadow-lg max-h-[370px]">
            
            <div className="list-none">

                {/* categories */}
                <Link href="/blog/allBlogPost">
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-customYellow hover:py-2 hover:px-3 hover:rounded-md hover:text-royalBlue hover:text-center">
                    All Blog Post
                </li>
                </Link>

                {/* divider */}
                <div className="divider my-2"></div>
               <Link href="/blog/myBlogPost"> 
               <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-customYellow hover:py-2 hover:px-3 hover:rounded-md hover:text-royalBlue hover:text-center">
                    My Post
                </li>
               </Link>

                {/* divider */}
                <div className="divider my-2"></div>
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-customYellow hover:py-2 hover:px-3 hover:rounded-md hover:text-royalBlue hover:text-center">
                    Author Talks
                </li>

                {/* divider */}
                <div className="divider my-2"></div>
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-customYellow hover:py-2 hover:px-3 hover:rounded-md hover:text-royalBlue hover:text-center">
                    Top Post
                </li>

                {/* divider */}
                <div className="divider my-2"></div>
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-customYellow hover:py-2 hover:px-3 hover:rounded-md hover:text-royalBlue hover:text-center">
                    WishList
                </li>
            </div>
        </div>
        </div>
    );
};

export default Categories;
