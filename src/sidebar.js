import './styles/sidebar.css';
import React from 'react';

class Sidebar extends React.Component {
  render() {
    return (
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
    ); 
  }
}

export default Sidebar;

