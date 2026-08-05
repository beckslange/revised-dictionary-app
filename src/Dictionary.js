import "./Dictionary.css";
import Results from "./Results";
import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    const searchedWord = keyword.trim();

    if (!searchedWord) {
      return;
    }

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(
      searchedWord
    )}`;
    axios.get(apiURL).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary App</h1>
      <form onSubmit={search} className="search-functions">
        <input
          type="search"
          placeholder="Enter a word..."
          autoFocus
          required
          value={keyword}
          onChange={handleKeywordChange}
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>

      <Results results={results} />
    </div>
  );
}
