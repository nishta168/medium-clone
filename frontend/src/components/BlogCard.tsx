import { Link } from "react-router-dom";
import { dateParser } from "./Fullblog";

export function BlogCard ({
    authorName,
    date,
    title,
    content,
    tag,
    id
}: BlogCardType) {
    return (
        <Link to={`/blog/${id}`}>
            <div className="border-b py-5 px-10 dark:border-gray-800 cursor-pointer">
                <div className="flex">                
                    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-600 rounded-full dark:bg-gray-600">
                        <span className="font-sm text-gray-300 dark:text-gray-300">{authorName[0]}</span>
                    </div>
                    <div className="pl-3 text-sm self-center dark:text-white"> 
                        {authorName}
                    </div>
                    <div className="ml-2 bg-slate-500 w-1 h-1 rounded-full  self-center ">                    
                    </div>
                    <div className="pl-2 text-gray-500 dark:text-gray-400 text-sm self-center">
                        {dateParser(date)}
                    </div>            
                </div>
                <div className="pt-3 text-lg font-bold dark:text-white">
                    {title}
                </div>
                <div className="pt-1 text-sm dark:text-white">
                    {content.slice(0,150)} { content.length <= 150 ? null : '...'}
                </div>
                <div className="flex mt-6">
                    {!tag  ? null : <div className="bg-gray-200 text-sm p-1 px-2 rounded-2xl dark:bg-gray-700 dark:text-gray-300">
                        {tag}
                    </div>}                    
                    <div className="ml-3 text-xs text-gray-500 dark:text-gray-400 self-center">
                        {Math.ceil((content.length/25)/60)} min read
                    </div>
                </div>
            </div>
        </Link>
        
    )
}

interface BlogCardType {
    authorName: string;
    date: string;
    title: string;
    content: string;
    tag: string;
    id: string;
}