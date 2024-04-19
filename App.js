
import React, { useState } from 'react';
import Note from './Notes';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    const newNote = prompt('Enter your note:');
    if (newNote) {
      setNotes([...notes, newNote]);
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div className="app">
      <h1>Notes App</h1>
      <button onClick={addNote}>Add Note</button>
      <div className="notes">
        {notes.map((note, index) => (
          <Note key={index} note={note} onDelete={() => deleteNote(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
