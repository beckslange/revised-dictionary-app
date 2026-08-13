import React from "react";
import "./Phonetics.css";

export default function Phonetics({ phonetics }) {
  if (!phonetics) {
    return null;
  }

  const phoneticWithAudio = phonetics.find(
    (phonetic) => phonetic.audio && phonetic.audio.trim() !== ""
  );

  const phoneticText = phonetics.find((phonetic) => phonetic.text);

  function playAudio() {
    if (phoneticWithAudio) {
      const audio = new Audio(phoneticWithAudio.audio);
      audio.play();
    }
  }

  return (
    <div className="Phonetics">
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

      {phoneticText && <div className="phonetic-text">{phoneticText.text}</div>}
    </div>
  );
}
