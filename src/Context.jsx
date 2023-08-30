import React from 'react';
import { POKEMON_GET, POKEMON_GET_ALL, POKEMON_PIC } from './api';
import normal from './Assets/normal.svg';
import water from './Assets/water.svg';
import grass from './Assets/grass.svg';
import poison from './Assets/poison.svg';
import rock from './Assets/rock.svg';
import steel from './Assets/steel.svg';
import bug from './Assets/bug.svg';
import dark from './Assets/dark.svg';
import dragon from './Assets/dragon.svg';
import electric from './Assets/electric.svg';
import flying from './Assets/flying.svg';
import ghost from './Assets/ghost.svg';
import ground from './Assets/ground.svg';
import fighting from './Assets/fighting.svg';
import fire from './Assets/fire.svg';
import psychic from './Assets/psychic.svg';
import ice from './Assets/ice.svg';
import fairy from './Assets/fairy.svg';

export const Context = React.createContext();

export const GlobalContext = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [pokemon, setPokemon] = React.useState(null);
  const [pokemonList, setPokemonList] = React.useState([]);
  const [pokemonPic, setPokemonPic] = React.useState([]);
  const [pokemonInfo, setPokemonInfo] = React.useState([]);

  const TypeSvg = {
    normal: { type: normal, color: '#A1A59F' },
    water: { type: water, color: '#16AAFF' },
    grass: { type: grass, color: '#1ED910' },
    poison: { type: poison, color: '#B763CF' },
    flying: { type: flying, color: '#A1BBEC' },
    rock: { type: rock, color: '#DABE5C' },
    steel: { type: steel, color: '#5695A3' },
    ice: { type: ice, color: '#31E6C8' },
    fighting: { type: fighting, color: '#FF235D' },
    ghost: { type: ghost, color: '#CEDCF0' },
    psychic: { type: psychic, color: '#FF79FF' },
    fire: { type: fire, color: '#FF9B00' },
    ground: { type: ground, color: '#DA7C4D' },
    electric: { type: electric, color: '#F2D94E' },
    dragon: { type: dragon, color: '#0077FF' },
    bug: { type: bug, color: '#7CD000' },
    dark: { type: dark, color: '#5B576B' },
    fairy: { type: fairy, color: '#FF79FF' },
  };

  React.useEffect(() => {
    getPokemonList(0);
  }, []);

  async function getPokemon(id) {
    const { url, options } = POKEMON_GET(id.toLowerCase());
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
          console.log(json);
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
        TypeSvg,
      }}
    >
      {children}
    </Context.Provider>
  );
};
