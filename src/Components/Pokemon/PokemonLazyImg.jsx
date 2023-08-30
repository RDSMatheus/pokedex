import React from 'react';
import { Context } from '../../Context';
import Loading from '../Loading';

const PokemonLazyImg = ({ name }) => {
  const { pokemonInfo } = React.useContext(Context);
  const [imageUrl, setImageUrl] = React.useState(null);

  React.useEffect(() => {
    async function fetchImageUrl() {
      const pokemon = pokemonInfo.find((pokemon) => pokemon.name === name);
      if (pokemon) {
        setImageUrl(pokemon.url);
      }
    }
    fetchImageUrl();
  }, [pokemonInfo, name]);

  if (imageUrl) {
    return <img src={imageUrl} alt={name} loading="lazy" />;
  } else {
    return <Loading />;
  }
};

export default PokemonLazyImg;
