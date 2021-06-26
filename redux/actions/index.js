import { axiosPokemon, AxioslistPokemons }  from '../../config/axios';

import {
  GET_LIST_POKEMON,
  GET_LIST_POKEMON_SUCCES,
  GET_LIST_POKEMON_ERROR,
  GET_POKEMON,
  GET_POKEMON_SUCCES,
  GET_POKEMON_ERROR,
}  from '../types';

//******************************
//**    Get Pokemons List     **
//******************************
export function getListPokemonsAction () {
  return async dispatch => {

    try {
      let response =await AxioslistPokemons.get( 'pokemon/?limit=151' );
      console.log( 'response : ', response );
    } catch (error) {
      console.log( 'error : ', error );
    }
  }
}

// getListPokemons
const getListPokemons = ( ) => ({
  type: GET_LIST_POKEMON,
  payload : true
})

