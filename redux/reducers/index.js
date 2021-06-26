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
		loadingPokemons: false
}

export default ( state = initialState, action ) =>{

  switch ( action.type ) {
    case GET_LIST_POKEMON:
      return{
        ...state,
        loadingPokemons : true
      }
  
    default:
      break;
  }
}