import React from 'react';
import { Context } from '../../Context';
import Loading from '../Loading';

const PokemonLazyImg = ({ name }) => {
  const { pokemonInfo } = React.useContext(Context);
  const [imageUrl, setImageUrl] = React.useState(null);
  const [skeleton, setSkeleton] = React.useState(true);

  React.useEffect(() => {
    async function fetchImageUrl() {
      const pokemon = pokemonInfo.find((pokemon) => pokemon.name === name);
      if (pokemon) {
        setImageUrl(pokemon.url);
      }
    }
    fetchImageUrl();
  }, [pokemonInfo, name]);

  function handleLoad() {
    setSkeleton(false);
    console.log('ola');
  }
  return imageUrl ? (
    <img src={imageUrl} alt={name} onLoad={handleLoad} />
  ) : (
    <Loading />
  );
};

export default PokemonLazyImg;
