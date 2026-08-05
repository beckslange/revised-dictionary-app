import React from "react";
import Meaning from "./Meaning";

export default function Results({ results }) {
  if (!results) {
    return null;
  }

  return (
    <div className="Results">
      <h2>{results.word}</h2>

      {results.meanings.map(function (meaning, index) {
        return <Meaning meaning={meaning} key={index} />;
      })}
    </div>
  );
}
