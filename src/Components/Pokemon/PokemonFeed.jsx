import React from 'react';
import { Context } from '../../Context';
import PokemonType from './PokemonType';
import styles from './PokemonFeed.module.css';
import NavControl from '../NavControl';

const PokemonFeed = () => {
  const [page, setPage] = React.useState(0);
  const { pokemonList, getPokemonList, pokemonPic, pokemonInfo } =
    React.useContext(Context);

  React.useEffect(() => {
    async function fetchPokemonNames() {
      await getPokemonList(page);
    }
    fetchPokemonNames();
  }, [page]);

  if (pokemonInfo && pokemonInfo.length > 0)
    return (
      <div>
        <ul className={`${styles.feed} animeLeft`}>
          {pokemonList &&
            pokemonPic &&
            pokemonInfo &&
            pokemonList.map(({ name }, index) => (
              <li key={name} className={`${styles.feedItem} animeLeft`}>
                <span className="title">{name}</span>
                {pokemonInfo && pokemonInfo.length > 0 && (
                  <PokemonType data={pokemonInfo[index].types} />
                )}
                {<img src={pokemonPic[index]} alt={name} />}
              </li>
            ))}
        </ul>
        <NavControl setValue={setPage} value={page} />
      </div>
    );
  else return null;
};

export default PokemonFeed;
