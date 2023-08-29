import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalContext } from './Context';
import PokemonProfile from './Components/Pokemon/PokemonProfile';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <GlobalContext>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="profile/:id"
              element={<PokemonProfile />}
            />
          </Routes>
        </GlobalContext>
      </BrowserRouter>
    </div>
  );
};

export default App;
