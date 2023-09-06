import React from 'react';
import PokemonPicture from './PokemonPicture';
import PokemonType from './PokemonType';
import PokemonStats from './PokemonStats';
import { Context } from '../../Context';
import styles from './PokemonProfile.module.css';
import { useParams } from 'react-router-dom';
import Head from '../Head';
import Loading from '../Loading';
import NotFound from '../NotFound';

const PokemonProfile = () => {
  const { pokemon, loading, getPokemon, TypeSvg, error } =
    React.useContext(Context);
  const { id } = useParams();
  console.log(id);

  React.useEffect(() => {
    if (id) {
      getPokemon(id);
    }
  }, [id]);

  if (loading)
    return (
      <div className="loadingContainer">
        <Loading />
      </div>
    );
  if (error) return <NotFound />;
  if (pokemon)
    return (
      <>
        <Head title={pokemon.name} />
        <section
          style={{ background: `${TypeSvg[pokemon.types[0].type.name].color}` }}
        >
          <div className={`${styles.wrapper} container`}>
            <h1 className={styles.title}>
              {`#${pokemon.id} 
              ${pokemon.name}`}
            </h1>
            <div className={styles.row}>
              <PokemonPicture data={pokemon.sprites} />
            </div>
            <div className={styles.statsBackground}>
              <div className={styles.stats}>
                <PokemonType data={pokemon.types.map((obj) => obj.type.name)} />
                <PokemonStats data={pokemon.stats} />
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default PokemonProfile;
