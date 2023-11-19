import Header from './header';
import Sidebar from './components/Sidebar';
import Main_contents from './main_contents';
import Main_contents2 from './main_contents2';
import React from 'react';
import Mwrapper from './mwrapper';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";

// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function App() {
  return (
    <body>
      <div><Header /></div>
      <div><Sidebar /></div>
      {/* <div>
        <BrowserRouter>
          <Routes>
            <Route path={`/`} element={<Main_contents />} />
            <Route path={`/home/`} element={<Main_contents2 />} />
            <Route path={`/analitics/`} element={<Main_contents2 />} />
          </Routes>
        </BrowserRouter>
      </div> */}
      <div><Main_contents /></div>
      <div><Mwrapper /></div>
    </body>
  );
}

export default App;

