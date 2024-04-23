export function FullBlogSkeleton () {
    return (
        <div role="status" className="grid grid-cols-12 mx-32 animate-pulse">
            <div className="col-span-8 mt-20 mb-20">
                <div className="h-20 bg-gray-200 rounded-sm dark:bg-gray-700">
                    {/* title */}
                </div>
                <div className="my-5 mb-10 h-4 bg-gray-200 rounded-sm dark:bg-gray-700 w-48">
                    {/* Posted on {dateParser(blog.created_at)} */}
                </div>
                <div >
                    <ParagraphSkeleton/>
                    <ParagraphSkeleton/>
                    <ParagraphSkeleton/>
                </div>        
            </div>    
            <div className="col-span-4 ml-20 mt-20 ">
                
                <div className="flex mt-5 ">
                    <div className="bg-gray-200 h-10 w-10 rounded-full dark:bg-gray-700">                        
                    </div>
                    <div>
                        <div className="ml-4 h-4 bg-gray-200 rounded-sm dark:bg-gray-700 w-48">
                            {/* {blog.author.firstName} {blog.author.lastName} */}
                        </div>
                        <div className="h-4 bg-gray-200 rounded-sm dark:bg-gray-700 w-56 ml-4 mt-2">
                            {/* Master of mirth, purveyor of puns, and the funniest person in the kingdom */}
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

function ParagraphSkeleton (){
    return (        
        <div>
            <div className="h-5 bg-gray-200 rounded-sm dark:bg-gray-700 mr-10 mb-2"></div>
            <div className="h-5 bg-gray-200 rounded-sm dark:bg-gray-700 mb-2 mr-6"></div>
            <div className="h-5 bg-gray-200 rounded-sm dark:bg-gray-700  mb-2 mr-1"></div>
            <div className="h-5 bg-gray-200 rounded-sm dark:bg-gray-700  mb-2 mr-6"></div>
            <div className="h-5 bg-gray-200 rounded-sm dark:bg-gray-700 mb-2"></div>
            <div className="h-5 bg-gray-200 rounded-sm dark:bg-gray-700 mb-8 mr-20"></div>
        </div>
    )
}

{/* <div className="grid grid-cols-12 px-32">
            <div className="col-span-8 pt-20 mb-20">
                <div className="h-10 bg-gray-200 rounded-sm dark:bg-gray-700 max-w-[360px]">                    
                </div>
                <div className="my-5 bg-gray-200 rounded-sm dark:bg-gray-700 h-2.5 w-10 mb-10">
                </div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>      
            </div>    
            <div className="col-span-4 pl-20 pt-20">
                <div className="h-4 bg-gray-200 rounded-sm dark:bg-gray-700 w-20" >                    
                </div>
                <div className="flex mt-5 ">
                    <div className="relative self-center inline-flex items-center justify-center w-6 h-6 w-10 overflow-hidden bg-gray-600 rounded-full dark:bg-gray-600">
                        <span className="h-6 w-6 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                    </div>
                    <div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    </div>
                </div>
            </div>    
        </div> */}