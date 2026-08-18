import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";
import Photos from "./Photos";

export default function Results({ results }) {
  if (!results) {
    return null;
  }

  return (
    <div className="Results">
      <Phonetics word={results.word} phonetics={results.phonetics} />

      {results.meanings.map((meaning) => (
        <Meaning
          meaning={meaning}
          key={`${meaning.partOfSpeech}-${meaning.definitions[0]?.definition}`}
        />
      ))}

      <Photos keyword={results.word} />
    </div>
  );
}
