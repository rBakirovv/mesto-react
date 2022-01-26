import '../index.css'
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className="body__container">
      <Header />
      <Main />
      <Footer />
      
      <section class="popup popup-avatar">
        <div class="popup__container">
          <button type="button" class="popup__button-clouse" aria-label="Close"></button>
          <h2 class="popup__title">Обновить аватар</h2>
          <form class="popup__form popup__avatar-form" name="avatar-form" novalidate>
            <input class="popup__field popup__field-link-avatar" id="popup__field-link-avatar" name="avatar" type="url"
              placeholder="Ссылка на картинку" required />
            <span id="popup__field-link-avatar-error" class="popup__error"></span>
            <button class="popup__button-save" type="submit">Сохранить</button>
          </form>
        </div>
      </section>

      <section class="popup popup-edit">
        <div class="popup__container">
          <button type="button" class="popup__button-clouse" aria-label="Close"></button>
          <h2 class="popup__title">Редактировать профиль</h2>
          <form class="popup__form popup__edit-form" name="edit-form" novalidate>
            <input class="popup__field popup__field-name" id="popup__field-name" name="name" type="text" required
              minlength="2" maxlength="40" />
            <span id="popup__field-name-error" class="popup__error"></span>
            <input class="popup__field popup__field-status" id="popup__field-status" name="about" type="text" required
              minlength="2" maxlength="200" />
            <span id="popup__field-status-error" class="popup__error"></span>
            <button class="popup__button-save" type="submit">Сохранить</button>
          </form>
        </div>
      </section>

    <section class="popup popup-add">
      <div class="popup__container">
        <button type="button" class="popup__button-clouse" aria-label="Close"></button>
        <h2 class="popup__title">Новое место</h2>
        <form class="popup__form popup__add-form" name="edit-form" novalidate>
          <input class="popup__field popup__field-mesto" id="popup__field-mesto" name="name" type="text"
            placeholder="Название" required minlength="2" maxlength="30" />
          <span id="popup__field-mesto-error" class="popup__error"></span>
          <input class="popup__field popup__field-link-mesto" id="popup__field-link-mesto" name="link" type="url"
            placeholder="Ссылка на картинку" required />
          <span id="popup__field-link-mesto-error" class="popup__error"></span>
          <button class="popup__button-save" type="submit">Создать</button>
        </form>
      </div>
    </section>
    </div>
  );
}

export default App;
