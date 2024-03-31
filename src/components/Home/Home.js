import NoteList from "../NoteList/NoteList"
import useFetch from "../../hooks/useFetch"
import useNotes from "../../hooks/useNotes";
import { useState, useRef, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Note from "../Note/Note";
import "./Home.css"

const Home = () => {
    const { data: notes, isPending, error } = useFetch('http://localhost:8000/notes');
    const [pageNum, setPageNum] = useState(1)
    const {
        isLoading,
        isError,
        results,
        hasNextPage
    } = useNotes(pageNum)

    const intObserver = useRef()
    const lastNoteRef = useCallback(note => {
        if (isLoading) return

        if (intObserver.current) intObserver.current.disconnect()

        intObserver.current = new IntersectionObserver(notes => {
            if (notes[0].isIntersecting && hasNextPage) {
                console.log('We are near the last note!')
                setPageNum(prev => prev + 1)
            }
        })

        if (note) intObserver.current.observe(note)
    }, [isLoading, hasNextPage])

    if (isError) return <p className='center'>Error: {error.message}</p>

    const content = results.map((note, i) => {
        if (results.length === i + 1) {
            return <Note ref={lastNoteRef} key={note.id} note={note} />
        }
        return <Note key={note.id} note={note} />
    })


    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {notes && <NoteList notes={notes} />}
            {content}
            {isLoading && <p className="center"><FontAwesomeIcon icon={faSpinner} spin /> Loading More Notes...</p>}
            <p className="center"><a href="#top">Back to Top</a></p>
        </div>
    );
}
 
export default Home;