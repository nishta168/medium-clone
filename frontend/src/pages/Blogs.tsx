import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useBlogs } from "../hooks";
import { useNavigate } from "react-router-dom";

export const Blogs = ()=>{
    const { authorized, firstName, loading, blogs, error} = useBlogs();
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
    if(blogs){
        return (
            <div className="dark:bg-gray-900">
                <Appbar userFirstName={firstName}/>
                <div className="lg:mx-96 pt-20">
                    {blogs.map( blog => <BlogCard title={blog.title} content={blog.content} authorName={`${blog.author.firstName} ${blog.author.lastName}`} tag={blog.tag} date={blog.created_at} id={blog.id}/>)}
                </div>     
            </div>
        )
    }
    
}