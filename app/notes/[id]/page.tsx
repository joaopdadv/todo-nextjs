async function getNote(noteId:string) {
    const response = await fetch(
        `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
        {
            next: {revalidate: 10}
        }
    );
    const data = await response.json();
    return data;
}

async function NotePage({params}:any) {
    const note = await getNote(params.id);

    return (
        <>
            <h1>Note/{note.id}</h1>
            <h2>{note.title}</h2>
            <h5>{note.content}</h5>
            <p>{note.created}</p>
        </>
    );
}

export default NotePage;