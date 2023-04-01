import Link from "next/link"

export const BlogItem = ({blog}:{blog:any}) => {
    return<>
    <section className="flex flex-col justify-center px-3 py-5 rounded m-5" style={{
        maxWidth:"300px"
    }}>
        {/* <img src={blog.image} alt={blog.title} className="rounded" style={{
            height:"200px",
            width:"100%"
        }} /> */}
        <h1 className="text-lg font-bold">{blog.title}</h1>
        <p className="text-xs my-2">{blog.body.slice(0,100) + "..."}</p>
        <section>
        <button className="text-sm bg-gray-200 px-3 py-2 rounded mt-2">
            <Link href={`/blogs/blog/${blog.id}`}><i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
        </button>
        </section>
    </section>
    </>
}