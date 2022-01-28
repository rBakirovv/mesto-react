import React, { useEffect, useState } from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');

    const [cards, setCards] = useState([])

    useEffect(() => {
        api.getUserInfo()
            .then(data => {
                setUserName(data.name)
                setUserDescription(data.about)
                setUserAvatar(data.avatar)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

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
                    <img src={userAvatar} className="profile__avatar" alt="Аватар" />
                    <button type="button" aria-label="Edit" className="profile__avatar-button" onClick={props.onEditAvatar}></button>
                    <div className="profile__info">
                        <div className="profile__edit">
                            <h1 className="profile__name">{userName}</h1>
                            <button type="button" aria-label="Edit" className="profile__edit-button" onClick={props.onEditProfile}></button>
                            <p className="profile__status">{userDescription}</p>
                        </div>
                    </div>
                    <button type="button" aria-label="Add" className="profile__add-button" onClick={props.onAddPlace}></button>
                </div>
            </section>
            <section className="elements">
                {cards.map((card, i) => <Card key={i} card={card}/>)}
            </section>
        </main>
    )
};

export default Main;