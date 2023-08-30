import './styles/header.css';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header class="header">
        <div class="left-section">
          <a href="https://www.prime-n-salon.com/" target="_blank">
            <img class="primen-logo" src="logos/primen-logo.webp" alt="primen-logo" />
          </a>
        </div>
        <div class="middle-section">
          <input class="search-input" type="text" placeholder="キーワードを入力" />
          <button class="search-btn">
            <img class="search-icon" src="icons/search.png" />
            <div class="tooltip">検索する</div>
          </button>
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
      </header>
    ); 
  }
}


export default Header;

