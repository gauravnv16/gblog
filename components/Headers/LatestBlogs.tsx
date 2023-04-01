"use client"

import { useEffect, useState } from "react";
import { BlogItem } from "../content/BlogItem";

export const LatestBlogs = () => {
    const [blogs, setBlogs] = useState<any>([]);
    useEffect(()=>{
        fetch('/api/blogs').then(
            (res) => res.json()
        ).then(
            (data)=>{
                setBlogs(data.slice(0,2));
            }
        ).catch((err)=>{
            console.log(err);
        })
    },[])

    return(
        <section className="flex flex-col justify-center items-center mt-5">
            <h1 className="text-2xl font-bold">Latest Blogs</h1>
            <section className="flex flex-wrap items-center justify-center ">
            {
                blogs.map((blog:any,i:number)=><BlogItem key={i} blog={blog}/>)
            }
            </section>
        </section>
    )
}