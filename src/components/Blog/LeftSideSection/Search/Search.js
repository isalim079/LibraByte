import { CgSearch } from "react-icons/cg";

const Search = () => {
    return (
        <div>
            <div className="relative w-full">
                <div>
                    <input
                        type="text"
                        name="search"
                        id=""
                        placeholder="Search"
                        className="h-12  pl-4 w-full border rounded-md focus:outline-none focus:border-2 focus:border-darkLightWhite bg-lightWhite"
                    />
                </div>
                <div className="absolute top-3 right-5">
                    <button className="">
                        <CgSearch className="text-2xl text-slate-400 hover:text-oliveGreen" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Search;
