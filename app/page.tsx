"use client";

import { LatestBlogs } from "@/components/Headers/LatestBlogs";
import { NavBar } from "@/components/Headers/NavBar";
import { Loader } from "@/components/Loader/Loader";
import { AllBlogs } from "@/components/content/AllBlogs";
import { useEffect, useState } from "react";

export default function Home() {
  try{
      const [
        blogs,
        setBlogs
      ] = useState([]);

      useEffect(() => {
        fetch("/api/blogs")
          .then((response) => response.json())
          .then((json) => {
           setBlogs(json);
          });
      }, []);

      return (
        <>
        <NavBar/>
        <LatestBlogs data={blogs}/>
        <AllBlogs data={blogs}/>
        </>
      )
  } catch (err) {
    console.log(err);
      return (
        <>
        <NavBar/>
        <Loader/>
        </>
      )
  }
}
