"use client"

import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useBorrowBook = () => {

    const axiosPublic = useAxiosPublic()

    const {data = [], refetch} = useQuery({
        queryKey: ['borrowBookData'],
        queryFn: async () => {
        const borrowData = await axiosPublic.get('/addborrow/v1')
        return borrowData.data
          
        }
    })
    const borrowBooksData = data
    return [borrowBooksData, refetch]

    
};

export default useBorrowBook;