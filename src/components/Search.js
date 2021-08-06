import React, {useState} from "react";

function Search({ searchInput }) {
  const [userInput, setUserInput] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    searchInput(userInput)
  }

  return (
    <div className="filter">
      <form onSubmit= {handleSubmit}>
        <input 
          id="search-bar" 
          type="text" 
          placeholder="Search Notes" 
          value={userInput} 
          onChange={e => setUserInput(e.target.value)}/>
      </form>
    </div>
  );
}

export default Search;