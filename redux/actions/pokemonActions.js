import { axiosPokemon, AxioslistPokemons }  from '../../config/axios';

import {
  GET_LIST_POKEMON,
  GET_LIST_POKEMON_SUCCES,
  GET_LIST_POKEMON_ERROR,
  GET_POKEMON,
  GET_POKEMON_SUCCES,
  GET_POKEMON_ERROR
}  from '../types';

//******************************
//**    Get Pokemons List     **
//******************************
export function getListPokemonsAction () {
 return async dispatch => {
   dispatch( getListPokemons() );
   try {
     let response =await AxioslistPokemons.get( '/all' );
     let pokemonList = response.data.slice(0,151);
     dispatch( getListPokemonsSucces( pokemonList ) );
   } catch (error) {
     console.log( 'error : ', error );
     dispatch( getListPokemonsError( error ) );
   }
 }
}

 //getListPokemons
 const getListPokemons = () => ({
   type: GET_LIST_POKEMON,
   payload : true
 })
 // getListPokemons_succes
 const getListPokemonsSucces= ( pokemonsList ) => ({
   type: GET_LIST_POKEMON_SUCCES,
   payload : pokemonsList
 })
 // getListPokemons_error
 const getListPokemonsError = (error ) => ({
   type: GET_LIST_POKEMON_ERROR,
   payload : error
 })

//******************************
//**    Get single Pokemon   **
//******************************
export function getsinglePokemon ( idPokemon ) {

  return async dispatch => {
    //dispatch( getPkemon() );
    dispatch ( getsinglePokemonSucces( idPokemon ) );
  }
 }
 
  //getListPokemons

  // getListPokemons_succes
  const getsinglePokemonSucces= ( idPokemon ) => ({
    type: GET_POKEMON_SUCCES,
    payload : idPokemon
  })
  // getListPokemons_error
  const getsinglePokemonError = (error ) => ({
    type: GET_POKEMON_ERROR,
    payload : error
  })
 
 