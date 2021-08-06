import React from "react";

function NoteViewer({ title, body, setEdit }) {
  
  function editBtn(){
    setEdit(true)
    console.log("Edit is Clicked!")
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={editBtn} >Edit</button>
    </div>
  );
}

export default NoteViewer;
