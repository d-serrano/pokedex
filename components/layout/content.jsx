import React, { useEffect } from 'react';
// components
import List from '../screens/list';
import PokeTable from '../screens/table';
import Gallery from '../screens/gallery';

const Content = () => {

  const screen = useSelector( state =>state.screenReducer.screen );
  const pokemonlist = useSelector( state =>state.pokemonReducer.pokemons );
  
 
  // get Pokemons from APi
  const getPokemons = async () => {
    dispatch( getListPokemonsAction() );
  }
  // get Pokemon from list
  const getPokemon = async ( id ) => {
   
  }

  return (
    <div>

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