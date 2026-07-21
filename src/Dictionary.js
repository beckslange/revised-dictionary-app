import "./Dictionary.css";
import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response);
    console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function search(event) {
    event.preventDefault();

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary App</h1>
      <form onSubmit={search} className="search-functions">
        <input type="search" autoFocus onChange={handleKeywordChange} />
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
}
