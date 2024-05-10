import React from 'react'
import ReactMde from 'react-mde'
import Showdown from 'showdown'
import supabase from '../../utils/supabase'

const Editor = ({ activeNote, setStatus, setActiveNote, setError }) => {
  const [selectedTab, setSelectedTab] = React.useState('write')

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  })

  async function handleSave() {
    if (!activeNote.body) return
    try {
      const res = await supabase.from('notes').select().eq('id', activeNote.id)

      if (res.error) {
        setError(res.error.message)
      }

      if (res.data) {
        if (res.data[0].body !== activeNote.body) {
          console.log('note updated in database')
          await supabase
            .from('notes')
            .update({ body: activeNote.body })
            .eq('id', activeNote.id)
          setStatus('Updated')
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

  const editNote = (text) => {
    setActiveNote((note) => ({ ...note, body: text }))
  }

  return (
    <section className="pane editor" onMouseLeave={handleSave}>
      <ReactMde
        value={activeNote.body}
        onChange={editNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={100}
        heightUnits="vh"
      />
    </section>
  )
}

export default Editor
