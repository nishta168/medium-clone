import { useCurrentEditor } from "@tiptap/react";
import { MenuButton } from "./MenuButton";

export function BubbleMenuBar () {
    const { editor } = useCurrentEditor();

    if (!editor) {
        return null
    }

    return (
        <div className="rounded-lg bg-gray-100 flex p-2">
            <MenuButton
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={
                    !editor.can()
                    .chain()
                    .focus()
                    .toggleBold()
                    .run()
                }
                buttonState={editor.isActive('bold') ? 'is-active' : ''}
                >
                {/* bold */}
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 24 24" fill="currentColor"><path d="M8 11H12.5C13.8807 11 15 9.88071 15 8.5C15 7.11929 13.8807 6 12.5 6H8V11ZM18 15.5C18 17.9853 15.9853 20 13.5 20H6V4H12.5C14.9853 4 17 6.01472 17 8.5C17 9.70431 16.5269 10.7981 15.7564 11.6058C17.0979 12.3847 18 13.837 18 15.5ZM8 13V18H13.5C14.8807 18 16 16.8807 16 15.5C16 14.1193 14.8807 13 13.5 13H8Z"></path></svg>
            </MenuButton>
            <MenuButton
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={
                    !editor.can()
                    .chain()
                    .focus()
                    .toggleItalic()
                    .run()
                }
                buttonState={editor.isActive('italic') ? 'is-active' : ''}
                >
                {/* italic */}
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 24 24" fill="currentColor"><path d="M15 20H7V18H9.92661L12.0425 6H9V4H17V6H14.0734L11.9575 18H15V20Z"></path></svg>
            </MenuButton>
            <MenuButton
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={
                    !editor.can()
                    .chain()
                    .focus()
                    .toggleStrike()
                    .run()
                }
                buttonState={editor.isActive('strike') ? 'is-active' : ''}
                >
                {/* strike */}
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 24 24" fill="currentColor"><path d="M17.1538 14C17.3846 14.5161 17.5 15.0893 17.5 15.7196C17.5 17.0625 16.9762 18.1116 15.9286 18.867C14.8809 19.6223 13.4335 20 11.5862 20C9.94674 20 8.32335 19.6185 6.71592 18.8555V16.6009C8.23538 17.4783 9.7908 17.917 11.3822 17.917C13.9333 17.917 15.2128 17.1846 15.2208 15.7196C15.2208 15.0939 15.0049 14.5598 14.5731 14.1173C14.5339 14.0772 14.4939 14.0381 14.4531 14H3V12H21V14H17.1538ZM13.076 11H7.62908C7.4566 10.8433 7.29616 10.6692 7.14776 10.4778C6.71592 9.92084 6.5 9.24559 6.5 8.45207C6.5 7.21602 6.96583 6.165 7.89749 5.299C8.82916 4.43299 10.2706 4 12.2219 4C13.6934 4 15.1009 4.32808 16.4444 4.98426V7.13591C15.2448 6.44921 13.9293 6.10587 12.4978 6.10587C10.0187 6.10587 8.77917 6.88793 8.77917 8.45207C8.77917 8.87172 8.99709 9.23796 9.43293 9.55079C9.86878 9.86362 10.4066 10.1135 11.0463 10.3004C11.6665 10.4816 12.3431 10.7148 13.076 11H13.076Z"></path></svg>
            </MenuButton>
            <div className="w-3"></div>
            <MenuButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                buttonState={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
                >
                {/* h1 */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px" fill="currentColor"><path d="M13 20H11V13H4V20H2V4H4V11H11V4H13V20ZM21.0005 8V20H19.0005L19 10.204L17 10.74V8.67L19.5005 8H21.0005Z"></path></svg>
            </MenuButton>
            <MenuButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                buttonState={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                >
                {/* h2 */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px" fill="currentColor"><path d="M4 4V11H11V4H13V20H11V13H4V20H2V4H4ZM18.5 8C20.5711 8 22.25 9.67893 22.25 11.75C22.25 12.6074 21.9623 13.3976 21.4781 14.0292L21.3302 14.2102L18.0343 18H22V20H15L14.9993 18.444L19.8207 12.8981C20.0881 12.5908 20.25 12.1893 20.25 11.75C20.25 10.7835 19.4665 10 18.5 10C17.5818 10 16.8288 10.7071 16.7558 11.6065L16.75 11.75H14.75C14.75 9.67893 16.4289 8 18.5 8Z"></path></svg>
            </MenuButton>
            <MenuButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                buttonState={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
                >
                {/* h3 */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px" fill="currentColor"><path d="M22 8L21.9984 10L19.4934 12.883C21.0823 13.3184 22.25 14.7728 22.25 16.5C22.25 18.5711 20.5711 20.25 18.5 20.25C16.674 20.25 15.1528 18.9449 14.8184 17.2166L16.7821 16.8352C16.9384 17.6413 17.6481 18.25 18.5 18.25C19.4665 18.25 20.25 17.4665 20.25 16.5C20.25 15.5335 19.4665 14.75 18.5 14.75C18.214 14.75 17.944 14.8186 17.7056 14.9403L16.3992 13.3932L19.3484 10H15V8H22ZM4 4V11H11V4H13V20H11V13H4V20H2V4H4Z"></path></svg>
            </MenuButton>
            <div className="w-3"></div>
            <MenuButton
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                buttonState={editor.isActive('bulletList') ? 'is-active' : ''}
                >
                {/* bullet list */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px" fill="currentColor"><path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
            </MenuButton>
            <MenuButton
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                buttonState={editor.isActive('orderedList') ? 'is-active' : ''}
                >
                {/* ordered list */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px" fill="currentColor"><path d="M8 4H21V6H8V4ZM5 3V6H6V7H3V6H4V4H3V3H5ZM3 14V11.5H5V11H3V10H6V12.5H4V13H6V14H3ZM5 19.5H3V18.5H5V18H3V17H6V21H3V20H5V19.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
            </MenuButton>
            <MenuButton
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={
                    !editor.can()
                    .chain()
                    .focus()
                    .toggleCode()
                    .run()
                }
                buttonState={editor.isActive('code') ? 'is-active' : ''}
                >
                {/* code */}
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 24 24" fill="currentColor"><path d="M16.95 8.46448L18.3642 7.05026L23.3139 12L18.3642 16.9498L16.95 15.5355L20.4855 12L16.95 8.46448ZM7.05048 8.46448L3.51495 12L7.05048 15.5355L5.63627 16.9498L0.686523 12L5.63627 7.05026L7.05048 8.46448Z"></path></svg>
            </MenuButton>
            <MenuButton
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                buttonState={editor.isActive('codeBlock') ? 'is-active' : ''}
                >
                {/* code block */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px" fill="currentColor"><path d="M3.41436 5.99995L5.70726 3.70706L4.29304 2.29285L0.585938 5.99995L4.29304 9.70706L5.70726 8.29285L3.41436 5.99995ZM9.58594 5.99995L7.29304 3.70706L8.70726 2.29285L12.4144 5.99995L8.70726 9.70706L7.29304 8.29285L9.58594 5.99995ZM14.0002 2.99995H21.0002C21.5524 2.99995 22.0002 3.44767 22.0002 3.99995V20C22.0002 20.5522 21.5524 21 21.0002 21H3.00015C2.44787 21 2.00015 20.5522 2.00015 20V12H4.00015V19H20.0002V4.99995H14.0002V2.99995Z"></path></svg>
            </MenuButton>
            <MenuButton
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                buttonState={editor.isActive('blockquote') ? 'is-active' : ''}
                >
                {/* blockquote */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px" fill="currentColor"><path d="M21 4H3V6H21V4ZM21 11H8V13H21V11ZM21 18H8V20H21V18ZM5 11H3V20H5V11Z"></path></svg>
            </MenuButton>
                </div>
    )
}