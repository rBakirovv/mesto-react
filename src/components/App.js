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
  };

  return (
    <div className="body__container">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
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
              minlength="2" maxlength="40" />
            <span id="popup__field-name-error" className="popup__error"></span>
            <input className="popup__field popup__field-status" id="popup__field-status" name="about" type="text" required
              minlength="2" maxlength="200" />
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
              placeholder="Название" required minlength="2" maxlength="30" />
            <span id="popup__field-mesto-error" className="popup__error"></span>
            <input className="popup__field popup__field-link-mesto" id="popup__field-link-mesto" name="link" type="url"
              placeholder="Ссылка на картинку" required />
            <span id="popup__field-link-mesto-error" className="popup__error"></span>
            <button className="popup__button-save" type="submit">Создать</button>
          </>
        }
      />
      <ImagePopup />
    </div>
  );
};

export default App;
