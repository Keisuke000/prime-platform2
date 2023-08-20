import logo from './logo.svg';
import './App.css';
import './styles/footer.css';
import './styles/general.css';
import './styles/header.css';
import './styles/main.css';
import './styles/sidebar.css';
import './styles/sign-up.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React !!!
        
        </a>
      </header>
    </div>
  );
}

function header() {
  return (
    <div className="header">
    <div className="left-section">
      <a href="https://www.prime-n-salon.com/" target="_blank">
        <img className="primen-logo" src="logos/primen-logo.webp" alt="primen-logo"></img>
      </a>
    </div>
    <div className="middle-section">
      <input className="search-input" type="text" placeholder="キーワードを入力" />
      <button className="search-btn">
        <img className="search-icon" src="icons/search.png"></img>
        <div className="tooltip">検索する</div>
      </button>
    </div>
    <div className="right-section">
      <div className="toggle-section">
        <div className="toggle-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
        
  );
}


// export default App;
export default header;
