import React from 'react';
import supabase from '../../utils/supabase';
const EditNote = ({ setIsEditing, text, id, setError }) => {
    const [editedText, setEditedText] = React.useState(() => text);
    async function handleUpdate() {
        const { error } = await supabase
            .from('notes')
            .update({ body: editedText })
            .eq('id', id);
        setError(error);
        setIsEditing(false);
    }
    function handleChange(e) {
        setEditedText(e.target.value);
    }
    return (
        <>
            <textarea
                className='textarea textarea-bordered text-white w-full'
                value={editedText}
                onChange={handleChange}
            ></textarea>
            <br />
            <button className='btn btn-success' onClick={handleUpdate}>
                Update note
            </button>
        </>
    );
};

const Card = (props) => {
    const [isEditing, setIsEditing] = React.useState(false);

    async function handleDel() {
        const { error } = await supabase
            .from('notes')
            .delete()
            .eq('id', props.note.id);
        props.setError(error);
    }
    function handleEdit() {
        setIsEditing(true);
    }
    return (
        <div className='card w-96 bg-primary text-primary-content'>
            <div className='card-body'>
                <h2 className='card-title'>{props.note.created_at}</h2>

                {isEditing ? (
                    <EditNote
                        setIsEditing={setIsEditing}
                        text={props.note.body}
                        id={props.note.id}
                        setError={props.setError}
                    />
                ) : (
                    <p>{props.note.body}</p>
                )}

                <div className='card-actions justify-end'>
                    <button className='btn btn-secondary' onClick={handleEdit}>
                        Edit
                    </button>
                    <button className='btn btn-warning' onClick={handleDel}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

const Supabase = () => {
    const [text, setText] = React.useState('');
    const [data, setData] = React.useState([]);
    const [error, setError] = React.useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    React.useEffect(() => {
        async function getNotes() {
            const { data } = await supabase.from('notes').select();
            setData(data);
        }
        getNotes();
        setError('');
        console.log(error);
    }, [error]);

    async function addNewNote() {
        const { error } = await supabase.from('notes').insert({ body: text });
        setError(error);
    }

    const handleClick = (event) => {
        addNewNote();
    };
    return (
        <div className='container grid mx-auto p-5'>
            <textarea
                className='textarea textarea-bordered'
                placeholder='Note'
                value={text}
                onChange={handleChange}
            ></textarea>
            <br />
            <button className='btn btn-primary' onClick={handleClick}>
                Add note
            </button>
            <hr className='my-10' />

            <div className='flex flex-wrap gap-5'>
                {data &&
                    data.map((note) => (
                        <Card
                            key={note.id}
                            note={note}
                            setError={setError}
                            handleChange={handleChange}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Supabase;
