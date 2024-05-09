import { useEffect, useState } from "react";
import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { BlogSkeleton } from "../components/BlogSkeleton";

export function Signup(){
    const [authorized, setAuthorized] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem('token');
        axios.post(`${BACKEND_URL}/api/v1/user/me`,null, {
            headers: { 
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
            }
        })
        .then( res => {
            if(res.data.success == true){
                navigate('/blogs')
            }
            else{
                setAuthorized(false);
                setLoading(false);
            }
        })
        .catch(()=>{            
            setAuthorized(false);
            setLoading(false)            
        })
    }, [])

    if(loading == true){
        return (
            <div>
                
            </div>
        )
    }
    else{

        if (authorized == false){
            return (        
                <div className="h-screen flex flex-col lg:grid lg:grid-cols-2">                    
                    <Quote/>                   
                    <Auth type="signup"/>           
                </div>
            )
        }
        else navigate('/blogs')
        
    }
    
}