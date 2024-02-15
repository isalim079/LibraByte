"use client";

import { IoIosHeartEmpty, IoMdShare } from "react-icons/io";
import { MdOutlineInsertComment, MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { HiMiniUserCircle } from "react-icons/hi2";
import useBlogPost from "@/lib/hooks/useBlogPost";
import { AiFillDelete } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "@/app/Context/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import { usePathname } from "next/navigation";
import { CgSearch } from "react-icons/cg";

const AllBlogPost = () => {
    const { user } = useContext(AuthContext);

    const pathName = usePathname()

    const axiosPublic = useAxiosPublic();

    const [blogPost, refetch] = useBlogPost();
    // console.log(blogPost);

    /* Delete own post */
    const handleDeleteBlogPost = (post) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete this post!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(
                    `/blogPostDelete/v1/${post._id}`
                );
                if (res.status === 200) {
                    refetch();

                    Swal.fire({
                        title: "Deleted!",
                        text: "Post has been deleted.",
                        icon: "success",
                    });
                }
            }
        });
    };


    /* Pagination */

    const [currentPage, setCurrentPage] = useState(1);

    /* how many content you want to show in one page */
    const [blogPostPerPage] = useState(10);

    // console.log(currentPage);

    /* total data */
    const indexOfLastBlogPageData = currentPage * blogPostPerPage;

    /* data from where it will be shown. page 2 will exclude 1st 10 data, page 3 will exclude 1st 20 data */
    const indexOfFirstBlogPageData =
        indexOfLastBlogPageData - blogPostPerPage;

    /* splice by excluding data */
    const currentPageBlogPostData = blogPost.slice(
        indexOfFirstBlogPageData,
        indexOfLastBlogPageData
    );

    const pageNumbers = [];

    /* divide numbers will be how many pages you want to show in one page */

    for (let i = 1; i <= Math.ceil(blogPost.length / 10); i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    /* managing previous click */

    const handlePreviousClick = () => {
        if (currentPage > 0 && currentPage - 1 !== 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    /* managing Next click */

    const handleNextClick = () => {
        if (currentPage > 0 && currentPage + 1 !== pageNumbers.length + 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="bg-bgTexture">
            <div className=" pt-20 pb-10 md:pt-28 max-w-screen-xl mx-auto">
                {/* Title */}
                <div className="flex justify-center items-center flex-col ">
                    <div className="fixed pt-10 shadow-md z-10 bg-royalBlue rounded-md">
                        <h2 className="text-2xl text-center  font-bold text-white ">
                            All Post
                        </h2>
                        <div className="">
                            <div className="border-2 border-customYellow w-32 mt-1 mb-5"></div>
                        </div>
                    </div>
                </div>
                {/* --------------------------- */}

                 {/* BreadCrumbs */}

            {
                pathName === "/blog" ? "" :

                    <div className="text-sm breadcrumbs absolute top-24 drop-shadow-sm left-10">
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/blog">Blog</a>
                            </li>
                            <li>All Post</li>
                        </ul>
                    </div>
            }



            {/* --------------------------- */}


            {/* Search */}

            {/* <div className="relative w-full">
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
            </div> */}

            {/* ---------------- */}


                <div className=" rounded-md">
                    <div>
                        {currentPageBlogPostData.map((blogPost) => (
                            <div
                                key={blogPost?.name}
                                className=" text-royalBlue drop-shadow-sm mt-10"
                            >
                                <div>
                                    <div className="flex justify-between items-center pb-2 ">
                                        <h3 className="font-semibold text-xl text-royalBlue">
                                            {blogPost?.name}
                                        </h3>
                                        {
                                            blogPost?.image ? <div><img className="w-14 rounded-full" src={blogPost?.image} alt="" /></div> : <div><HiMiniUserCircle className="text-6xl" /></div>
                                        }
                                    </div>
                                    <div className="border border-customYellow mt-1 mb-3"></div>
                                    <h4 className="font-semibold ">
                                        {blogPost?.bookName}
                                    </h4>
                                    <p className="text-justify text-royalBlue">
                                        {blogPost?.bookReview}
                                    </p>
                                </div>
                                <div className="mt-3 flex gap-3 justify-end">
                                    <IoIosHeartEmpty className="text-2xl" />
                                    <IoMdShare className="text-2xl" />
                                    <MdOutlineInsertComment className="text-2xl" />
                                    {blogPost?.email === user?.email ? (
                                        <div>
                                            <button
                                                onClick={() =>
                                                    handleDeleteBlogPost(
                                                        blogPost
                                                    )
                                                }
                                            >
                                                <AiFillDelete className="text-2xl" />
                                            </button>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pagination */}

            {/* If borrow books data is more than 5, then data will be shown. otherwise not. */}

            {blogPost.length > blogPostPerPage ? (
                <div className="pb-20">
                    <ul className="flex items-center gap-10 text-xl font-semibold justify-center mt-10">
                        {/* previous button */}
                        <button className="btn-5">
                            <MdSkipPrevious
                                onClick={() => handlePreviousClick()}
                                className="text-3xl border border-royalBlue rounded-full p-[2px]  hover:bg-royalBlue hover:text-white"
                            />
                        </button>

                        {/* This is the logic for slice. I give an example
                
                slice(0, 7) => shows 1 to 7
                slice(1, 8) => shows 2 to 8
                slice(2, 9) => shows 3 to 9

                so, default current page is 1. If we minus 1 from current page. It will be 0 and if we plus 6, it will be 7. our 1st example.
                in second, if our current page is 2, then current page - 1 will be 2 and current page + 6 will be 8. our 2nd example. 
                
                */}

                        {/* If user clicks number 2 or other then it will show */}
                        {currentPage !== 1 && pageNumbers.length > 7 ? (
                            <>
                                {pageNumbers.slice(0, 1).map((number) => (
                                    <li key={number}>
                                        <button
                                            onClick={() => paginate(number)}
                                            className={
                                                currentPage === number
                                                    ? "bg-royalBlue text-white px-2 py-1 rounded-md -translate-y-1 shadow-lg transition-all duration-400 ease-in-out"
                                                    : ""
                                            }
                                        >
                                            {number}
                                        </button>
                                    </li>
                                ))}
                            </>
                        ) : (
                            ""
                        )}

                        {/* ... condition */}

                        {currentPage !== 1 && pageNumbers.length > 7 ? (
                            <li>...</li>
                        ) : (
                            ""
                        )}
                        {/* pages */}
                        {pageNumbers
                            .slice(
                                pageNumbers.length > 7 ? currentPage - 1 : 0,
                                currentPage + 6
                            )
                            .map((number) => (
                                <li key={number}>
                                    <button
                                        onClick={() => paginate(number)}
                                        className={
                                            currentPage === number
                                                ? "bg-royalBlue text-white px-2 py-1 rounded-md -translate-y-1 shadow-lg transition-all duration-400 ease-in-out"
                                                : ""
                                        }
                                    >
                                        {number}
                                    </button>
                                </li>
                            ))}

                        {pageNumbers.length > 7 &&
                            currentPage <= pageNumbers.length - 6 && (
                                <li>...</li>
                            )}

                        {pageNumbers.length > 7 ? (
                            <button>{pageNumbers.length}</button>
                        ) : (
                            ""
                        )}

                        {/* next button */}

                        <button>
                            <MdSkipNext
                                onClick={() => handleNextClick()}
                                className="text-3xl border border-royalBlue rounded-full p-[2px] hover:bg-royalBlue hover:text-white"
                            />
                        </button>
                    </ul>
                </div>
            ) : (
                ""
            )}

        </div>
    );
};

export default AllBlogPost;
