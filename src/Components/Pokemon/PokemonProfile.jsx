import React from 'react';
import PokemonPicture from './PokemonPicture';
import PokemonType from './PokemonType';
import PokemonStats from './PokemonStats';
import { Context } from '../../Context';
import styles from './PokemonProfile.module.css';
import { useParams } from 'react-router-dom';
import Head from '../Head';

const PokemonProfile = () => {
  const { pokemon, loading, getPokemon, TypeSvg } = React.useContext(Context);
  const { id } = useParams();
  console.log(pokemon);

  React.useEffect(() => {
    if (id) {
      getPokemon(id);
    }
  }, [id]);

  if (loading) <div>Carregando...</div>;
  if (pokemon)
    return (
      <>
      <Head title={pokemon.name}  />
        <section
          style={{ background: `${TypeSvg[pokemon.types[0].type.name].color}` }}
        >
          <div className={`${styles.wrapper} container`}>
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
