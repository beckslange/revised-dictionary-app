import React, { useEffect, useState } from "react";
import "./Phonetics.css";

export default function Phonetics({ word, phonetics }) {
  const [audioError, setAudioError] = useState(false);

  useEffect(() => {
    setAudioError(false);
  }, [word]);

  const phoneticWithAudio = phonetics?.find(
    (phonetic) =>
      phonetic.audio &&
      phonetic.audio.trim() !== "" &&
      phonetic.audio.startsWith("https://")
  );

  const phoneticWithText = phonetics?.find((phonetic) => phonetic.text);

  function playAudio() {
    if (!phoneticWithAudio) {
      return;
    }

    setAudioError(false);

    const audio = new Audio(phoneticWithAudio.audio);

    audio.play().catch((error) => {
      console.log("Pronunciation audio is unavailable:", error);
      setAudioError(true);
    });
  }

  return (
    <div className="Phonetics">
      <div className="word-header">
        <h1>{word}</h1>

        {phoneticWithAudio && (
          <button
            type="button"
            className="audio-button"
            onClick={playAudio}
            aria-label="Play pronunciation"
          >
            🔊
          </button>
        )}
      </div>

      {phoneticWithText && (
        <div className="phonetic-text">{phoneticWithText.text}</div>
      )}

      {audioError && (
        <div className="audio-error">Pronunciation audio unavailable</div>
      )}
    </div>
  );
}
