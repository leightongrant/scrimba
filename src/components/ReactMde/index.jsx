import React from 'react'
import Sidebar from './Sidebar'
import Editor from './Editor'
import Split from 'react-split'
import { nanoid } from 'nanoid'
import './mde.css'
import 'react-mde/lib/styles/css/react-mde-all.css'

const ReactMDE = () => {
  const [notes, setNotes] = React.useState(
    JSON.parse(localStorage.getItem('notesLocal')) ||
      localStorage.setItem('notesLocal', JSON.stringify([]))
  )
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ''
  )
  React.useEffect(() => {
    localStorage.setItem('notesLocal', JSON.stringify(notes))
  }, [notes])

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    }
    setNotes((prevNotes) => {
      return [newNote, ...prevNotes]
    })
    setCurrentNoteId(newNote.id)
  }

  function updateNote(text) {
    setNotes((oldNotes) => {
      const idx = oldNotes.indexOf(findCurrentNote())
      const curNote = findCurrentNote()

      setCurrentNoteId(curNote.id)

      if (idx > 0) {
        oldNotes.splice(idx, 1)
        oldNotes.unshift(curNote)
      }
      return oldNotes.map((oldNote) => {
        console.log(oldNote.id, currentNoteId)
        return oldNote.id === currentNoteId
          ? { ...oldNote, body: text }
          : oldNote
      })
    })
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId
      }) || notes[0]
    )
  }

  return (
    <main className="bg-white font-karla">
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            setNotes={setNotes}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  )
}

export default ReactMDE
