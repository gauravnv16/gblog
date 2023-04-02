"use client"

import { useState } from "react";
import { Users } from "../users/Users";
import { Blogs } from "../blogs/Blogs";

export const Nav = (props:any) => {
    const [ele, setEle] = useState(true);
    return <>
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
        (ele)?<Blogs props={props.blogs}/>:<Users props={props.users}/>
    }</>
}