import React from 'react';
import { POKEMON_GET, POKEMON_GET_ALL, POKEMON_PIC } from './api';

export const Context = React.createContext();

export const GlobalContext = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [pokemon, setPokemon] = React.useState(null);
  const [pokemonList, setPokemonList] = React.useState([]);
  const [pokemonPic, setPokemonPic] = React.useState([]);
  const [pokemonInfo, setPokemonInfo] = React.useState([]);

  React.useEffect(() => {
    getPokemonList(0);
  }, []);

  async function getPokemon(id) {
    const { url, options } = POKEMON_GET(id);
    try {
      setLoading(true);
      const response = await fetch(url, options);
      const json = await response.json();
      setPokemon(json);
    } catch (error) {
      console.log('Fetch Error:', error);
    } finally {
      setLoading(false);
    }
  }

  async function getPokemonList(id) {
    const { url, options } = POKEMON_GET_ALL(20, id);
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      setPokemonList(json.results);

      const obtainedPokemonPics = await Promise.all(
        json.results.map(async (pokemonName) => {
          const { url, options } = POKEMON_PIC(pokemonName.name);
          const response = await fetch(url, options);
          const json = await response.json();
          const match = pokemonName.name.match(/\d+/);
          const number = match ? parseInt(match[0]) : -1;
          return {
            url: json.sprites.other['official-artwork'].front_default,
            number,
          };
        }),
      );

      setPokemonPic(
        [...obtainedPokemonPics]
          .sort((a, b) => a.number - b.number)
          .map((item) => item.url),
      );

      const obtainedPokemonInfo = await Promise.all(
        json.results.map(async (pokemon) => {
          const { url, options } = POKEMON_GET(pokemon.name);
          const response = await fetch(url, options);
          const json = await response.json();

          const types = json.types.map((typeInfo) => typeInfo.type.name);

          return {
            name: pokemon.name,
            types,
            url: json.sprites.other['official-artwork'].front_default,
          };
        }),
      );
      setPokemonInfo(obtainedPokemonInfo);
      console.log('tipos', pokemonInfo);
    } catch (error) {
      console.log('Fetch Error:', error);
    }
  }

  return (
    <Context.Provider
      value={{
        pokemon,
        getPokemon,
        pokemonList,
        getPokemonList,
        pokemonPic,
        loading,
        pokemonInfo,
      }}
    >
      {children}
    </Context.Provider>
  );
};
