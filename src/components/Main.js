import React, { useEffect, useState } from 'react';
import api from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

    const [cards, setCards] = useState([]);

    const currentUser = React.useContext(CurrentUserContext);

    useEffect(() => {
        api.getInitialCards()
            .then(data => {
                setCards(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <main>
            <section className="profile">
                <div className="profile__container">
                    <img src={currentUser.avatar} className="profile__avatar" alt="Аватар" />
                    <button type="button" aria-label="Edit" className="profile__avatar-button" onClick={props.onEditAvatar}></button>
                    <div className="profile__info">
                        <div className="profile__edit">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <button type="button" aria-label="Edit" className="profile__edit-button" onClick={props.onEditProfile}></button>
                            <p className="profile__status">{currentUser.about}</p>
                        </div>
                    </div>
                    <button type="button" aria-label="Add" className="profile__add-button" onClick={props.onAddPlace}></button>
                </div>
            </section>
            <section className="elements">
                {cards.map((card) => <Card key={card._id} card={card} onCardClick={props.onCardClick} />)}
            </section>
        </main>
    )
};

export default Main;