"use client"
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useBlogPost = () => {
    const axiosPublic = useAxiosPublic()
    
    const { data = [], refetch } = useQuery({
        queryKey: ['blogPostData'],
        queryFn: async () => {
            const result = await axiosPublic.get("/blogPost/v1")
            return result.data
            // setBlogPostData(result.data)
        },
        
      })

      const blogPost = data
    //   console.log(blogPost);
      return  [blogPost, refetch]
};

export default useBlogPost;