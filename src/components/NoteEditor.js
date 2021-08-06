import React, {useState} from "react";

function NoteEditor({ content, title, body, setEdit, setNotes }) {
  const [titleData, setTitleData] = useState(title)
  const [bodyData, setBodyData] = useState(body)

  function handleTitle(event){
    setTitleData(event.target.value)
  }

  function handleBody(event){
    setBodyData(event.target.value)
  }

  const formData = {
    title: titleData,
    body: bodyData
  }

  function handleSubmit(event){
    event.preventDefault();
    setNotes(prevNotes => {
      const index = prevNotes.indexOf(content);
      const spreadNotes = [...prevNotes];
      spreadNotes[index] = formData;
      return spreadNotes;
    })
  }


  function handleCancel() {
    setEdit(false)
  }

  return (
    <form className="note-editor" onSubmit={handleSubmit} >
      <input type="text" name="title" onChange={handleTitle} value={titleData} />
      <textarea type="text" name="body" onChange={handleBody} value={bodyData}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
