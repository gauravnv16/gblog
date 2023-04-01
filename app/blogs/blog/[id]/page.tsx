import { NavBar } from "@/components/Headers/NavBar";
import { BlogItemFulScreen } from "@/components/content/BlogItemFullScreen";

export default function Blog(props:any){
    return(
        <div>
            <NavBar/>
            <BlogItemFulScreen id={props.params.id} />
        </div>
    )
}