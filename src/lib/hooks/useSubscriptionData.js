"use client"
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useSubscriptionData = () => {

    const axiosPublic = useAxiosPublic()

    const { data = [], refetch } = useQuery({
        queryKey: ['pdfBooksData'],
        queryFn: async () => {
            const result = await axiosPublic.get("/subscription/v1")
            return result.data

        },

    })

    const subscriptionData = data

    return [subscriptionData, refetch]


}

export default useSubscriptionData;