import { LatestBlogs } from "@/components/Headers/LatestBlogs";
import { NavBar } from "@/components/Headers/NavBar";
import { Loader } from "@/components/Loader/Loader";
import { AllBlogs } from "@/components/content/AllBlogs";
import { BlogItemLoader } from "@/components/content/loader/BlogItemLoader";

export default function Home() {
  return (
    <>
    <NavBar/>
    <LatestBlogs/>
    <AllBlogs/>
    </>
  )
}
