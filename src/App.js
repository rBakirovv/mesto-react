import './index.css'

function App() {
  return (
    <div className="body__container">
        <header class="header">
          <div class="header__logo"></div>
        </header>
        <main>
          <section class="profile">
            <div class="profile__container">
              <img src="<%=require('./images/Avatar.png')%>" class="profile__avatar" alt="Аватар" />
              <button type="button" aria-label="Edit" class="profile__avatar-button"></button>
              <div class="profile__info">
                <div class="profile__edit">
                  <h1 class="profile__name">None</h1>
                  <button type="button" aria-label="Edit" class="profile__edit-button"></button>
                  <p class="profile__status">None</p>
                </div>
              </div>
              <button type="button" aria-label="Add" class="profile__add-button"></button>
            </div>
          </section>
          <section class="elements"></section>
        </main>
        <footer class="footer">
          <p class="footer__author">© 2021. Руслан Бакиров</p>
        </footer>
      </div>
  );
}

export default App;
