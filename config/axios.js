import axios from 'axios';

// pokemons list
const listPokemons = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  headers :  { 'Content-Type': 'application/json' }
});

// pokemons list
const axiosPokemon = axios.create({
  baseURL: 'https://pokeapi.glitch.me/v1/pokemon',
  headers :  { 'Content-Type': 'application/json' }
});

export {
  listPokemons,
  axiosPokemon
} 