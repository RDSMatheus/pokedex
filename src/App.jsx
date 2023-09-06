import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalContext } from './Context';
import PokemonProfile from './Components/Pokemon/PokemonProfile';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import NotFound from './Components/NotFound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <GlobalContext>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="profile/:id" element={<PokemonProfile />} />
            <Route path="*" element={<NotFound />} />
            <Route path="profile/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </GlobalContext>
      </BrowserRouter>
    </div>
  );
};

export default App;
