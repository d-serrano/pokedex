import React, { useEffect } from 'react';
// axios 
import { axiosPokemon } from '../../config/axios';
// redux
import { useDispatch, useSelector } from 'react-redux';
// actions
import { getListPokemonsAction, getsinglePokemon } from '../../redux/actions/pokemonActions';
import { setScreen, } from '../../redux/actions/screenActions';
// componets
import List from '../screens/list';
import Table from '../screens/table';
import Gallery from '../screens/gallery';

const content = () => {
   // redux
   const dispatch = useDispatch();
   const screen = useSelector( state =>state.screenReducer.screen );
   const pokemonlist = useSelector( state =>state.pokemonReducer.pokemons );
  useEffect( async () => {
    try {
      getPokemons();
      let response =await axiosPokemon.get( `/${ pokemon }` );
      console.log( 'response : ', response );
      
    } catch (error) {
      console.log( 'error : ', error );
      
    }
    
  }, []);
  
 
  // get Pokemons from APi
  const getPokemons = async () => {
    dispatch( getListPokemonsAction() );
  }
  // get Pokemon from list
  const getPokemon = async ( id ) => {
    dispatch( getsinglePokemon( id ) );
  }
  // set as list, gallery or table
  const setNewScreen = ( newScreen ) => {
    dispatch( setScreen( newScreen ) );
  }
  return (
    <div>
      <div>
        <button onClick = { () => setNewScreen( 'list' ) }>List</button>
        <button onClick = { () => setNewScreen( 'table' ) }>Table</button>
        <button onClick = { () => setNewScreen( 'gallery' ) }>Gallery</button>
      </div>
      {
        screen === 'list'? <List  
          pokemonList = {pokemonlist} 
          getPokemon = { getPokemon }
        /> : null
      }
      {
        screen === 'table'? <Table 
          pokemonList = {pokemonlist}
          getPokemon = { getPokemon }
        /> : null
      }
      {
        screen === 'gallery'? <Gallery  
          pokemonList = {pokemonlist}
          getPokemon = { getPokemon }
        /> : null
      }
    </div>
  );
};

export default content;