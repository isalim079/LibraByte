import Image from 'next/image';
import React from 'react';

const DetailsTable = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-lightWhite'>

                            <th>Author Name</th>
                            <th>Book Name</th>
                            <th>Book category</th>
                            <th>In stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        {/* <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div> */}
                                        <div>
                                            <Image height={35} width={35} src="https://i.ibb.co/yFwyLH6/young-man-4440953.png"></Image>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">রবীন্দ্রনাথ ঠাকুর</div>
                                        <div className="text-sm opacity-50">কোলকাতা</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                শেষের কবিতা
                                <br />
                                <span className="badge badge-ghost badge-sm">১২/১১/১৯২৭</span>
                            </td>
                            <td>কাব্যগ্রন্থ</td>
                            <th>
                                <button className="btn bg-green-300 px-2 py-1 btn-xs">Accept</button>
                            </th>
                        </tr>
                        {/* row 2 */}
                        <tr>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        {/* <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div> */}
                                        <div>
                                            <Image height={35} width={35} src="https://i.ibb.co/yFwyLH6/young-man-4440953.png"></Image>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">রবীন্দ্রনাথ ঠাকুর</div>
                                        <div className="text-sm opacity-50">কোলকাতা</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                শেষের কবিতা
                                <br />
                                <span className="badge badge-ghost badge-sm">১২/১১/১৯২৭</span>
                            </td>
                            <td>কাব্যগ্রন্থ</td>
                            <th>
                                <button className="btn bg-green-300 px-2 py-1 btn-xs">Accept</button>
                            </th>
                        </tr>



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default DetailsTable;