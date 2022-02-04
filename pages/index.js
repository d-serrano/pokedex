import Head from 'next/head'
// layout
import Header from '../components/header';
import Layout from '../components/layaout';
import Pokemon from '../components/pokemon';

import List from '../views/list';
import PokeTable from '../views/table';
import Gallery from '../views/gallery';

//styles
import styled from 'styled-components';

const StyledContent = styled.div`
  padding: 2rem 4rem 0rem 4rem;
`;

export default function Home() {
  
  
 
  // get Pokemons from APi
  const getPokemons = async () => {
    dispatch( getListPokemonsAction() );
  }
  // get Pokemon from list
  const getPokemon = async ( id ) => {
   
  }
  return (
    
        <Layout>
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
        </Layout>
     
  )
}
