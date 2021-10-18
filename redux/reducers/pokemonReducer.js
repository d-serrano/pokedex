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
		loadingPokemon: false,
    listError: null,
    singlePokemonError :null,
    screen : 'table'
}

const pokemoReducer =  ( state = initialState, action) =>{
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
        pokemons : payload
      }
    case GET_LIST_POKEMON_ERROR:
      console.log( {payload} )
      return{
        ...state,
        listError : error
      }
    case GET_POKEMON:
      return{
        ...state,
        pokemon : newPokemon
      }
    case GET_POKEMON_SUCCES:
      let newPokemon = state.pokemons.find( element => element.id === payload )
      return{
        ...state,
        pokemon : newPokemon
      }
    case GET_POKEMON_ERROR:
      return{
        ...state,
        listError : error
      }
    	default:
         return state;
  }
}

export default pokemoReducer;