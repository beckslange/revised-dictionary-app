import React from "react";

export default function Phonetics({ phonetics }) {
  if (!phonetics || phonetics.length === 0) {
    return null;
  }

  return (
    <div className="Phonetics">
      {phonetics.map(function (phonetic, index) {
        return (
          <div key={index}>
            {phonetic.text && <span>{phonetic.text}</span>}
            {phonetic.audio && (
              <audio controls>
                <source src={phonetic.audio} type="audio/mpeg" />
              </audio>
            )}
          </div>
        );
      })}
    </div>
  );
}
