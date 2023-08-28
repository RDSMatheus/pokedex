import React from 'react';
import { Context } from '../Context';
import PokemonPicture from './Pokemon/PokemonPicture';
import PokemonType from './Pokemon/PokemonType';
import PokemonStats from './Pokemon/PokemonStats';
import PokemonFeed from './Pokemon/PokemonFeed';

const Main = () => {
  const { pokemon, loading } = React.useContext(Context);
  if (loading) return <div>Carregando...</div>;
  return (
    <section>
      {pokemon ? (
        <div>
          <PokemonPicture data={pokemon.sprites} />
          <PokemonType data={pokemon.types.map((obj) => obj.type.name)} />
          <PokemonStats data={pokemon.stats} />
        </div>
      ) : (
        <PokemonFeed />
      )}
    </section>
  );
};

export default Main;
