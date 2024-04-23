import { SigninSchema, SignupSchema } from "@muraleedharan_n/medium-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config";

export const Auth = ({type}: {type: "signup" | "signin"}) =>{
    const [signUpBody, setSignUpBody] = useState<SignupSchema>({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    });
    const [signInBody, setSignInBody] = useState<SigninSchema>({
        email: '',
        password: ''
    });   
    const navigate = useNavigate();
    return(
        <div className="lg:min-h-screen h-screen flex justify-center dark:bg-gray-800">
            <div className="flex flex-col self-center w-1/2">
                <div className="self-center items-center text-3xl font-bold dark:text-white">
                {type === "signup" ? "Create an account" : "Log in"}
                </div>
                <div className=" self-center flex text-slate-500 pt-2 pb-10">
                    <div>
                    {type === "signup" ? "Already have an account?" : "Don't have an account?"}
                    </div>
                    <Link className="underline pl-1" to={type === "signup" ? "/signin" : "/"}>{type === "signup" ? "Login" : "Sign up"}</Link>
                </div>
                { type === "signup" ? <LabelledInput label="First Name" placeholder="John" onChange={(e)=>{
                    setSignUpBody({
                        ...signUpBody,
                        firstName: e.target.value
                    })}}/> : null
                }
                
                { type === "signup" ? <LabelledInput label="Last Name" placeholder="Doe" onChange={(e)=>{
                    setSignUpBody({
                        ...signUpBody,
                        lastName: e.target.value
                    })}}/> : null
                }
                
                <LabelledInput label="Email" placeholder="johndoe@gmail.com" onChange={(e)=>{
                    { type === 'signup' ? setSignUpBody({
                        ...signUpBody,
                        email: e.target.value
                    }) : setSignInBody({
                        ...signInBody,
                        email: e.target.value
                    }) }}}/>
                    
                <LabelledInput label="Password" placeholder="*******" type="password" onChange={(e)=>{
                    { type === 'signup' ? setSignUpBody({
                        ...signUpBody,
                        password: e.target.value
                    }) : setSignInBody({
                        ...signInBody,
                        password: e.target.value
                    }) }}}/>
                <button onClick={async()=>{
                    if (type === 'signup'){
                        try{
                            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, signUpBody);
                            const token = response.data.jwt;
                            if(!token){
                                alert('Failed to signup')
                            }
                            localStorage.setItem("token", token)
                            navigate('/blogs')                            
                        }catch(err){
                            alert('Failed to signup')
                        }
                    }
                    else{
                        try{
                            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, signInBody);
                            const token = response.data.jwt;
                            if(!token){
                                alert('Failed to login')
                            }
                            localStorage.setItem("token", token)
                            navigate('/blogs')                            
                        }catch(err){
                            alert('Failed to login')
                        }
                    }                
                }} className="mt-6 text-white bg-black hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-gray-300 dark:focus:ring-blue-800 dark:bg-white dark:text-black">
                    {type === 'signup' ? 'Sign Up' : 'Log In'}
                </button>
            </div>
        </div>
    )
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: 'password' | undefined
}

const LabelledInput = ({label, placeholder, onChange, type}:LabelledInputType) =>{
    return(
        <div className="flex flex-col py-2">
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </div>
            <input type={type || 'text'} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder}>
            </input>
        </div>
    )
}