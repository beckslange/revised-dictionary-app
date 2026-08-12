import React from "react";

export default function Synonyms({ synonyms }) {
  if (!synonyms || synonyms.length === 0) {
    return null;
  }

  return (
    <div className="Synonyms">
      <h4>Synonyms</h4>

      <ul>
        {synonyms.map(function (synonym) {
          return <li key={synonym}>{synonym}</li>;
        })}
      </ul>
    </div>
  );
}
