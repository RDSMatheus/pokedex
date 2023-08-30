import React from 'react';
import { Context } from '../../Context';
import PokemonType from './PokemonType';
import styles from './PokemonFeed.module.css';
import NavControl from '../NavControl';
import { Link } from 'react-router-dom';
import Head from '../Head';

const PokemonFeed = () => {
  const [page, setPage] = React.useState(0);
  const { pokemonList, getPokemonList, pokemonInfo, loading } =
    React.useContext(Context);

  React.useEffect(() => {
    async function fetchPokemonNames() {
      await getPokemonList(page * 20);
      console.log(pokemonList);
    }
    fetchPokemonNames();
  }, [page]);

  if (loading) return <div>Carregando...</div>;
  if (pokemonInfo.length > 0 && pokemonList.length > 0)
    return (
      <>
        <Head />
        <section className="container">
          <ul className={`${styles.feed} animeLeft`}>
            {pokemonList.map(({ name }, index) => (
              <li key={name} className={`${styles.feedItem} animeLeft`}>
                <Link to={`profile/${name}`}>
                  <span className="title">{name}</span>
                  {pokemonInfo.length && pokemonInfo.length > 0 && (
                    <PokemonType data={pokemonInfo[index].types} />
                  )}
                  {pokemonInfo.length > 0 && (
                    <img
                      src={pokemonInfo[index].url}
                      alt={name}
                      loading="lazy"
                    />
                  )}
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
