import React from 'react';
import PokemonPicture from './PokemonPicture';
import PokemonType from './PokemonType';
import PokemonStats from './PokemonStats';

const PokemonProfile = ({ pokemon }) => {
  return (
    <div>
      <PokemonPicture data={pokemon.sprites} />
      <PokemonType data={pokemon.types.map((obj) => obj.type.name)} />
      <PokemonStats data={pokemon.stats} />
    </div>
  );
};

export default PokemonProfile;
