import Image from 'next/image';
import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { GoBookmark } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";




const BookDetails = () => {
    return (
        <div className='bg-lightWhite h-[1200px]'>
            <div className='min-h-[100vh] relative'>
                <div className='flex justify-center items-start px-44 py-20 '>
                    <div className='w-1/2 flex justify-center pl-36 items-center mr-10  h-3/4 z-30'>
                        <Image className='shadow-2xl shadow-black ' src="https://i.ibb.co/PGJqGgx/81-Kjb-Tgd-SL-AC-UF1000-1000-QL80.jpg" alt='book image' height={400} width={300} />
                    </div>
                    <div className='w-1/2  mt-16 mr-16 ml-6'>
                        <h1 className='text-7xl'>Inferno <span className='text-2xl'>- The Ashtonishig Global</span></h1>
                        <h1 className='text-2xl font-semibold pt-8 pb-5'>Dan Brown</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, distinctio perspiciatis asperiores a sit possimus rem necessitatibus. Modi minus quis nulla, iusto delectus architecto quod doloremque odit adipisci atque quam velit nihil rerum libero voluptates!</p>
                    </div>
                </div>
                <div className='bg-white mx-44 min-h-72 absolute top-[450px]'>
                    <div className='flex justify-between items-center'>
                        <div className='w-1/2'>

                        </div>
                        <div className='w-1/2 ml-10 flex justify-between items-center py-8 mr-5 border-b-2'>
                            <button className='bg-darkOliveGreen text-white px-5 py-2 rounded-full flex justify-center items-center'>Start Reading <FiArrowUpRight className='ml-1 text-2xl' /></button>
                            <div className='flex justify-center items-center gap-x-5 mr-24'>
                                <div className='bg-slate-200 p-2 rounded-full cursor-pointer'>
                                    <GoBookmark className='text-2xl' />
                                </div>
                                <div className='bg-slate-200 p-2 rounded-full cursor-pointer'>
                                    <IoShareSocialOutline className='text-2xl' />
                                </div>
                                <div className='bg-slate-200 p-2 rounded-full cursor-pointer'>
                                    <MdOutlineFileDownload className='text-2xl' />
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='p-24 flex justify-between items-center gap-x-20'>
                        <div className='w-6/12'>
                            <h1 className='font-bold text-xl pb-3'>Description</h1>
                            <p> Facilis, laboriosam. Aliquid, est praesentium? Asperiores reprehenderit ex, in dignissimos nemo laborum expedita eligendi unde autem odio est eius quod? Dolor incidunt modi fuga cum, labore accusantium ab accusamus blanditiis, repellendus molestias totam odio .<br />laboriosam sint perspiciatis numquam incidunt dolor cumque, fugit suscipit ducimus natus assumenda saepe at. Molestiae, blanditiis temporibus  quae laboriosam maxime? Dolorem nesciunt provident dignissimos pariatur ullam fugiat fugit libero, repellendus assumenda corrupti neque laboriosam et accusamus sunt?</p>
                            <div className='w-full flex justify-center items-start gap-x-4 py-7'>
                                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className=" w-12 h-12 rounded-full dark:bg-gray-500" />
                                <div>
                                    <h1 className='font-bold'>Dan Brown</h1>
                                    <p className='text-xs pr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quis porro est itaque vitae sed quo saepe assumenda omnis tempore.</p>
                                </div>
                            </div>

                        </div>
                        <div className='w-5/12'>
                            <h1 className='text-lg font-bold'>Editor</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti veritatis odio sed ipsum beatae error, ad velit impedit iure laborum?</p>
                            <br />
                            <br />
                            <h1 className='text-lg font-bold'>Language</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cumque.</p>
                            <br />
                            <br />
                            <h1 className='text-lg font-bold'>Paperback</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium eum molestias similique cumque architecto et, dicta qui nobis porro expedita?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;