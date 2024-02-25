"use client";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useAuthorTalks = () => {
    const axiosPublic = useAxiosPublic();

    const { data = [], refetch } = useQuery({
        queryKey: ["authorTalksPostData"],
        queryFn: async () => {
            const result = await axiosPublic.get("/authorTalks/v1");
            return result.data;
        },
    });

    const authorTalksPostData = data;
    //   console.log(authorTalksPostData);
    return [authorTalksPostData, refetch];
};

export default useAuthorTalks;
