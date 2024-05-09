import { Link } from "react-router-dom";
import { dateParser } from "./Fullblog";

export function BlogCard ({
    authorName,
    date,
    title,
    description,
    tag,
    id
}: BlogCardType) {
    return (
        <Link to={`/blog/${id}`}>
            <div className="border-b py-5 px-10 cursor-pointer">
                <div className="flex">                
                    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-600 rounded-full">
                        <span className="font-sm text-gray-300">{authorName[0]}</span>
                    </div>
                    <div className="pl-3 text-sm self-center "> 
                        {authorName}
                    </div>
                    <div className="ml-2 bg-slate-500 w-1 h-1 rounded-full  self-center ">                    
                    </div>
                    <div className="pl-2 text-gray-500 text-sm self-center">
                        {dateParser(date)}
                    </div>            
                </div>
                <div className="pt-3 text-lg font-bold ">
                    {title}
                </div>
                <div className="pt-1 text-sm ">
                    {description.slice(0,150)} { description.length <= 150 ? null : '...'}
                </div>
                <div className="flex mt-6">
                    {!tag  ? null : <div className="bg-gray-200 text-sm p-1 px-2 rounded-2xl">
                        {tag}
                    </div>}                    
                    <div className="ml-3 text-xs text-gray-500 self-center">
                        {Math.ceil((description.length/25)/60)} min read
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
    description: string;
    tag: string | null;
    id: string;
}