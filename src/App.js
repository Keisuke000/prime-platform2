import Header from './header';
import Sidebar from './sidebar';
import Main_contents from './main_contents';
import React from 'react';
import Mwrapper from './mwrapper';


function App() {
  const subject = "React dayo"
  console.log(subject);
  return (    
    <body>
      <div><Header /></div>
      <div><Sidebar /></div>
      <div><Main_contents /></div>
      <div><Mwrapper /></div>
    </body>
  );
}

export default App;

