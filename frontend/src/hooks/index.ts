import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog {
    title: string;
    content: string;
    id: string;
    created_at: string;
    updated_at: string;
    tag: string;
    author: {
        firstName: string;
        lastName: string;
        id: string;
    }
}

export const useBlogs = () => {
    const [authorized, setAuthorized] = useState(false);
    const [firstName, setFirstName] = useState('')
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>();
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.post(`${BACKEND_URL}/api/v1/user/me`,null, {
            headers: { 
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
            }
        })
        .then( res => {
            if(res.data.success == true){
                setAuthorized(true);
                setFirstName(res.data.firstName);
                axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then( res => {
                    setBlogs(res.data.blogs);
                    setLoading(false);
                })
                .catch( e => {
                    setError(e);
                    setLoading(false)
                });
            }
        })
        .catch((e)=>{            
            setAuthorized(false);
            setLoading(false)            
        })

    }, [])
    
    return { 
        authorized,
        loading,
        firstName,
        blogs,
        error
    }
}

export const useBlog = ({ id } : {id: string}) => {
    const [authorized, setAuthorized] = useState(false);
    const [firstName, setFirstName] = useState('')
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.post(`${BACKEND_URL}/api/v1/user/me`,null, {
            headers: { 
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
            }
        })
        .then( res => {
            if(res.data.success == true){
                setAuthorized(true);
                setFirstName(res.data.firstName);
                axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then( res => {
                    setBlog(res.data.blog);
                    setLoading(false);
                })
                .catch( e => {
                    setError(e);
                    setLoading(false)
                });
            }
        })
        .catch((e)=>{            
            setAuthorized(false);
            setLoading(false)            
        })

    }, [])
    
    return { 
        authorized,
        loading,
        firstName,
        blog,
        error
    }
}