import React from 'react';

function Card(props) {
  
  function handleCardClick() {
    props.onCardClick(props.card);
  } 

  return (
    <div className="elements__item">
      <button type="button" className="elements__trash-button" aria-label="Delete"></button>
      <img className="elements__photo" src={props.card.link} alt={props.card.name} onClick={handleCardClick}/>
      <div className="elements__item-container">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like-container">
          <button type="button" className="elements__like-button" aria-label="Like"></button>
          <span className="elements__like-number"></span>
        </div>
      </div>
    </div>
  )
};

export default Card;