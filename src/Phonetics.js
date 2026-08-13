import React from "react";
import "./Phonetics.css";

export default function Phonetics({ word, phonetics }) {
  const phoneticWithAudio = phonetics?.find(
    (phonetic) => phonetic.audio && phonetic.audio.trim() !== ""
  );

  const phoneticWithText = phonetics?.find((phonetic) => phonetic.text);

  function playAudio() {
    if (phoneticWithAudio) {
      const audio = new Audio(phoneticWithAudio.audio);
      audio.play();
    }
  }

  return (
    <div className="Phonetics">
      <div className="word-header">
        <h2>{word}</h2>
        {phoneticWithAudio && (
          <button
            className="audio-button"
            onClick={playAudio}
            type="button"
            aria-label="Play pronunciation"
          >
            🔊
          </button>
        )}
      </div>

      {phoneticWithText && (
        <div className="phonetic-text">{phoneticWithText.text}</div>
      )}
    </div>
  );
}
