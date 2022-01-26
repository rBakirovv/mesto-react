import React from 'react';

function Main() {
    return (
        <main>
            <section class="profile">
                <div class="profile__container">
                    <img src="#" class="profile__avatar" alt="Аватар" />
                    <button type="button" aria-label="Edit" class="profile__avatar-button" onClick={handleEditAvatarClick}></button>
                    <div class="profile__info">
                        <div class="profile__edit">
                            <h1 class="profile__name">Жак-Ив Кусто</h1>
                            <button type="button" aria-label="Edit" class="profile__edit-button" onClick={handleEditProfileClick}></button>
                            <p class="profile__status">Исследователь океана</p>
                        </div>
                    </div>
                    <button type="button" aria-label="Add" class="profile__add-button" onClick={handleAddPlaceClick}></button>
                </div>
            </section>
            <section class="elements"></section>
        </main>
    )
}

function handleEditAvatarClick() {
    document.querySelector('.popup-avatar').classList.add('popup_opened');
}

function handleEditProfileClick() {
    document.querySelector('.popup-edit').classList.add('popup_opened');
}

function handleAddPlaceClick() {
    document.querySelector('.popup-add').classList.add('popup_opened');
}

export default Main;