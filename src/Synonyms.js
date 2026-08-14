import React from "react";
import "./Synonyms.css";

export default function Synonyms({ synonyms }) {
  if (!synonyms || synonyms.length === 0) {
    return null;
  }

  return (
    <div className="Synonyms">
      <h5>Synonyms</h5>
      <p>{synonyms.join(" | ")}</p>
    </div>
  );
}
