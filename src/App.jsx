import { useState, useEffect } from "react";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);

  // Load notes
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes"));
    if (saved) setNotes(saved);
  }, []);

  // Save notes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes((prev) => [...prev, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prev) =>
      prev.filter((note, index) => index !== id)
    );
  };

  return (
    <div>
      <Header />
      <CreateNote addNote={addNote} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
        {notes.map((note, index) => (
          <Note
            key={index}
            index={index}
            note={note}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
  );
}

export default App;