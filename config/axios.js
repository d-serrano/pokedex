import axios from 'axios';

// pokemons list
const AxioslistPokemons = axios.create({
  baseURL: 'https://app.pokemon-api.xyz/pokemon',
  headers :  { 'Content-Type': 'application/json' }
});

// pokemons list
const axiosPokemon = axios.create({
  baseURL: 'https://pokeapi.glitch.me/v1/pokemon',
  headers :  { 'Content-Type': 'application/json' }
});

export {
  AxioslistPokemons,
  axiosPokemon
} 