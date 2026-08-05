import React from "react";

export default function Meaning({ meaning }) {
  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>

      {meaning.definitions.map(function (definition, index) {
        return (
          <div className="Definition" key={index}>
            <p>{definition.definition}</p>

            {definition.example && <p>Example: {definition.example}</p>}
          </div>
        );
      })}
    </div>
  );
}
