"use client";

import { IoMdCloudUpload } from "react-icons/io";
import useBooksData from "./useBooksData";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Image from "next/image";
import { useState } from "react";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import toast from "react-hot-toast";

const UploadBooksPdf = () => {
    const axiosPublic = useAxiosPublic()
    const [booksData, refetch] = useBooksData();

    const [file, setFile] = useState({});
    const [pdfFile, setPdfFile] = useState('');

    const handlePdfForm = async (e, book) => {
        e.preventDefault();
      
        const form = e.target

        const pdfData = await new Promise((resolve, reject) => {
            const readerPdf = new FileReader()
            readerPdf.readAsDataURL(form.file.files[0])
            readerPdf.onload = () => resolve(readerPdf.result)
            readerPdf.onerror = error => reject(error)
          })

          const pdfFileData = {
            bookId: book?._id,
            pdfFile: pdfData
          }

          axiosPublic
            .post("/booksPdf/v1", pdfFileData)
            .then((res) => {
                // console.log(res.data);
                if (res.data) {
                    toast.success("PDF of this books added successfully");
                    e.target.reset()
                    
                }
            })
            .catch((error) => {
                console.log(error);
            });

        
        // console.log(pdfFileData);




    };

    const handleFileChange = (e, book) => {
        setPdfFile(e.target.files[0]);
        const newFileInputs = { ...file };
        newFileInputs[book._id] = e.target.files[0];
        setFile(newFileInputs);
    };
    // console.log(file);

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
                                    <form
                                        onSubmit={(e) => handlePdfForm(e, book)}
                                        className="flex items-center"
                                        // encType="multipart/form-data"
                                    >
                                        <div className="relative">
                                            <div className="bg-darkBtn py-1 rounded-l-sm px-3">
                                                <div className="">
                                                    <IoMdCloudUpload className="text-3xl text-white " />
                                                </div>
                                            </div>
                                            <input
                                                type="file"
                                                name="file"
                                                className="absolute top-0 w-full cursor-pointer right-0 opacity-0"
                                                // accept="application/pdf"
                                                onChange={(e) =>
                                                    handleFileChange(e, book)
                                                }
                                                
                                            />
                                          
                                        </div>

                                        <div>
                                            <button className="px-3 py-[6px] hover:bg-lightBtn hover:text-white hover:border-none transition-all ease-in-out duration-400  text-royalBlue border border-royalBlue rounded-r-sm">
                                                {file[book?._id]
                                                    ? file[book?._id].name
                                                    : "upload pdf"}
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
