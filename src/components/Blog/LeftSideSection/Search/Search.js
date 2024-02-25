import useBlogPost from "@/lib/hooks/useBlogPost";
import { useState } from "react";
import { CgSearch } from "react-icons/cg";

const Search = () => {

    const [blogPost, refetch] = useBlogPost()
    
    const [searchTag, setSearchTag] = useState('')

    return (
        <div>
            <div className="relative w-full">
                <div onChange={(e) => setSearchTag(e.target.value)}>
                    <input
                        type="search"
                        name="search"
                        placeholder="Search by keyword..."
                        id=""
                        className="h-12  pl-4 w-full border rounded-md focus:outline-none focus:border-2 focus:border-customYellow bg-royalBlue drop-shadow-lg text-white"
                    />
                </div>
                <div className="absolute top-3 right-5">
                    <button className="">
                        <CgSearch className="text-2xl text-slate-400 hover:text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Search;
