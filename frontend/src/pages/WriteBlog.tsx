import { useAuthorization } from "../hooks"
import { PublishAppbar } from "../components/PublishAppBar"
import { useNavigate } from "react-router-dom"
import Tiptap from "../components/Tiptap"


export const WriteBlog = () =>{
    const { authorized, firstName, loading} = useAuthorization()
    const navigate = useNavigate()

    if(loading){
        return(
            <div className="min-h-screen " >
                <div className="md:px-48">
                <PublishAppbar userFirstName={firstName}/>
                </div>                
            </div>
        )
    }
    if(!authorized){
        navigate('/')
    }
    if(authorized){
        return(
            <div className="min-h-screen " >
                <div className="md:px-48">
                <PublishAppbar userFirstName={firstName}/>
                </div>
                <div className="md:mx-64 mx-10 mt-10 mb-20">
                    <Tiptap>
                        
                    </Tiptap>
                </div>                
                  
                
            </div>
        )
    }
}