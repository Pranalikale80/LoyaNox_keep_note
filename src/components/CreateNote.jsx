import { useState } from "react";
import { Button } from "@/components/ui/button";

const CreateNote = ({ addNote }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [expand, setExpand] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitNote = (e) => {
    e.preventDefault();
    addNote(note);
    setNote({ title: "", content: "" });
  };

  return (
    <div
      className="bg-white shadow-md p-4 rounded-lg max-w-md mx-auto mt-5"
      onClick={() => setExpand(true)}
    >
      {expand && (
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full mb-2 outline-none"
        />
      )}

      <textarea
        name="content"
        value={note.content}
        onChange={handleChange}
        placeholder="Take a note..."
        className="w-full outline-none resize-none"
      />

      {expand && (
        <Button onClick={submitNote} className="mt-2">
          Add
        </Button>
      )}
    </div>
  );
};

export default CreateNote;