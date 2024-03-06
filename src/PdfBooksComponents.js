"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import useAxiosPublic from "./lib/hooks/useAxiosPublic";

export default function PdfBooksComponents(props) {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setLoading(false)
    }
    // console.log(props.pdfBooks);
    const axiosPublic = useAxiosPublic();

    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        axiosPublic
            .get("/booksPdf/v1")
            .then((res) => {
                setBookData(res?.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    // console.log(bookData);

    const filteredData = bookData.find(
        (data) => data?.bookId === props?.pdfBooks
    );
    // console.log(filteredData);

    return (
        <div>
            {loading ? (
                <span className="loading loading-dots loading-sm"></span>
            ) : (
                <Document
                    file={filteredData?.pdfFile ? filteredData?.pdfFile : null}
                    // "http://localhost:5000/uploads/1708094723794CoverLetter.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {Array.apply(null, Array(numPages))
                        .map((x, i) => i + 1)
                        .map((page) => {
                            return (
                                <Page
                                    width={420}
                                    key={page}
                                    pageNumber={page}
                                    renderTextLayer={false}
                                    renderAnnotationLayer={false}
                                />
                            );
                        })}
                </Document>
            )}
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
}
