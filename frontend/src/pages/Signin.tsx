import { useEffect, useState } from "react";
import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Signin(){
    const [authorized, setAuthorized] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem('token');
        axios.post(`${BACKEND_URL}/api/v1/user/me`, null, {
            headers: { 
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
            }})
        .then((res: any)=>{
            if(res.data.success == true){
                setAuthorized(true);
                setLoading(false)
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
                    <Auth type="signin"/>           
                </div>
            )
        }
        else navigate('/blogs')
        
    }
}