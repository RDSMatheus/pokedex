const URL_API = 'https://pokeapi.co/api/v2/pokemon/';
const URL_COLOR_API = 'https://pokeapi.co/api/v2/pokemon-color/';

export const POKEMON_GET = (id) => {
  return {
    url: `${URL_API}${id}`,
    options: {
      method: 'GET',
    },
  };
};

export const POKEMON_COLOR_GET = (id) => {
  return {
    url: `${URL_COLOR_API}${id}`,
    options: {
      method: 'GET',
    },
  };
};

export const POKEMON_GET_ALL = (limit, offset) => {
  return {
    url: ` https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
    options: {
      method: 'GET',
    },
  };
};
export const POKEMON_GET_COUNT = () => {
  return {
    url: ` https://pokeapi.co/api/v2/pokemon`,
    options: {
      method: 'GET',
    },
  };
};

export const POKEMON_PIC = (name) => {
  return {
    url: `${URL_API}${name}`,
    options: {
      method: 'GET',
    },
  };
};
