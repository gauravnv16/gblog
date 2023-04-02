"use client"

import { useEffect, useState } from "react";
import { BlogItem } from "../content/BlogItem";


export const AllBlogs = (props:any) => {
    const blogs = props.data.reverse();
    const [filteredBlogs, setFilteredBlogs] = useState<any>(props.data.reverse() || []);

    const search = (e:any) => {
        const search = e.target.value;
        const filteredBlogs = blogs.filter((blog:any) => blog.title.toLowerCase().includes(search.toLowerCase()));
        setFilteredBlogs(filteredBlogs);
    }
    // useEffect(()=>{
    //     fetch('/api/blogs').then(
    //         (res) => res.json()
    //     ).then(
    //         (data)=>{
    //             setBlogs(data);
    //             setFilteredBlogs(data);
    //         }
    //     ).catch((err)=>{
    //         console.log(err);
    //     })
    // },[])
    

    return(
        <section className="flex flex-col justify-center items-center mt-5 w-full">
            <h1 className="text-2xl font-bold">All Blogs</h1>
            <section className="flex items-center my-5">
                        <input type="text" className="px-1 py-1 border border-gray-100 text-sm rounded" placeholder="search" onChange={search}/>
                        <button className="text-sm bg-gray-100 px-3 py-1 rounded">
                            search
                        </button>
            </section>
            <section className="flex flex-wrap items-center justify-center ">
            {
                filteredBlogs.map((blog:any,i:number)=><BlogItem key={i} {...blog}/>)
            }
            </section>
        </section>
    )
}