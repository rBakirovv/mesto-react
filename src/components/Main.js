import React from 'react';

function Main() {
    return (
        <main>
            <section class="profile">
                <div class="profile__container">
                    <img src="#" class="profile__avatar" alt="Аватар" />
                    <button type="button" aria-label="Edit" class="profile__avatar-button"></button>
                    <div class="profile__info">
                        <div class="profile__edit">
                            <h1 class="profile__name">Жак-Ив Кусто</h1>
                            <button type="button" aria-label="Edit" class="profile__edit-button"></button>
                            <p class="profile__status">Исследователь океана</p>
                        </div>
                    </div>
                    <button type="button" aria-label="Add" class="profile__add-button"></button>
                </div>
            </section>
            <section class="elements"></section>
        </main>
    )
}

export default Main;