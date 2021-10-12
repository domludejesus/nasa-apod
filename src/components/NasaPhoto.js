import React, { useState, useEffect } from "react";

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
                // we'll update the KEYHERE soon!
        `https://api.nasa.gov/planetary/apod?api_key=W3lWnJ5I0n0muUXiD9AEMawiRaH1JFSDeGDgKtoz`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <div className="nasa-photo">
        <img
          src={photoData.url}
          alt={photoData.title}
          
        />
    </div>
  )
}