import { Trash } from "lucide-react";
import { Card } from "@/components/ui/card";

const Note = ({ note, deleteNote, index }) => {
  return (
    <Card className="p-4 relative">
      <h2 className="font-bold">{note.title}</h2>
      <p>{note.content}</p>

      <Trash
        className="absolute bottom-2 right-2 cursor-pointer text-red-500"
        onClick={() => deleteNote(index)}
      />
    </Card>
  );
};

export default Note;