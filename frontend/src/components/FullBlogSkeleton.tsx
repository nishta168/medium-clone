export function FullBlogSkeleton () {
    return (
        <div role="status" className="animate-pulse mx-6 mt-16 md:mx-96 mb-20">
            <div className="">
                <div className="flex mt-5 border-b mb-7">
                    <div className=" relative mt-2 inline-flex items-center justify-center w-9 h-9 min-w-9 bg-gray-200 rounded-full">
                        <div className="">
                            {/* {blog.author.firstName[0]} */}
                        </div>
                    </div>
                    <div>
                        <div className="ml-4 h-4 bg-gray-200 rounded-sm w-48">
                            {/* {blog.author.firstName} {blog.author.lastName} */}
                        </div>
                        <div className="flex mb-5">
                            <div className="ml-4 mt-1 h-4 bg-gray-200 rounded-md w-48">
                                {/* Published on {dateParser(blog.created_at)} */}
                            </div>
                            <div className="bg-gray-200 mt-2 ml-2 w-1 h-1 rounded-full self-center ">                    
                            </div>
                            <div className="ml-2 mt-1 h-4 w-16 bg-gray-200 rounded-md w-48 ">
                                {/* {Math.ceil(wordcount/200)} min read */}
                            </div>
                        </div>
                                               
                    </div>
                </div>
                
            </div>
            <div className="">
                <div className="">
                    <div className="h-20 bg-gray-200 rounded-md mb-10">
                        {/* title */}
                    </div>                
                    <div >
                        <ParagraphSkeleton/>
                        <ParagraphSkeleton/>
                        <ParagraphSkeleton/>
                    </div>   
                </div>        
            </div>    
                
        </div>
    )
    
}

function ParagraphSkeleton (){
    return (        
        <div>
            <div className="h-5 bg-gray-200 rounded-md mr-10 mb-3"></div>
            <div className="h-5 bg-gray-200 rounded-md mb-3 mr-6"></div>
            <div className="h-5 bg-gray-200 rounded-md mb-3 mr-1"></div>
            <div className="h-5 bg-gray-200 rounded-md mb-3 mr-6"></div>
            <div className="h-5 bg-gray-200 rounded-md mb-3"></div>
            <div className="h-5 bg-gray-200 rounded-md mb-8 mr-20"></div>
        </div>
    )
}


