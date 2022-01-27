import React from 'react';

function Main(props) {
    return (
        <main>
            <section className="profile">
                <div className="profile__container">
                    <img src="#" className="profile__avatar" alt="Аватар" />
                    <button type="button" aria-label="Edit" className="profile__avatar-button" onClick={props.onEditProfile}></button>
                    <div className="profile__info">
                        <div className="profile__edit">
                            <h1 className="profile__name">Жак-Ив Кусто</h1>
                            <button type="button" aria-label="Edit" className="profile__edit-button" onClick={props.onEditAvatar}></button>
                            <p className="profile__status">Исследователь океана</p>
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