import React from 'react';

const PokemonPicture = (sprites) => {
  return (
    <div>
      <img src={sprites.data.other['official-artwork'].front_default} alt="" />
    </div>
  );
};

export default PokemonPicture;
