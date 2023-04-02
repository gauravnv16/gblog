import { NavBar } from "@/components/Headers/NavBar";
import { AllBlogs } from "@/components/content/AllBlogs";
import prisma from "@/lib/client";

export default async function Blogs(){
    const blogs = await prisma.post.findMany({}) || [];
    return(
        <div>
            <NavBar/>
            <AllBlogs data={blogs}/>
        </div>
    )
}