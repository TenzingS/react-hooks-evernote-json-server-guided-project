import React from "react";
import NoteList from "./NoteList";

function Sidebar({ notes, selectNote, setEdit, setNotes }) {

  const defaultNote = {title: "default", body: "placeholder"}

  function createNew(){
    setNotes(prevNotes => {
      const spreadnotes = [...prevNotes];
      spreadnotes.push(defaultNote);
      return spreadnotes
    })
  }

  return (
    <div className="master-detail-element sidebar">
      {notes.map((note) => <NoteList key={note.id} note={note} selectNote={selectNote} setEdit={setEdit}/>)}
      <button onClick={createNew} >New</button>
    </div>
  );
}

export default Sidebar;
