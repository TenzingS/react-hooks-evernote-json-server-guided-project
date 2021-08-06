import React, { useEffect, useState } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notes, setNotes] = useState([])
  const [content, setContent] = useState(null)
  const [search, setSearch] = useState('')
  const [edit, setEdit] = useState(false)


  useEffect(() => {
  fetch('http://localhost:3000/notes')
  .then(res => res.json())
  .then(data => setNotes(data))
}, [])

function selectNote(note){
  const selectContent = note 
  setContent(selectContent)
  console.log('Note is Clicked!')
}

function searchInput(input){
  setSearch(input)
}

function filterSearch(){
  if(search.length > 0){
    return notes.filter(note => note.title.toLowerCase().includes(search.toLowerCase()))
  } else{
    return notes
  }
}

  return (
    <>
      <Search searchInput={searchInput}/>
      <div className="container">
        <Sidebar notes={filterSearch()} selectNote={selectNote} setEdit={setEdit} setNotes={setNotes} />
        <Content notes={notes} setNotes={setNotes} content={content} setEdit={setEdit} edit={edit} />
      </div>
    </>
  );
}

export default NoteContainer;
