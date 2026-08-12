import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleKeywordChange(event) {
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

    const apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(
      searchedWord
    )}`;

    axios
      .get(apiURL)
      .then(handleResponse)
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter a word..."
          autoFocus
          required
          value={keyword}
          onChange={handleKeywordChange}
        />

        <button type="submit">Search</button>
      </form>

      <Results results={results} />
    </div>
  );
}
