import React from 'react';
import { Context } from '../Context';
import PokemonFeed from './Pokemon/PokemonFeed';
import PokemonProfile from './Pokemon/PokemonProfile';

const Main = () => {
  const { pokemon, loading } = React.useContext(Context);
  if (pokemon) console.log(pokemon.types.map((obj) => obj.type.name));
  if (loading) return <div>Carregando...</div>;
  return (
    <section>
      {pokemon ? (
        <div>
          <PokemonProfile pokemon={pokemon} />
        </div>
      ) : (
        <PokemonFeed />
      )}
    </section>
  );
};

export default Main;
