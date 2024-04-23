import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks";
import { useNavigate } from "react-router-dom";
import { BlogSkeleton } from "../components/BlogSkeleton";

export const Blogs = ()=>{
    const { authorized, firstName, loading, blogs, error} = useBlogs();
    const navigate = useNavigate();

    if(loading){
        return (
            <div className=" min-h-screen dark:bg-gray-900">
                <Appbar userFirstName={firstName}/>
                <div className="lg:mx-96 pt-20">
                    <BlogSkeleton></BlogSkeleton>
                    <BlogSkeleton></BlogSkeleton>
                    <BlogSkeleton></BlogSkeleton>
                    <BlogSkeleton></BlogSkeleton>
                    <BlogSkeleton></BlogSkeleton>
                </div>     
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
    if(blogs){
        return (
            <div className="min-h-screen dark:bg-gray-900">
                <Appbar userFirstName={firstName}/>
                <div className="lg:mx-96 pt-20">
                    {blogs.map( blog => <BlogCard title={blog.title} content={blog.content} authorName={`${blog.author.firstName} ${blog.author.lastName}`} tag={blog.tag} date={blog.created_at} id={blog.id}/>)}
                </div>     
            </div>
        )
    }
    
}