import { axiosPokemon, AxioslistPokemons }  from '../../config/axios';

import {
  GET_LIST_POKEMON,
  GET_LIST_POKEMON_SUCCES,
  GET_LIST_POKEMON_ERROR,
  GET_POKEMON,
  GET_POKEMON_SUCCES,
  GET_POKEMON_ERROR,
  SET_SCREEN
}  from '../types';

//******************************
//**    Get Pokemons List     **
//******************************
export function getListPokemonsAction () {
 return async dispatch => {
   dispatch( getListPokemons() );
   try {
     let response =await AxioslistPokemons.get( 'pokemon/?limit=151' );
     console.log( 'response desde action: ', response );
     //dispatch( getListPokemonsSucces( response ) );
   } catch (error) {
     console.log( 'error : ', error );
     //dispatch( getListPokemonsError( error ) );
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
//**        Set Screen        **
//******************************
// set screen
export const setScreen = ( newScreen ) =>{
  console.log('screen', newScreen)
  return ( dispatch )  => {
     dispatch ( setScreenAction( newScreen ) );
   }
}


export const setScreenAction = newScreen => ({
  type: SET_SCREEN,
  payload : newScreen
}); 
  