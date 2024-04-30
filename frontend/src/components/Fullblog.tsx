import { Blog } from "../hooks"
export const dateParser = (timestamp: string) => {
    const date = new Date (timestamp);
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    return formattedDate;
}

export const FullBlog = ({ blog }: {blog: Blog}) => {
    
    
    return (
        <div className="grid grid-cols-12 px-32">
            <div className="col-span-8 pt-20 mb-20">
                <div className="text-5xl font-bold dark:text-white ">
                    {blog.title}
                </div>
                <div className="py-5 text-gray-500 dark:text-gray-400 mb-10">
                    Posted on {dateParser(blog.created_at)}
                </div>
                <div className="dark:text-white">
                    {blog.content}
                </div>        
            </div>    
            <div className="col-span-4 pl-20 pt-20 dark:text-white">
                <div>
                    Author
                </div>
                <div className="flex mt-5 ">
                    <div className=" relative self-center inline-flex items-center justify-center w-14 h-9 overflow-hidden bg-gray-600 rounded-full dark:bg-gray-600">
                        <div className="font-sm text-gray-300 dark:text-gray-300">{blog.author.firstName[0]}</div>
                    </div>
                    <div>
                        <div className="font-bold ml-4 text-xl dark:text-white">
                            {blog.author.firstName} {blog.author.lastName}
                        </div>
                        <div className="text-gray-500 dark:text-gray-400 text-sm ml-4 mt-2">
                            Master of mirth, purveyor of puns, and the funniest person in the kingdom
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}