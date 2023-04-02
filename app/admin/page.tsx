"use client"
import { NavBar } from "@/components/Headers/NavBar";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Home() {
    const [blogCount, setBlogCount] = useState(0);
    const [blogs, setBlogs] = useState<any>([]);
    const [users, setUsers] = useState<any>([]);

    const [userCount, setUserCount] = useState(0);
    const Blogs = () => {
        return     <section 
        className="flex flex-col justify-center items-center mt-5 w-full" style={{
            maxWidth: "500px"
        }}
    >
        <section className="flex justify-between items-center my-5 w-full">
            <h1 className="text-2xl font-bold my-2">Blogs</h1>
            <section className="flex items-center my-5">
                <input type="text" className="px-1 py-1 border border-gray-100 text-sm rounded" placeholder="search" />
                <button className="text-sm bg-gray-100 px-3 py-1 rounded">
                    search
                </button>
            </section>
        </section>
        <section className="w-full mb-5">
            <Link href="/admin/create">
                <span className="text-sm bg-blue-100 px-3 py-1 rounded">
                    <i className="fas fa-plus mr-2"></i>
                    Add New Blog
                </span>
            </Link>
        </section>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col"
                        className="text-sm p-1"
                    >S.NO</th>
                    <th scope="col"
                        className="text-sm p-1"
                    >Title</th>
                    <th scope="col"
                    className="text-sm p-3"
                    >Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    blogs.map((blog:any,i:number)=>{
                        return(
                            <tr key={i}>
                                <th scope="row"
                                    className="text-sm p-2"
                                >{i+1}</th>
                                <td
                                    className="text-sm p-2"
                                >{blog.title.slice(0,20) + "..."}</td>
                                <td
                                    className="text-sm p-5"
                                >
                                    <Link href={`/admin/edit/${blog.id}`}>
                                        <span className="text-xs bg-blue-100 px-3 py-1 rounded">
                                            <i className="fas fa-edit mr-2"></i>
                                            Edit
                                        </span>
                                    </Link> 
                                    <p className="text-xs bg-red-100 px-3 py-1 my-5 rounded">
                                    <i className="fas fa-trash mr-2"></i>
                                        Delete
                                    </p>
                                    </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table></section>
    }
    const Users = () => {
        return     <section 
        className="flex flex-col justify-center items-center mt-5 w-full" style={{
            maxWidth: "500px"
        }}
    >
        <section className="flex justify-between items-center my-5 w-full" >
            <h1 className="text-2xl font-bold my-2">Users</h1>
            <section className="flex items-center my-5">
                <input type="text" className="px-1 py-1 border border-gray-100 text-sm rounded" placeholder="search" />
                <button className="text-sm bg-gray-100 px-3 py-1 rounded">
                    search
                </button>
            </section>
        </section>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col"
                        className="text-sm p-2"
                    >S.NO</th>
                    <th scope="col"
                        className="text-sm p-2"
                    >Name</th>
                    <th scope="col"
                    className="text-sm p-2"
                    >email</th>
                </tr>
            </thead>
            <tbody>
               {
                     users.map((user:any,i:number)=>{
                          return(
                            <tr key={i}>
                                 <th scope="row"
                                      className="text-sm p-2"
                                 >{i+1}</th>
                                 <td
                                      className="text-sm p-2"
                                 >{user.name}</td>
                                 <td
                                      className="text-sm p-2"
                                 >{user.email}</td>
                            </tr>
                          )
                     })
               }
            </tbody>
        </table></section>
    }
    const [ele, setEle] = useState<Boolean>(true);


    useEffect(() => {
        fetch('/api/blogs').then(
            (res) => res.json()
        ).then(
            (data) => {
                setBlogs(data);
                setBlogCount(data.length);
            }
        ).catch((err) => {
            console.log(err);
        })
    }, [blogs]);

    useEffect(() => {
        fetch('/api/admin/users').then(
            (res) => res.json()
        ).then(
            (data) => {
                setUsers(data);
                setUserCount(data.length);
            }
        ).catch((err) => {
            console.log(err);
        })
    }, [users]);

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

    <nav className="mt-5" style={{
            maxWidth: "500px"
        }}>
        <ul className="flex justify-center">
            <li style={{
                borderRight: "1px solid black",
                padding: "10px"
            }} onClick={() => {
                setEle(true);
            }}>
                Blogs
            </li>
            <li style={{
                padding: "10px"
            }} onClick={() => {
                setEle(false);
            }}>
                Users
            </li>
        </ul>
    </nav>
    {
        (ele)?Blogs():Users()
    }
    </main>
    </>
  )
}