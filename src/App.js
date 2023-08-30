import logo from './logo.svg';
import './App.css';
import './styles/footer.css';
import './styles/general.css';
import './styles/header.css';
import './styles/main.css';
import './styles/sidebar.css';
import './styles/sign-up.css';
import Header from './header';
import Sidebar from './sidebar';
import Main_contents from './main_contents';
import React from 'react';
import Mwrapper from './mwrapper';


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
    <div><Header /></div>
    <div><Sidebar /></div>
    <div><Main_contents /></div>
    <div><Mwrapper /></div>
  </body>

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
