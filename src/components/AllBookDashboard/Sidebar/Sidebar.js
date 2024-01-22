import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/assets/logo/LibraByte.png";
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { FaHome } from "react-icons/fa";
import { IoIosBookmarks } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";




const Sidebar = ({ children }) => {
  return (
    <div className='flex'>
      <div className='fixed w-40 h-screen p-4 bg-lightWhite  flex flex-col justify-between'>
        <div className='flex flex-col items-start'>
          <div className=" px-3">
            <a href="/">
              <Image src={logo} width={100} height={100} alt="logo" />
            </a>
          </div>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link href='/default'>
            <div className=' hover:bg-stone-300 cursor-pointer my-2 p-3 rounded-lg flex gap-2 text-stone-600'>
              <FaHome size={20} /> <p className='text-sm'>Discover</p>
            </div>
          </Link>
          <Link href='/categories'>
            <div className=' hover:bg-stone-300 cursor-pointer my-2 p-3 rounded-lg flex gap-2 text-stone-600'>
              <RxDashboard size={20} /> <p className='text-sm'>Category</p>
            </div>
          </Link>
          <Link href='/mylibrary'>
            <div className=' hover:bg-stone-300 cursor-pointer my-2 p-3 rounded-lg flex gap-2 text-stone-600'>
              <IoIosBookmarks size={20} /> <p className='text-sm'>My Library</p>
            </div>
          </Link>
          <Link href='/default'>
            <div className=' hover:bg-stone-300 cursor-pointer my-2 p-3 rounded-lg flex gap-2 text-stone-600'>
              <FaFileDownload size={20} /> <p className='text-sm'>Download</p>
            </div>
          </Link>
        </div>
      </div>
      <main className='ml-40 w-full'>{children}</main>

    </div>
  );
};

export default Sidebar;