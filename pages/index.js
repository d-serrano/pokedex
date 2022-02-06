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
import { useRecoilValue } from 'recoil';
import { pokemonAtom, viewAtom } from '../config/atoms';
import useGetPokemons from '../hooks/useGetPokemons';
import { useEffect } from 'react';

const StyledContent = styled.div`
  padding: 2rem 4rem 0rem 4rem;
`;

export default function Home() {
  const [getPokemons,pokemonList, loading, error] = useGetPokemons(0,151);
  const view = useRecoilValue(viewAtom);
  const pokemon = useRecoilValue(pokemonAtom);
  useEffect( async ()=>{
    await getPokemons();
  },[])
  return (
      <>
      { !loading && !error &&
        <Layout>
          {
          view === 'list'? <List  
            pokemonList = {pokemonList} 
          /> : null
        }
        {
          view === 'table'? <PokeTable 
            pokemonList = {pokemonList}
            //getPokemon = { getPokemon }
          /> : null
        }
        {
          view === 'gallery'? <Gallery  
            pokemonList = {pokemonList}
            //getPokemon = { getPokemon }
          /> : null
        }
          </Layout>
      }
      </>
     
  )
}
