"use client"
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useComplains = () => {

    const axiosPublic = useAxiosPublic()

    const { data = [], refetch } = useQuery({
        queryKey: ['Complains'],
        queryFn: async () => {
            const result = await axiosPublic.get("/complains/v1")
            return result.data

        },

    })

    // console.log(data);

    const Complains = data

    return [Complains, refetch]


}

export default useComplains;