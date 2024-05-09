import { Link, useNavigate } from "react-router-dom"

export const Appbar = ({ userFirstName }:{userFirstName: string}) => {
const navigate =useNavigate();
    return(
        <div className="border-b py-4 flex justify-between">
            <Link to={'/blogs'}>
                <div className="ml-10 text-3xl font-bold self-center">Medium</div>
            </Link>
            <div className="flex">                
                <Link className="bg-green-700 flex text-white hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm max-w-fit px-5 mr-5 py-2 text-center " to={'/new-story'}>
                <svg className="self-center mr-1 w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 19 5.4-5.4m2.4-6.4 4 4-2 5.4L5.3 20 4 18.7l3.4-9.5 5.4-2Zm4.6 4.6-5.2-5.2L14.8 4 20 9.2l-2.6 2.6Z"/>
                </svg>
                <div className="self-center">Write</div>
                </Link>
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