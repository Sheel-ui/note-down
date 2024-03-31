import React from 'react'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Note = React.forwardRef(({ note }, ref) => {



    const noteBody = (
        <div className="note-preview" key={note.id} >
        <a href={`/notes/${note.id}`}>
            <h2>{note.title.charAt(0).toUpperCase() + note.title.slice(1, 16)}</h2>
            <p>{  note.body.slice(0, 125) + '... '  } <u>See more</u></p>
        </a>
        </div>
    )

    const content = ref
        ? <article ref={ref}>{noteBody}</article>
        : <article>{noteBody}</article>

    return content
})

export default Note