import Image from 'next/image';

const AnalyticsCard = () => {

    return (
            <div className='flex justify-between items-center py-3'>

                <div>
                    <Image height={30} width={30} src="https://i.ibb.co/yFwyLH6/young-man-4440953.png"></Image>
                </div> 

                <div>
                    <h1>Jahid Hasan</h1>
                    <p className='text-[#9da1a4] text-[12px]'>Saudi Arabia</p>
                </div>
                
                <div className='flex items-center gap-1'>
                    <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                    <p className='text-green-500 text-[12px] font-semibold'>Active</p>
                </div>
            </div>
     
    );
};

export default AnalyticsCard;