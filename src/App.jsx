import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalContext } from './Context';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <GlobalContext>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </GlobalContext>
      </BrowserRouter>
    </div>
  );
};

export default App;
