"use client";

import { IoMdCloudUpload } from "react-icons/io";
import useBooksData from "./useBooksData";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Image from "next/image";
import { useState } from "react";

const UploadBooksPdf = () => {
    const [booksData, refetch] = useBooksData();

    const [file, setFile] = useState('')

    const handleUploadPdf = async (e) => {
        e.preventDefault()
        const form = new FormData()
        form.append('file', file)

        
        console.log(file);
    };

    return (
        <div className="max-w-screen-xl mx-auto mt-10 overflow-x-hidden">
            <div>
                {/* Table */}
                <Table>
                    <Thead className="">
                        <Tr
                        // className="border-2 border-b-black border-t-0 border-l-0 border-r-0"
                        >
                            <Th className="text-start py-4 ">Book Name</Th>
                            <Th className="text-start py-4 ">Author Name</Th>
                            <Th className="text-start py-4 ">Book Id</Th>
                            <Th className="text-start py-4 ">Upload Pdf</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {booksData.map((book) => (
                            <Tr key={book._id} className="">
                                <Td className="py-4">
                                    <div className="flex flex-row-reverse justify-end items-center gap-3">
                                        <h3>{book?.name}</h3>
                                        <Image
                                            src={book?.image}
                                            alt={book?.name}
                                            height={50}
                                            width={45}
                                        ></Image>
                                    </div>
                                </Td>
                                <Td className="py-4">{book?.author}</Td>
                                <Td className="py-4">{book?._id}</Td>

                                {/* Pdf upload */}
                                <Td className="py-4">
                                    <form onSubmit={handleUploadPdf}>
                                    <div className="relative">
                                        <button
                                            // onClick={() =>
                                            //     handleUploadPdf(book)
                                            // }
                                           
                                        >
                                            <div className="">
                                                <div className="flex items-center gap-2">
                                                    <IoMdCloudUpload className="text-3xl text-lightBtn hover:text-darkBtn" />
                                                    <p className="">
                                                        Upload Pdf
                                                    </p>
                                                </div>
                                            </div>
                                            <input
                                                type="file"
                                                className="absolute top-0 w-full opacity-0 cursor-pointer right-0"
                                                accept="application/pdf"
                                                onChange={(e) => setFile(e.target.files[0])}
                                                name="pdfFile"
                                            />
                                        </button>
                                    </div>
                                    </form>
                                </Td>
                                {/* --------------- */}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
                {/* --------------------------------- */}
            </div>
        </div>
    );
};

export default UploadBooksPdf;
