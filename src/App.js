import logo from './logo.svg';
import './App.css';
import './styles/footer.css';
import './styles/general.css';
import './styles/header.css';
import './styles/main.css';
import './styles/sidebar.css';
import './styles/sign-up.css';
import header from './header';
import main_contents from './main_contents';
import React from 'react';


function App() {
  const subject = "React dayo"
  console.log(subject);
  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       Hello, {subject}!
    //     </p>
    //   </header>
    //   <body>
    //   <p>Hello, {subject}!
    //     </p>
    //   </body>
    // </div>

   
  <body>
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
    {/* <header /> */}

    <nav class="sidebar">
      <div class="upper-section">
        <div class="sidebar-link">
          <img class="announce-icon" src="icons/announce.png" />
          <div class="announce-count">3</div>
          <p class="announce-description">掲示板</p>
        </div>
        <div class="sidebar-link">
          <img class="step-icon" src="icons/step.png" />
          <p class="step-description">資料</p>
        </div>
        <div class="sidebar-link">
          <img class="results-icon" src="icons/results.png" />
          <p class="results-description">全体結果</p>
        </div>
        <div class="sidebar-link">
          <img class="karte-icon" src="icons/karte.png" />
          <p class="karte-description">個別情報</p>
        </div>
        <div class="sidebar-link">
          <img class="todo-icon" src="icons/todo.png" />
          <p class="todo-description">To Do リスト</p>
        </div>
      </div>
      <div class="lower-section">
        <div class="sidebar-link">
          <img class="setting-icon" src="icons/setting.png" />
          <p class="setting-description">設定</p>
        </div>
        <div class="sidebar-link">
          <img class="logout-icon" src="icons/logout.png" />
          <p class="logout-description">ログアウト</p>
        </div>
        <button class="registration-btn">
          新規登録はこちら
        </button>
        <div class="sns-btns">
          <div class="slack-btn">
            <a href="" target="_blank">
              <img class="slack-icon" src="icons/slack.png" />
            </a>
            <div class="tooltip">Slackに参加</div>
          </div>
          <div class="instagram-btn">
            <a href="https://www.instagram.com/prime.n_salon/" target="_blank">
              <img class="instagram-icon" src="icons/instagram.png" />
            </a>
            <div class="tooltip">Instagram</div>
          </div>
          <div class="twitter-btn">
            <a href="https://twitter.com/nsyuukatu" target="_blank">
              <img class="twitter-icon" src="icons/twitter.png" />
            </a>
            <div class="tooltip">Twitter</div>
          </div>
          <div class="youtube-btn">
            <a href="https://www.youtube.com/@prime.nsalon6667" target="_blank">
              <img class="youtube-icon" src="icons/youtube.png" />
            </a>
            <div class="tooltip">Youtube</div>
          </div>
          <div class="tiktok-btn">
            <a href="https://www.tiktok.com/@prime.nsalon" target="_blank">
              <img class="tiktok-icon" src="icons/tik-tok.png" />
            </a>
            <div class="tooltip">Tiktok</div>
          </div>
        </div>
      </div>
    </nav>

    <main class="main-contents">
      <div class="contents">
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTm1MR9j6WMG5kRD1zKmq_DcxMi_klhFLSCEq8U_7qQzZJt3IqGg7tb8VEJWOy-Ps92jtpd2e3FvHb6/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </div>
    </main>

    <div class="wrapper">
      <footer class="footer">
        <p>All rights reserved by Prime. N Salon</p>
      </footer>
    </div>

  </body>

  );
}

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <header />
//         <main_contents />
//         {/* <Footer /> */}
//       </div>
//     );
//   }
// }

function sidebar() {
  return (
    <div className="sidebar">
            <div className="upper-section">
        <div className="sidebar-link">
          <img className="announce-icon" src="icons/announce.png" />
          <div className="announce-count">3</div>
          <p className="announce-description">掲示板</p>
        </div>
        <div className="sidebar-link">
          <img className="step-icon" src="icons/step.png" />
          <p className="step-description">資料</p>
        </div>
        <div className="sidebar-link">
          <img className="results-icon" src="icons/results.png" />
          <p className="results-description">全体結果</p>
        </div>
        <div className="sidebar-link">
          <img className="karte-icon" src="icons/karte.png" />
          <p className="karte-description">個別情報</p>
        </div>
        <div className="sidebar-link">
          <img className="todo-icon" src="icons/todo.png" />
          <p className="todo-description">To Do リスト</p>
        </div>
      </div>
      <div className="lower-section">
        <div className="sidebar-link">
          <img className="setting-icon" src="icons/setting.png" />
          <p className="setting-description">設定</p>
        </div>
        <div className="sidebar-link">
          <img className="logout-icon" src="icons/logout.png" />
          <p className="logout-description">ログアウト</p>
        </div>
        <button className="registration-btn">
          新規登録はこちら
        </button>
        <div className="sns-btns">
          <div className="slack-btn">
            <a href="" target="_blank">
              <img className="slack-icon" src="icons/slack.png" />
            </a>
            <div className="tooltip">Slackに参加</div>
          </div>
          <div className="instagram-btn">
            <a href="https://www.instagram.com/prime.n_salon/" target="_blank">
              <img className="instagram-icon" src="icons/instagram.png" />
            </a>
            <div className="tooltip">Instagram</div>
          </div>
          <div className="twitter-btn">
            <a href="https://twitter.com/nsyuukatu" target="_blank">
              <img className="twitter-icon" src="icons/twitter.png" />
            </a>
            <div className="tooltip">Twitter</div>
          </div>
          <div className="youtube-btn">
            <a href="https://www.youtube.com/@prime.nsalon6667" target="_blank">
              <img className="youtube-icon" src="icons/youtube.png" />
            </a>
            <div className="tooltip">Youtube</div>
          </div>
          <div className="tiktok-btn">
            <a href="https://www.tiktok.com/@prime.nsalon" target="_blank">
              <img className="tiktok-icon" src="icons/tik-tok.png" />
            </a>
            <div className="tooltip">Tiktok</div>
          </div>
        </div>
      </div>
    </div>      
  );
}


function mwrapper() {
  return (
    <div className="wrapper">
      <footer class="footer">
        <p>All rights reserved by Prime. N Salon</p>
      </footer>
    </div>      
  );
}

export default App;
// export default header;
// export default sidebar;
// export default main_contents;
// export default mwrapper;
// render(<header />);
// render(<sidebar />);
// render(<main_contents />);
// render(<mwrapper />);
