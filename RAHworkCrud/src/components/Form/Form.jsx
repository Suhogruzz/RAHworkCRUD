import { useState } from 'react';
import './Form.css';
import axios from 'axios';
const URL = import.meta.env.VITE_NOTES_URL

export default function Form({ className, textarea, button, onSubmit }) {
  const [area, setArea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (area) {
      axios.get(`${URL}/nextid`)
      .then((res) => axios.post(URL, { id: res.data, content: area }))
      .then((res) => axios.get(URL))
      .then((res) => onSubmit(res.data))
      resetForm();
    }
  };

  const handleArea = (e) => {
    setArea(() => e.target.value);
  };

  const resetForm = () => {
    setArea(() => '');
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      { textarea && <textarea value={area} onChange={handleArea} /> }
      { button && <button type="submit">Добавить</button> }
    </form>
  )
}