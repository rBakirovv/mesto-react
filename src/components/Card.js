import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = (
    `elements__trash-button ${isOwn ? ' ' : 'elements__trash-button_hiden'}`
  ); 

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="elements__item">
      <button type="button" className={cardDeleteButtonClassName} aria-label="Delete"></button>
      <img className="elements__photo" src={props.card.link} alt={props.card.name} onClick={handleCardClick} />
      <div className="elements__item-container">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like-container">
          <button type="button" className="elements__like-button" aria-label="Like"></button>
          <span className="elements__like-number">{props.card.likes.length}</span>
        </div>
      </div>
    </div>
  )
};

export default Card;