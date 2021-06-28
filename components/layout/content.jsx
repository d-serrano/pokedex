import React, { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
// actions
import { getListPokemonsAction, getsinglePokemon } from '../../redux/actions/pokemonActions';
import { setScreen, } from '../../redux/actions/screenActions';
// componets
import List from '../screens/list';
import PokeTable from '../screens/table';
import Gallery from '../screens/gallery';
// 

const Content = () => {
   // redux
   const dispatch = useDispatch();
   const screen = useSelector( state =>state.screenReducer.screen );
   const pokemonlist = useSelector( state =>state.pokemonReducer.pokemons );
  useEffect( async () => {
    try {
      getPokemons(); 
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
        screen === 'table'? <PokeTable 
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

export default Content;