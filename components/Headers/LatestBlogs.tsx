"use client"

import { useEffect, useState } from "react";
import { BlogItem } from "../content/BlogItem";

export const LatestBlogs = (props:any) => {
    const blogs = props.data.reverse().slice(0,3);
    return(
        <section className="flex flex-col justify-center items-center mt-5">
            <h1 className="text-2xl font-bold">Latest Blogs</h1>
            <section className="flex flex-wrap items-center justify-center ">
            {
                blogs.map((blog:any,i:number)=><BlogItem key={i} {...blog}/>)
            }
            </section>
        </section>
    )
}