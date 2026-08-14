import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning({ meaning }) {
  const displayedDefinitions = meaning.definitions.slice(0, 5);
  const hasExamples = displayedDefinitions.some(function (definition) {
    return definition.example;
  });

  return (
    <>
      <div className="Meaning">
        <div className="meaning-left">
          <h3 className="part-of-speech">{meaning.partOfSpeech}</h3>

          <ol className="definitions">
            {displayedDefinitions.map(function (definition, index) {
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

          {hasExamples ? (
            <ul className="examples">
              {displayedDefinitions.map(function (definition, index) {
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
          ) : (
            <p className="no-examples">No example sentences available</p>
          )}
        </div>
      </div>
      <Synonyms synonyms={meaning.synonyms} />
    </>
  );
}
