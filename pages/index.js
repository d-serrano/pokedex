import Head from 'next/head'
// layout
import Header from '../components/layout/header';
import Content from '../components/layout/content';
import Pokemon from '../components/layout/pokemon';
// redux
import { useSelector } from 'react-redux';
// Material UI
import { Grid } from '@material-ui/core'

export default function Home() {
  const focusPokemon = useSelector( state =>state.pokemonReducer.pokemon );
  return (
    
      <Grid container >
        <Header/>
        {/* ******  Content  ******* */}
        <Grid container item xs = { 12 } justify = 'space-around'>
          {/* ******  Pokemons List  ******* */}
          <Grid container item xs ={ 8 }>
            <Content/>
          </Grid>
          
          {/* ******  Pokemon  ******* */}
          <Grid container item xs ={ 4 }>
            {focusPokemon.name ?
              <Pokemon 
                focusPokemon = {focusPokemon}
              /> : <h3>Selec A Pokemon</h3>
            }
          </Grid>
        </Grid>
      </Grid>
    
  )
}
