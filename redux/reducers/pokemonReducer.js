import {
  GET_LIST_POKEMON,
  GET_LIST_POKEMON_SUCCES,
  GET_LIST_POKEMON_ERROR,
  GET_POKEMON,
  GET_POKEMON_SUCCES,
  GET_POKEMON_ERROR,
}  from '../types';
const initialState = {
    pokemons : [],
    pokemon: {},
    loadingPokemons : false,
		loadingPokemons: false,
    listError: null,
    singlePokemonError :null,
    screen : 'table'
}

const pokemoReducer =  ( state = initialState, action) =>{
  console.log('REDUCER')
  const { type, payload } = action;
  switch ( type ) {
    case GET_LIST_POKEMON:
      return{
        ...state,
        loadingPokemons : true
      }
    case GET_LIST_POKEMON_SUCCES:
      return{
        ...state,
        loadingPokemons : false,
        pokemons : payload.pokemonsList
      }
    case GET_LIST_POKEMON_ERROR:
      return{
        ...state,
        listError : error
      }
    	default:
         return state;
  }
}

export default pokemoReducer;