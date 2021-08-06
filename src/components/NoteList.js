import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ note, selectNote, setEdit }) {
  return (
    <ul>
      {/* Render list of notes here... */}
      <NoteItem note={note} selectNote={selectNote} setEdit={setEdit}/>
    </ul>
  );
}

export default NoteList;
