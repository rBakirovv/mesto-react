import React from 'react';

function ImagePopup() {
  return (
    <section className="popup popup-elements">
      <div className="popup__elements-container">
        <button type="button" className="popup__button-clouse popup__elements-button-clouse" aria-label="Close"></button>
        <img className="popup__img-full-size" />
        <p className="popup__img-subtitle"></p>
      </div>
    </section>
  )
};

export default ImagePopup;