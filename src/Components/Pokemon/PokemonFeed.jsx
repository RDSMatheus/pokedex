import React from 'react';
import { Context } from '../../Context';
import PokemonType from './PokemonType';
import styles from './PokemonFeed.module.css';
import NavControl from '../NavControl';
import { Link } from 'react-router-dom';
import Head from '../Head';
import PokemonLazyImg from './PokemonLazyImg';
import Loading from '../Loading';

const PokemonFeed = () => {
  const [page, setPage] = React.useState(0);
  const { pokemonList, getPokemonList, pokemonInfo, loading } =
    React.useContext(Context);

  React.useEffect(() => {
    async function fetchPokemonNames() {
      await getPokemonList(page * 20);
    }
    fetchPokemonNames();
  }, [page]);

  if (loading)
    return (
      <div className="loadingContainer">
        <Loading />
      </div>
    );
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
                  {pokemonInfo.length > 0 && <PokemonLazyImg name={name} />}
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
