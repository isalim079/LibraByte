"use client";

import Image from "next/image";

import "animate.css";
import classNames from "classnames";
import AuthorPostFieldForm from "./AuthorPostFieldForm/AuthorPostFieldForm";

import useAuthorTalks from "./useAuthorTalks";
import { usePathname } from "next/navigation";
import { RiSearch2Line, RiUser4Line } from "react-icons/ri";
import useFindUser from "@/lib/hooks/useFindUser";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/Context/AuthProvider";

const AuthorTalks = () => {
    const [authorTalksPostData, refetch] = useAuthorTalks();
    const { isAuthor } = useContext(AuthContext)
    const [findUser] = useFindUser();
    // animation
    const textAnimation = classNames(
        "animate__animated",
        "animate__backInLeft"
    );

    const pathName = usePathname()
    // console.log(findUser?.author);


    const [tagsList, setTagList] = useState([])

    const [searchTag, setSearchTag] = useState('')
    // console.log(isAuthor);



    useEffect(() => {
        const tagList = authorTalksPostData.map(auth => auth.authorHashTag.tags)
        const newTagLists = [...new Set(tagList.flatMap(innerArray => innerArray))]
        setTagList(newTagLists);
    }, [authorTalksPostData])

    // console.log(tagsList);

    // console.log(authorTalksPostData.filter(item => (item?.authorHashTag.tags.filter(item => item.toLowerCase().includes("life")))));

    return (
        <div className="bg-bgTexture">
           <div className="px-5 xl:px-0">
             {/* Title */}
             <div className="flex justify-center items-center flex-col pt-28">
                <div className="fixed pt-5 top-10 sm:pt-10  sm:top-5 md:top-8 lg:top-14 shadow-md z-10 bg-royalBlue rounded-md">
                    <h2 className="text-2xl text-center  font-bold text-white ">
                        Author Talks
                    </h2>
                    <div className="">
                        <div className="border-2 border-customYellow w-44 mt-1 mb-5"></div>
                    </div>
                </div>
            </div>

            {/* BreadCrumbs */}

            {
                pathName === "/blog" ? "" :

                    <div className="text-sm breadcrumbs absolute top-24 drop-shadow-sm left-10 hidden md:block">
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/blog">Blog</a>
                            </li>
                            <li>Author Talks</li>
                        </ul>
                    </div>
            }



            {/* --------------------------- */}
            <div className="pt-10 max-w-screen-xl mx-auto rounded-md drop-shadow-lg overflow-y-auto ">
                <AuthorPostFieldForm />


                {/* Search */}

                {/* search function */}
                <div className={`${isAuthor ? `` : `md:mt-14`} mb-10`}>
                    <div >
                        <div className="relative" onChange={(e) => setSearchTag(e.target.value)}>
                            <input
                                type="text"
                                className="w-full md:max-w-[50%]  my-2  h-12 text-sm pl-4 focus:outline-none focus:border-2 focus:border-[#126056]  rounded-md shadow-md shadow-royalBlue/10 border-2 border-lightBtn text-royalBlue"
                                placeholder="Search by tag..."

                            />
                            <div className="absolute top-[22px] md:left-[47%] left-[87%]">
                                <button className="hover:tooltip" data-tip="search">
                                    <RiSearch2Line className="hover:shadow-md hover:shadow-royalBlue/30 hover:rounded-sm hover:p-[1px]" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Display search  */}


                {/* author section */}
                <div>
                    <div>
                        {
                            authorTalksPostData.filter((item) => {
                                if (searchTag.toLowerCase() === '') {
                                    return item;
                                } else {
                                    const tags = item?.authorHashTag?.tags.filter(tag => tag.toLowerCase().includes(searchTag))
                                    if (tags.length > 0) {
                                        return item
                                    }
                                }
                            }).map((author) => (
                                <div key={author?._id}>
                                    <div className="mb-2">
                                        <div className="flex items-center gap-5">
                                            <div>
                                                {
                                                    author?.authorImage ? <Image
                                                        className="rounded-full h-[50px] border-2 border-customYellow"
                                                        src={author?.authorImage}
                                                        width={50}
                                                        height={100}
                                                        alt="image"
                                                    ></Image> : <div><RiUser4Line className="text-2xl" /></div>
                                                }
                                            </div>
                                            <div>
                                                <div>
                                                    <p className="font-bold text-royalBlue text-lg">
                                                        {author?.authorName}
                                                    </p>
                                                    <p className="space-x-3">{(author?.authorHashTag?.tags).map((tag, index) => <span>#{tag}</span>)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={`bg-lightBtn text-white p-3 rounded-b-2xl rounded-tr-2xl px-5 ${textAnimation}`}
                                    >
                                        <h3 className="font-semibold">
                                            {author?.authorTitle}
                                        </h3>
                                        <p className=" text-justify text-slate-200">
                                            {author?.authorPost}
                                        </p>
                                    </div>
                                    <span className="divider"></span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default AuthorTalks;
