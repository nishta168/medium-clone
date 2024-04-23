import { Link } from "react-router-dom"

export const Appbar = ({ userFirstName }:{userFirstName: string}) => {
    return(
        <div className="border-b py-4 flex justify-between dark:border-gray-700">
            <Link to={'/blogs'}>
                <div className="ml-10 text-3xl font-bold self-center dark:text-white">Medium</div>
            </Link>
            <div className="flex">
                <Link className="flex" to={'/new-story'}>
                <svg className="self-center mr-1 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 19 5.4-5.4m2.4-6.4 4 4-2 5.4L5.3 20 4 18.7l3.4-9.5 5.4-2Zm4.6 4.6-5.2-5.2L14.8 4 20 9.2l-2.6 2.6Z"/>
                </svg>
                <div className="self-center dark:text-white mr-5">Write</div>
                </Link>
                <div className="mr-10 relative self-center inline-flex items-center justify-center w-9 h-9 overflow-hidden bg-gray-600 rounded-full dark:bg-gray-600">
                    <div className="font-sm text-gray-300 dark:text-gray-300">{userFirstName[0]}</div>
                </div>
            </div>
        </div>
        

    )
}