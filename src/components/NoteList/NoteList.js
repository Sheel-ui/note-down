import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./NoteList.css"
const NoteList = ( {notes}) => {
    console.log(notes)
    return ( 
        <div className="note-list">
        { notes.map(note => (
            <div className="note-preview" key={note.id} >
                <Link to={`/notes/${note.id}`}>
                    <h2>{ note.title }</h2>
                    <p>{  note.body.slice(0, 125) + '... '  } <u>See more</u></p>
                </Link>
                </div>
        ))}
        </div>
     );
}
 
export default NoteList;