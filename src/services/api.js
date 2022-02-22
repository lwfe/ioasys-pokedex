import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

const spritesApi = axios.create({
  baseURL:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
});

export {api, spritesApi};
