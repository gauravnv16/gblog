"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const BlogItemFulScreen = ({ id }:{id:string}) => {
    const [blog, setBlog] = useState<any>({});

    useEffect(() => {
        fetch(`/api/blogs`)
        .then((res) => res.json())
        .then((data) => {
            const blog = data.find((blog:any) => blog.id === id);
            setBlog(blog);
        }).catch((err) => {
            console.log(err);
        })
    },[])
    return (
        <>
        <section className="flex flex-col justify-center px-2 py-2 rounded m-2">
        <span>
            <Link href="/blogs" className="text-sm bg-gray-200 px-3 py-2 rounded mt-2">
            back
            </Link>
        </span>
        <section className="mt-5">
            <h1 className="text-lg font-bold"
            >{blog.title}</h1>
            <p className="text-xs my-2">{blog.body}</p>
        </section>
        <img src={blog.image} alt={blog.title} className="rounded h-50" />
        </section>
        </>
    )
}