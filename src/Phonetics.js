import React from "react";
import "./Phonetics.css";

export default function Phonetics({ word, phonetics }) {
  console.log("All phonetics:", phonetics);

  const phoneticWithAudio = phonetics?.find(
    (phonetic) =>
      phonetic.audio &&
      phonetic.audio.trim() !== "" &&
      phonetic.audio.startsWith("https://")
  );

  const phoneticWithText = phonetics?.find((phonetic) => phonetic.text);

  function playAudio() {
    console.log("Trying to play:", phoneticWithAudio?.audio);

    if (phoneticWithAudio?.audio) {
      const audio = new Audio(phoneticWithAudio.audio);

      audio.play().catch((error) => {
        console.log("Audio error:", error);
      });
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
