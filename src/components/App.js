import React, { useState } from 'react';
import '../index.css'
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({
    isImageOpen: false,
    link: '',
    name: '',
  });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ isImageOpen: false, link: '', name: '' })
  };

  function handleCardClick(card) {
    const { link, name } = card
    setSelectedCard({ isImageOpen: true, link: link, name: name })
  }

  return (
    <div className="body__container">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input className="popup__field popup__field-link-avatar" id="popup__field-link-avatar" name="avatar" type="url"
              placeholder="Ссылка на картинку" required />
            <span id="popup__field-link-avatar-error" className="popup__error"></span>
            <button className="popup__button-save" type="submit">Сохранить</button>
          </>
        }
      />
      <PopupWithForm
        name='edit'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input className="popup__field popup__field-name" id="popup__field-name" name="name" type="text" required
              minLength="2" maxLength="40" placeholder="Имя" />
            <span id="popup__field-name-error" className="popup__error"></span>
            <input className="popup__field popup__field-status" id="popup__field-status" name="about" type="text" required
              minLength="2" maxLength="200" placeholder="О себе" />
            <span id="popup__field-status-error" className="popup__error"></span>
            <button className="popup__button-save" type="submit">Сохранить</button>
          </>
        }
      />
      <PopupWithForm
        name='add'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input className="popup__field popup__field-mesto" id="popup__field-mesto" name="name" type="text"
              placeholder="Название" required minLength="2" maxLength="30" />
            <span id="popup__field-mesto-error" className="popup__error"></span>
            <input className="popup__field popup__field-link-mesto" id="popup__field-link-mesto" name="link" type="url"
              placeholder="Ссылка на картинку" required />
            <span id="popup__field-link-mesto-error" className="popup__error"></span>
            <button className="popup__button-save" type="submit">Создать</button>
          </>
        }
      />
      <PopupWithForm
        name='confirm'
        title='Вы уверены?'
        children={
          <button className="popup__button-save" type="submit">Да</button>
        }
      />
      <ImagePopup
        name={selectedCard.name}
        link={selectedCard.link}
        isOpen={selectedCard.isImageOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
};

export default App;
