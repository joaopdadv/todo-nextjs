import Link from "next/link";
import CreateNote from "./CreateNote";

async function getNotes() {

    const response = await fetch(
        'http://127.0.0.1:8090/api/collections/notes/records',
        {cache: 'no-store'}
    );
    const data = await response.json();
    return data?.items as any[];
}

async function NotesPage() {
    const notes = await getNotes();

    return (
        <div className="min-h-screen bg-slate-400 p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Notes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    notes?.map((note) => {
                        return <Note key={note.id} note={note} className="p-4 bg-white shadow-md rounded-lg"/>
                    })
                }
            </div>

            <CreateNote/>
        </div>
    );
}

function Note({note}:any){
    const {id, title, content, created} = note || {}

    return (
        <Link href={`/notes/${id}`} className="bg-yellow-500 p-4 flex flex-col gap-10 items-baseline justify-between">
            <div>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p>{created}</p>
            </div>
        </Link>
    )
}



export default NotesPage;