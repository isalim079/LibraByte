import Image from 'next/image';
import React from 'react';

const Projects = () => {
    return (
        <div className='bg-white rounded-md p-4'>

        <div className='flex justify-between items-center'>

            <div>
                <h3 className='text-xl font-semibold'>Projects</h3>

                <div className='flex py-1 items-center gap-1 lg:gap-3'>
                    <h2 className='font-bold md:text-xl'>205</h2>
                    <span className='text-[#68B8A1] font-bold text-[13px]'>+11.92%</span>
                </div>

                <p className='text-[#9da1a4] text-[13px]'>All Projects</p>
            </div>

            <div className='md:pl-2'>
                <Image height={40} width={40} src="https://i.ibb.co/jkgDJFx/blueprint-11594791.png"></Image>
            </div>

        </div>
    </div>
    );
};

export default Projects;