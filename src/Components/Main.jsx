import React from 'react';
import { Context } from '../Context';
import PokemonFeed from './Pokemon/PokemonFeed';
import PokemonProfile from './Pokemon/PokemonProfile';
import { useParams } from 'react-router-dom';

const Main = () => {
  const { pokemon } = React.useContext(Context);
  const { id } = useParams();

  
  if (id && pokemon)
    return (
      <section>
        <div>
          <PokemonProfile pokemon={pokemon} />
        </div>
      </section>
    );
  else
    return (
      <section>
        <PokemonFeed />
      </section>
    );
};

export default Main;
