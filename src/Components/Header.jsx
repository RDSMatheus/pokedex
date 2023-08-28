import React from 'react';
import Input from './Input';
import { Context } from '../Context';
import styles from './Header.module.css';
import { ReactComponent as PokeBall } from '../Assets/pokeball.svg';
import { ReactComponent as Search } from '../Assets/search.svg';

const Header = () => {
  const [value, setValue] = React.useState('');
  const { pokemon, getPokemon } = React.useContext(Context);

  function handleSubmit(event) {
    event.preventDefault();
    getPokemon(value);
  }
  return (
    <header className={styles.header}>
      <div>
        <PokeBall />
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
