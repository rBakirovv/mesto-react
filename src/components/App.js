import '../index.css'
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className="body__container">
        <Header />
        <Main />
        <footer class="footer">
          <p class="footer__author">© 2021. Руслан Бакиров</p>
        </footer>
      </div>
  );
}

export default App;
