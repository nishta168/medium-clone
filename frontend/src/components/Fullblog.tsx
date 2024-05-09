import { EditorContent, useEditor } from "@tiptap/react";
import { BlogFull } from "../hooks"
import StarterKit from "@tiptap/starter-kit";
import CharacterCount from "@tiptap/extension-character-count";
export const dateParser = (timestamp: string) => {
    const date = new Date (timestamp);
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    return formattedDate;
}

export const FullBlog = ({ blog }: {blog: BlogFull}) => {
    const editor = useEditor({
        editable: false,
        content: blog.content,
        extensions: [StarterKit, CharacterCount ],
        editorProps: {            
            attributes:{
            class: "prose prose-base md:prose-lg max-w-none [&_ol]:list-decimal [&_ul]:list-disc focus:outline-none"
            }            
            }
    })

    const wordcount = editor?.storage.characterCount.words()
    
    return (
        <div className="mx-6 mt-16 md:mx-96 mb-20">
            <div className="">
                <div className="flex mt-5 border-b mb-7">
                    <div className=" relative mt-2 inline-flex items-center justify-center w-9 h-9 min-w-9 bg-gray-600 rounded-full">
                        <div className="font-sm text-gray-300">{blog.author.firstName[0]}</div>
                    </div>
                    <div>
                        <div className="font-bold ml-4 text-xl">
                            {blog.author.firstName} {blog.author.lastName}
                        </div>
                        <div className="flex mb-5">
                            <div className="ml-4 mt-1 text-sm font-medium text-gray-500">
                                Published on {dateParser(blog.created_at)}
                            </div>
                            <div className="bg-gray-500 mt-2 ml-2 w-1 h-1 rounded-full self-center ">                    
                            </div>
                            <div className="ml-2 mt-1 text-sm font-medium text-gray-500 ">
                                {Math.ceil(wordcount/200)} min read
                            </div>
                        </div>
                                               
                    </div>
                </div>
                
            </div>
            <div className="">
                <div className="">
                <EditorContent editor={editor} />
                </div>        
            </div>    
                
        </div>
    )
}

