'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

function CreateNote() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const router = useRouter();

    const create = async() => {
        await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title,
                content
            })
        })

        setContent('');
        setTitle('');

        router.refresh();
    }

    return (
        <>
            <form onSubmit={create} className="bg-gray-600 flex flex-col justify-center align-baseline gap-4 w-52 p-4 rounded-xl ml-auto mr-auto mt-10 text-black"> 
                <input 
                    type="text"
                    name="title"
                    id="title"
                    placeholder="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea 
                    className="resize-none"
                    name="content"
                    id="content"
                    placeholder="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit" className="text-white">Send</button>

            </form>
        </>
    );
}

export default CreateNote;