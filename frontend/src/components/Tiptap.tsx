
import { EditorProvider, JSONContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { EditorMenuBar } from './EditorMenuBar'
import { useState } from 'react'

const extensions = [
  StarterKit,  
  Placeholder.configure({
    placeholder: 'Title…',
    showOnlyWhenEditable: true,
  }),
]

const initialContent = `
<h1></h1>

`


export default () => {
  
  const [content, setContent ] = useState<JSONContent>();
  return (
    //@ts-ignore
    <EditorProvider 
      slotBefore={<EditorMenuBar content={content}/>} 
      extensions={extensions} 
      content={initialContent} 
      onUpdate={
        ({editor})=>{
        const json = editor.getJSON();
        setContent(json);
        }
      } 
      editorProps={
        {
          attributes:{
            class: "prose prose-sm max-w-none [&_ol]:list-decimal [&_ul]:list-disc p-5 focus:outline-none"
            }
        }
      }>
       
    </EditorProvider>
  )
}