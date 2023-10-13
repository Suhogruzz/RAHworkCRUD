import './Note.css';
import axios from 'axios';

const URL = import.meta.env.VITE_NOTES_URL;

export default function Note({ notes, onChange }) {
  const removeNote = (id) => axios.delete(`${URL}/${id}`)
  .then((res) => axios.get(URL))
  .then((res) => onChange(res.data))


  return (
    <div className="Notes">
      {notes.map((note) =>
        <div key={note.id} className="Note">
          <div className="note_title">{note.content}</div>
          <button onClick={() => removeNote(note.id)}>&times;</button>
        </div>
      )}
    </div>
  )
}