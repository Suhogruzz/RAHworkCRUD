import axios from 'axios';

const URL = import.meta.env.VITE_NOTES_URL;

export default function Update({ title, onClick }) {
  const updateNote = () => axios.get(URL).then((res) => onClick(res.data))

  return (
    <div className="Update">
      <h2>{title}</h2>
      <button onClick={updateNote}>⭮</button>
    </div>
  )
}