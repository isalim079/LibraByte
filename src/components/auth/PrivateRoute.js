"use client"


import Loading from "../shared/Loading/Loading";
import { AuthContext } from "@/app/Context/AuthProvider";
import { useContext } from "react";
import { redirect, usePathname, useRouter } from "next/navigation";
import { getURL } from "next/dist/shared/lib/utils";





const PrivateRoute = ({children}) => {

    const {user, loading, getLocation} = useContext(AuthContext)

    const path = usePathname()

    // const location = getURL()
    // console.log(location);

    const router = useRouter();

    


    if(loading) {
        return (
            <div>
                <Loading />
            </div>
        )
    }
    
    if(!user) {
        getLocation(path)
        router.push("/login")
        
    }

    return (
        <div>
            {children}
        </div>
    )

};

export default PrivateRoute;