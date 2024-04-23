import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, InputHTMLAttributes, useState } from "react"
import { CreateBlogSchema } from "@muraleedharan_n/medium-common"

export const WriteBlog = () =>{
    const [postBody, setPostBody] = useState<CreateBlogSchema>({
        title: '',
        content: ''
    })

    return(
        <div>
            {/* <PublishAppBar/> */}
            <div>
            <input onChange={(e)=>{
                setPostBody({
                    ...postBody,
                    title: e.target.value
                })
            }} className='text-4xl font-serif pl-5 pt-5' type="text" placeholder="Title"></input>
            </div>
            <div>
            <input onChange={(e)=>{
                setPostBody({
                    ...postBody,
                    content: e.target.value
                })
            }} type="text" className='text-2xl font-serif pl-5 pt-4' placeholder="Tell your story..."></input>
            </div>    
            <button onClick={async ()=>{
                const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, postBody, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                alert(res)
            }} className="mt-6 text-white bg-black hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-gray-300 dark:focus:ring-blue-800 dark:bg-white dark:text-black">
                Publish</button>      
            
        </div>
    )
}