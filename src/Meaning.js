import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning({ meaning }) {
  return (
    <div className="Meaning">
      <div className="meaning-left">
        <h3 className="part-of-speech">{meaning.partOfSpeech}</h3>

        <ol className="definitions">
          {meaning.definitions.slice(0, 5).map(function (definition, index) {
            return (
              <li className="definition" key={index}>
                {definition.definition}
              </li>
            );
          })}
        </ol>
      </div>

      <div className="meaning-right">
        <h4 className="examples-heading">
          <strong>Used in a sentence</strong>
        </h4>
        <ul className="examples">
          {meaning.definitions.slice(0, 5).map(function (definition, index) {
            if (!definition.example) {
              return null;
            }

            return (
              <li className="example" key={index}>
                {definition.example}
              </li>
            );
          })}
        </ul>

        <Synonyms synonyms={meaning.synonyms} />
      </div>
    </div>
  );
}
