import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Photos.css";

export default function Photos({ keyword }) {
  const [photos, setPhotos] = useState([]);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    if (!keyword) {
      return;
    }

    const apiKey = process.env.REACT_APP_PEXELS_API_KEY;

    const apiURL = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
      keyword
    )}&per_page=6`;

    axios
      .get(apiURL, {
        headers: {
          Authorization: apiKey,
        },
      })
      .then(function (response) {
        setPhotos(response.data.photos);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [keyword]);

  function showNextPhoto() {
    setCurrentPhoto(currentPhoto + 1);
  }
  function showPreviousPhoto() {
    setCurrentPhoto(currentPhoto - 1);
  }

  return (
    <div className="Photos">
      <h4 className="photo-title">Photos</h4>

      <div className="photo-carousel">
        <button
          className="photo-arrow"
          onClick={showPreviousPhoto}
          type="button"
        >
          ‹
        </button>

        <div className="photo-gallery">
          {photos.map(function (photo) {
            return (
              <div className="photo-card" key={photo.id}>
                <img
                  src={photo.src.medium}
                  alt={photo.alt}
                  className="gallery-image"
                />
              </div>
            );
          })}
        </div>

        <button className="photo-arrow" onClick={showNextPhoto} type="button">
          ›
        </button>
      </div>
    </div>
  );
}
