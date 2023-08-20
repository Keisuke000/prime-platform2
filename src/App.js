import logo from './logo.svg';
import './App.css';

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
    <div class="left-section">
      <a href="https://www.prime-n-salon.com/" target="_blank">
        <img class="primen-logo" src="logos/primen-logo.webp" alt="primen-logo"></img>
      </a>
    </div>
    <div class="middle-section">
      <input class="search-input" type="text" placeholder="キーワードを入力">
      <button class="search-btn">
        <img class="search-icon" src="icons/search.png"></img>
        <div class="tooltip">検索する</div>
      </button>
      </input>
    </div>
    <div class="right-section">
      <div class="toggle-section">
        <div class="toggle-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
        
  );
}


export default App;
