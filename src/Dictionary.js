import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

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
        <div className="row g-2">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a word..."
              autoFocus
              required
              value={keyword}
              onChange={handleKeywordChange}
              className="form-control"
            />
          </div>

          <div className="col-3">
            <button type="submit" className="btn btn-primary w-100">
              Search
            </button>
          </div>
        </div>
      </form>

      <Results results={results} />
    </div>
  );
}
