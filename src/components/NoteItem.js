import React from "react";

function NoteItem({ note, selectNote, setEdit} ) {
  return (
    <li onClick={() => {
      selectNote(note);
      setEdit(false)
      }} >
      <h2>{note.title}</h2>
      <p>{note.body.slice(0,30)}...</p>
    </li>
  );
}

export default NoteItem;
