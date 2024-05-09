import { useNavigate, useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/Fullblog";
import { FullBlogSkeleton } from "../components/FullBlogSkeleton";

export const Blog = () => {
    let { id } = useParams()
    const { authorized, firstName, loading, blog, error} = useBlog({
        id: id || ''
    });
    const navigate = useNavigate();

    if(loading){
        return(
            <div className="min-h-screen ">
                <Appbar userFirstName={firstName}/>
                <FullBlogSkeleton ></FullBlogSkeleton> 
            </div>
        )
    }
    if(!authorized){
        navigate('/')
    }     
    if(error){
        return(
            <div>error: {error}</div>
        )
    }
    if(blog){
        return (
            <div className="min-h-screen">
                <Appbar userFirstName={firstName}/>
                <FullBlog blog={blog}></FullBlog> 
            </div>
        )
    }
    
}