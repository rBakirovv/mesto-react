import React, { useCallback, useEffect, useState } from 'react';
import api from '../utils/Api';

function Main(props) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');

    useEffect(() => {
        api.getUserInfo().then(data => {
            setUserName(data.name)
            setUserDescription(data.about)
            setUserAvatar(data.avatar)
        })
    }, []);


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
            <section className="elements"></section>
        </main>
    )
};

export default Main;