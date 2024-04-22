import React, { Suspense } from 'react';
import Sidebar from './Sidebar';
import Editor from './Editor';
import Split from 'react-split';
import { nanoid } from 'nanoid';
import './mde.css';
import 'react-mde/lib/styles/css/react-mde-all.css';
import supabase from '../../utils/supabase';
import { GridLoader } from 'react-spinners';

const ReactMDE = () => {
    const [sNotes, setSnotes] = React.useState([]);
    const [error, setError] = React.useState('');
    const [notes, setNotes] = React.useState(
        () =>
            JSON.parse(localStorage.getItem('notesLocal')) ||
            localStorage.setItem('notesLocal', JSON.stringify([]))
    );

    const [currentNoteId, setCurrentNoteId] = React.useState('');

    React.useEffect(() => {
        localStorage.setItem('notesLocal', JSON.stringify(notes));
    }, [notes]);

    React.useEffect(() => {
        async function getNotes() {
            const { data } = await supabase.from('notes').select();
            // setCurrentNoteId(data[0].id);
            setSnotes(data);
        }
        getNotes();
    }, [error]);

    React.useEffect(() => {
        setError('');
    }, []);

    async function createNewNote() {
        const newNote = {
            body: "# Type your markdown note's title here",
        };
        const res = await supabase.from('notes').insert(newNote);
        setError(res.error);
    }

    async function updateNote(text) {
        const res = await supabase
            .from('notes')
            .update({ body: text })
            .eq('id', currentNoteId);
        setError(res.error);

        // setNotes((oldNotes) => {
        //     const idx = oldNotes.indexOf(findCurrentNote());
        //     const curNote = findCurrentNote();

        //     setCurrentNoteId(curNote.id);

        //     if (idx > 0) {
        //         oldNotes.splice(idx, 1);
        //         oldNotes.unshift(curNote);
        //     }
        //     return oldNotes.map((oldNote) => {
        //         console.log(oldNote.id, currentNoteId);
        //         return oldNote.id === currentNoteId
        //             ? { ...oldNote, body: text }
        //             : oldNote;
        //     });
        // });
    }

    function findCurrentNote() {
        return (
            sNotes.find((note) => {
                return note.id === currentNoteId;
            }) || notes[0]
        );
    }

    return (
        <Suspense fallback={<GridLoader />}>
            <main className='bg-white font-karla container mx-auto'>
                {sNotes.length > 0 ? (
                    <Split
                        sizes={[30, 70]}
                        direction='horizontal'
                        className='split'
                    >
                        <Sidebar
                            notes={sNotes}
                            currentNote={findCurrentNote()}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                            setNotes={setNotes}
                        />
                        {sNotes.length > 0 && (
                            <Editor
                                currentNote={findCurrentNote()}
                                updateNote={updateNote}
                            />
                        )}
                    </Split>
                ) : (
                    <div className='no-notes'>
                        <h1>You have no notes</h1>
                        <button className='first-note' onClick={createNewNote}>
                            Create one now
                        </button>
                    </div>
                )}
            </main>
        </Suspense>
    );
};

export default ReactMDE;
