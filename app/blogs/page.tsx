// "use client"
import { NavBar } from "@/components/Headers/NavBar";
import { Loader } from "@/components/Loader/Loader";
import { AllBlogs } from "@/components/content/AllBlogs";
import prisma from "@/lib/client";

export default async function Blogs(){
    
    try{
        const blogs = await prisma.post.findMany({});
        await prisma.$disconnect();
        return(
            <div>
                <NavBar/>
                <AllBlogs data={blogs}/>
            </div>
        )
    }catch(err){
        return(
            <div>
                <NavBar/>
                <Loader/>
            </div>
        )
    }
}