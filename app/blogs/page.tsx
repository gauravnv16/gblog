// "use client"
import { NavBar } from "@/components/Headers/NavBar";
import { Loader } from "@/components/Loader/Loader";
import { AllBlogs } from "@/components/content/AllBlogs";
import prisma from "@/lib/client";
// import { useEffect, useState } from "react";

export default async function Blogs(){
    
    try{
        const blogs = await prisma.post.findMany({});
        // const [blogs, setBlogs] = useState([]);

        // useEffect(() => {
        //     fetch("/api/blogs")
        //         .then((response) => response.json())
        //         .then((json) => {
        //             setBlogs(json);
        //         }).catch((err)=>{
        //             console.log(err);
        //         });
        // }, []);
    
        return(
            <div>
                <NavBar/>
                <AllBlogs data={blogs}/>
            </div>
        )
    }catch(err){
        return(
            <div>
                <NavBar/>
                <Loader/>
            </div>
        )
    }
}