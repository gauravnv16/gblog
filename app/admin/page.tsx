"use client"

import { NavBar } from "@/components/Headers/NavBar";
import { Loader } from "@/components/Loader/Loader";
import { Nav } from "@/components/admin/Nav";
import { Blogs } from "@/components/blogs/Blogs";
import { Users } from "@/components/users/Users";
import prisma from "@/lib/client";
import { useEffect, useState } from "react";

export default function Home() {

    try{
        const [blogCount,setBlogCount] = useState(0); 
        const [blogs,setBlogs] = useState<any>([]);
        const [userCount,setUserCount] = useState(0);
        const [users,setUsers] = useState<any>([]);
        

        useEffect(() =>{
            fetch("/api/admin/blogs",{
                method: "POST"
            }).then(res => res.json()).then(data => {
                setBlogs(data.posts);
                setBlogCount(data.postCount);
            }).catch(err => console.log(err));


            fetch("/api/admin/users",{
                method: "POST"
            }).then(res => res.json()).then(data => {
                setUsers(data.users);
                setUserCount(data.userCount);
            }
            ).catch(err => console.log(err));


        },[]);
        return (
        <>
        <NavBar/>
        <main className="flex flex-col justify-center  w-full p-5 items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <span className="text-sm">Welcome to the admin dashboard</span>
    
        <span className="flex justify-between border bg-green-100 p-5 my-2 mt-10" style={{
            width: "300px"
        }}>
            <h1 className="text-sm ">
                Total blog Posts 
            </h1>
            <h1 className="text-sm ">
            { blogCount }
            </h1>
        </span>
        <span className="flex justify-between border bg-orange-100 p-5 my-2" style={{
            width: "300px"
        }}>
            <h1 className="text-sm">
                Total Users 
            </h1>
            <h1 className="text-sm ">
                { userCount }
            </h1>
        </span>
            {
                (blogs.length > 0 && users.length > 0)?<Nav blogs={blogs} users={users}/>:<Loader/>
            }
        </main>
        </>
      )
    }catch(err){
        return <>
        <NavBar/>
        <Loader/>
        </>
    }
}