import React from 'react'

const Sidebar = (props) => {
  const handleSelect = (note) => {
    props.setCurrentNoteId(note.id)
    props.setActiveNote(note)
  }

  const noteElements = props.notes.map((note) => {
    const re = /[a-z0-9 ]+/i
    const noteTitle = note.body.split('\n')[0].match(re)
    return (
      <div key={note.id}>
        <div
          className={`title py-4 px-4 ${
            note.id === props.currentNote.id ? 'selected-note' : ''
          }`}
          onClick={() => handleSelect(note)}>
          <h4 className="text-snippet">{noteTitle || 'Create new note'}</h4>
          {note.id === props.currentNote.id && (
            <button
              className="px-2 rounded-full del-btn bg-slate-500 hover:bg-slate-400 "
              onClick={props.deleteNote}>
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
      <div className="sidebar--content">{noteElements}</div>
    </section>
  )
}

export default Sidebar
