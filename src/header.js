import './styles/header.css';
import React from 'react';

function header() {
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

// class header extends React.Component {
//   render() {
//     return (
//       <div className='header'>
//         <div className='header-logo'>
//           <img src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/character_logo.svg' />
//         </div>
//       </div>
//     );
//   }
// }

// function header() {
//   return (
//     <div className="header">
//       <div className="left-section">
//         <a href="https://www.prime-n-salon.com/" target="_blank">
//           <img className="primen-logo" src="logos/primen-logo.webp" alt="primen-logo"></img>
//         </a>
//       </div>
//       <div className="middle-section">
//         <input className="search-input" type="text" placeholder="キーワードを入力" />
//         <button className="search-btn">
//           <img className="search-icon" src="icons/search.png"></img>
//           <div className="tooltip">検索する</div>
//         </button>
//       </div>
//       <div className="right-section">
//         <div className="toggle-section">
//           <div className="toggle-btn">
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </div>
//       </div>
//     </div>      
//   );
// }


export default header;

