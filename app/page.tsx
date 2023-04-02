import { LatestBlogs } from "@/components/Headers/LatestBlogs";
import { NavBar } from "@/components/Headers/NavBar";
import { Loader } from "@/components/Loader/Loader";
import { AllBlogs } from "@/components/content/AllBlogs";
import prisma from "@/lib/client";

export default async function Home() {
  try{
      const blogs = await prisma.post.findMany({}) || [];
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
