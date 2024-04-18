import React from 'react'

const Sidebar = (props) => {
  function handleDelete() {
    props.setNotes((notes) => {
      return notes.filter((note) => {
        return note.id !== props.currentNote.id
      })
    })
  }

  const noteElements = props.notes.map((note, index) => {
    const re = /[a-z0-9 ]+/i
    const noteTitle = note.body.split('\n')[0].match(re)
    return (
      <div key={note.id}>
        <div
          className={`title py-4 px-4 ${
            note.id === props.currentNote.id ? 'selected-note' : ''
          }`}
          onClick={() => props.setCurrentNoteId(note.id)}>
          <h4 className="text-snippet">{noteTitle || 'Create new note'}</h4>
          {note.id === props.currentNote.id && (
            <button
              className="del-btn bg-slate-500 px-2 rounded-full hover:bg-slate-400
            "
              onClick={handleDelete}>
              X
            </button>
          )}
        </div>
      </div>
    )
  })

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3 className="font-bold">Notes</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  )
}

export default Sidebar
