import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results({ results }) {
  if (!results) {
    return null;
  }

  return (
    <div className="Results mt-4">
      <h2 className="text-center fw-bold mb-2">{results.word}</h2>

      <Phonetics phonetics={results.phonetics} />

      {results.meanings.map(function (meaning, index) {
        return <Meaning meaning={meaning} key={index} />;
      })}
    </div>
  );
}
