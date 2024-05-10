import React from 'react'
import Sidebar from './Sidebar'
import Editor from './Editor'
import Split from 'react-split'
import './mde.css'
import 'react-mde/lib/styles/css/react-mde-all.css'
import supabase from '../../utils/supabase'

const ReactMDE = () => {
  const [error, setError] = React.useState(null)
  const [status, setStatus] = React.useState(null)
  const [notes, setNotes] = React.useState(null)
  const [currentNoteId, setCurrentNoteId] = React.useState('')
  const [activeNote, setActiveNote] = React.useState('')

  React.useEffect(() => {
    const getSupabaseNotes = async () => {
      try {
        const res = await supabase
          .from('notes')
          .select()
          .order('created_at', { ascending: true })

        if (res.error) {
          setError(res.error.message)
        }

        if (res.data) {
          setNotes(res.data)
          setCurrentNoteId(res.data[0].id)
          setActiveNote(res.data[0])
        }
      } catch (e) {
        console.log(e)
      } finally {
        setStatus(null)
      }
    }
    getSupabaseNotes()
  }, [status, error])

  const createNewNote = async () => {
    const newNote = {
      body: "# Type your markdown note's title here",
    }
    try {
      const res = await supabase.from('notes').select()
      if (res.error) {
        setError(res.error.message)
      }

      if (res.data) {
        await supabase.from('notes').insert(newNote)
        setStatus('inserted')
      }
    } catch (e) {
      console.log(e)
    }
  }

  const deleteNote = async () => {
    try {
      const res = await supabase.from('notes').select().eq('id', currentNoteId)
      if (res.error) {
        setError(res.error.message)
      }
      if (res.data) {
        await supabase.from('notes').delete().eq('id', currentNoteId)
        setStatus('deleted')
      }
    } catch (e) {
      console.log(e)
    }
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId
      }) || notes[0]
    )
  }

  if (error) {
    return <h2>{error}</h2>
  }

  if (!notes) {
    return <h2>Loading...</h2>
  }

  return (
    <main className="container mx-auto bg-white font-karla">
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes && notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
            setActiveNote={setActiveNote}
          />
          {notes.length > 0 && (
            <Editor
              currentNote={findCurrentNote()}
              activeNote={activeNote}
              setStatus={setStatus}
              setActiveNote={setActiveNote}
              setError={setError}
            />
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
