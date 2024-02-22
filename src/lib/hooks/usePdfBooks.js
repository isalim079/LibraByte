"use client"
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const usePdfBooks = () => {
    const axiosPublic = useAxiosPublic()
    
    const { data = [], refetch } = useQuery({
        queryKey: ['pdfBooksData'],
        queryFn: async () => {
            const result = await axiosPublic.get("/booksPdf/v1")
            return result.data
            // setBlogPostData(result.data)
        },
        
      })

      const booksPdf = data
    //   console.log(booksPdf);
      return  [booksPdf, refetch]
};

export default usePdfBooks;