"use client";

import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "@/app/Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useFindUser = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const { data = [], refetch } = useQuery({
        queryKey: ["usersData"],
        queryFn: async () => {
            const result = await axiosPublic.get("/users/v1");
            const users = result.data;

            const findUser = await users.find(
                (users) => users.email === user.email
            );

            return findUser;
        },
    });
    const findUser = data;
    // console.log(findUser);
    return [findUser, refetch];
};

export default useFindUser;
