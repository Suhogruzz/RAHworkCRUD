import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Note from './components/Note/Note';
import Update from './components/Update/Update';


export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_NOTES_URL)
      .then(response => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setNotes(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  const handleNote = (newNote) => {
    setNotes((prevNotes) => [...newNote]);
  };

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className="App">
        <Update title="Notes" onClick={handleNote}/>
        <Note notes={notes} onChange={handleNote}/>
        <Form
          className="Form"
          textarea="true"
          button="true"
          onSubmit={handleNote}
        />
      </div>
    );
  }
}