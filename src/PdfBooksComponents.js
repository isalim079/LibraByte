"use client"
import React from "react"; 
import { useState } from 'react';
import { Document, Page } from 'react-pdf';




export default function PdfBooksComponents(props) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  // console.log(props?.pdfBooks);

  return (
    <div>
      <Document  file=
      {props?.pdfBooks} 
    // "http://localhost:5000/uploads/1708094723794CoverLetter.pdf"
      onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null, Array(numPages)).map((x, i) => i + 1).map(page => {
            return (

                <Page width={420} key={page} pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false} />
            )

        })}
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

