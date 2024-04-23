import { useNavigate, useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/Fullblog";

export const Blog = () => {
    let { id } = useParams()
    const { authorized, firstName, loading, blog, error} = useBlog({
        id: id || ''
    });
    const navigate = useNavigate();

    if(loading){
        return(
            <div>loading...</div>
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
            <div className="dark:bg-gray-800">
                <Appbar userFirstName={firstName}/>
                <FullBlog blog={blog}></FullBlog> 
            </div>
        )
    }
    
}