"use client";

import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useBooksData = () => {
    const axiosPublic = useAxiosPublic();

    const { data = [], refetch } = useQuery({
        queryKey: ["booksData"],
        queryFn: async () => {
            const result = await axiosPublic.get("/books");
            return result.data;
        },
    });

    const booksData = data;
    //   console.log(blogPost);
    return [booksData, refetch];
};

export default useBooksData;
