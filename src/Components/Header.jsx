import React from 'react';
import Input from './Input';
import { Context } from '../Context';
import styles from './Header.module.css';
import { ReactComponent as PokeBall } from '../Assets/pokeball.svg';
import { ReactComponent as Search } from '../Assets/search.svg';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const [value, setValue] = React.useState('');
  const { pokemon, getPokemon } = React.useContext(Context);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    getPokemon(value);
    navigate(`/profile/${value.toLowerCase()}`);
  }
  return (
    <header className={`${styles.header} container`}>
      <div>
        <NavLink to="/">
          <PokeBall />
        </NavLink>
      </div>
      <form className={styles.search} onSubmit={handleSubmit}>
        <Input
          id="pokemon"
          placeholder="Procure o seu pokemon"
          value={value}
          setValue={setValue}
        />
        <button>
          <Search />
        </button>
      </form>
    </header>
  );
};

export default Header;
