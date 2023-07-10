'use client';

import { useState } from 'react';

export default function Picture() {
  const [isActive, setIsActive] = useState(false);
  let backgroundClass = "background";
  let pictureClass = "picture";

  if (isActive) {
    pictureClass += " picture--active";
  } else {
    backgroundClass += " background--active"
  }
  
  function handleBackgroundClick(event) {
    event.preventDefault();
    setIsActive(false);
  }
  
  function handlePictureClick(event) {
    event.preventDefault();
    event.stopPropagation();
    setIsActive(true);
  }
  
  return (
    <div onClick={handleBackgroundClick}
      className={backgroundClass}>
      <img onClick={handlePictureClick}
        className={pictureClass}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
