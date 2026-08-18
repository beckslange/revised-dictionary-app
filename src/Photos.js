import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Photos({ keyword }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (!keyword) {
      return;
    }

    const apiKey = process.env.REACT_APP_PEXELS_API_KEY;
    console.log("Pexels key exists:", Boolean(apiKey));

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
        console.log(response.data);
        setPhotos(response.data.photos);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [keyword]);

  return (
    <div className="Photos">
      {photos.map(function (photo) {
        return <img src={photo.src.medium} alt={photo.alt} key={photo.id} />;
      })}
    </div>
  );
}
