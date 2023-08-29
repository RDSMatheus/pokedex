import React from 'react';
import { Context } from '../../Context';
import PokemonType from './PokemonType';
import styles from './PokemonFeed.module.css';
import NavControl from '../NavControl';
import { Link } from 'react-router-dom';
import Head from '../Head';

const PokemonFeed = () => {
  const [page, setPage] = React.useState(0);
  const { pokemonList, getPokemonList, pokemonPic, pokemonInfo } =
    React.useContext(Context);

  console.log(pokemonInfo);
  React.useEffect(() => {
    async function fetchPokemonNames() {
      await getPokemonList(page);
    }
    fetchPokemonNames();
  }, [page]);

  if (pokemonInfo && pokemonInfo.length > 0)
    return (
      <>
        <Head />
        <section className="container">
          <ul className={`${styles.feed} animeLeft`}>
            {pokemonList &&
              pokemonPic &&
              pokemonInfo &&
              pokemonList.map(({ name }, index) => (
                <li key={name} className={`${styles.feedItem} animeLeft`}>
                  <Link to={`profile/${name}`}>
                    <span className="title">{name}</span>
                    {pokemonInfo && pokemonInfo.length > 0 && (
                      <PokemonType data={pokemonInfo[index].types} />
                    )}
                    {
                      <img
                        onLoad={() => console.log('olá')}
                        src={pokemonPic[index]}
                        alt={name}
                      />
                    }
                  </Link>
                </li>
              ))}
          </ul>
          <NavControl setValue={setPage} value={page} />
        </section>
      </>
    );
  else return null;
};

export default PokemonFeed;
