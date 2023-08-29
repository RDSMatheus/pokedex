import React from 'react';
import PokemonPicture from './PokemonPicture';
import PokemonType from './PokemonType';
import PokemonStats from './PokemonStats';
import { Context } from '../../Context';
import styles from './PokemonProfile.module.css';
import { useParams } from 'react-router-dom';

const PokemonProfile = () => {
  const { pokemon, loading, getPokemon } = React.useContext(Context);
  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      getPokemon(id);
    }
  }, [id]);

  if (loading) <div>Carregando...</div>;
  if (pokemon)
    return (
      <section className={styles.wrapper}>
        <div className={styles.row}>
          <PokemonPicture data={pokemon.sprites} />
        </div>
        <div>
          <PokemonType data={pokemon.types.map((obj) => obj.type.name)} />
          <PokemonStats data={pokemon.stats} />
        </div>
      </section>
    );
};

export default PokemonProfile;
