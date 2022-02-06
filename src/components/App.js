import React, { useState, useEffect } from 'react';
import '../index.css'
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then(data => {
        setCurrentUser(data)
      })
      .catch((err) => {
        console.log(err);
      })

    api.getInitialCards()
      .then(data => {
        setCards(data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

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
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards={cards}
        />
        <Footer />
        <PopupWithForm
          name='avatar'
          title='Обновить аватар'
          buttonText='Сохранить'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <input className="popup__field popup__field-link-avatar" id="popup__field-link-avatar" name="avatar" type="url"
                placeholder="Ссылка на картинку" required />
              <span id="popup__field-link-avatar-error" className="popup__error"></span>
            </>
          }
        />
        <PopupWithForm
          name='edit'
          title='Редактировать профиль'
          buttonText='Сохранить'
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
            </>
          }
        />
        <PopupWithForm
          name='add'
          title='Новое место'
          buttonText='Создать'
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
            </>
          }
        />
        <PopupWithForm
          name='confirm'
          title='Вы уверены?'
          buttonText='Да'
        />
        <ImagePopup
          name={selectedCard.name}
          link={selectedCard.link}
          isOpen={selectedCard.isImageOpen}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
