import { Link, useNavigate } from "react-router-dom"

export const PublishAppbar = ({ userFirstName }:{userFirstName: string}) => {
const navigate =useNavigate();
    return(
        <div className="py-4 flex justify-between">
            <Link to={'/blogs'}>
                <div className="ml-10 text-3xl font-bold self-center">Medium</div>
            </Link>
            <div className="flex">                
                <button className="self-center hover:text-gray-500 mr-5" onClick={()=>{
                    localStorage.removeItem("token");
                    navigate('/')
                }}>Logout</button>
                <div className="mr-10 relative self-center inline-flex items-center justify-center w-9 h-9 overflow-hidden bg-gray-600 rounded-full">
                    <div className="font-sm text-gray-300">{userFirstName[0]}</div>
                </div>
            </div>
        </div>
        

    )
}