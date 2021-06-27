import Head from 'next/head'
// layout
import Header from '../components/layout/header';
import Content from '../components/layout/content';
import Pokemon from '../components/layout/pokemon';

// Material UI
import { Grid } from '@material-ui/core'

export default function Home() {
  return (
    
      <Grid container >
        {/* ******  header  ******* */}
        <Grid container item xs = { 12 } justify = 'center'>
          <Header/>
        </Grid>
        {/* ******  Content  ******* */}
        <Grid container item xs = { 12 } justify = 'space-around'>
          {/* ******  Pokemons List  ******* */}
          <Grid container item xs ={ 8 }>
            <Content/>
          </Grid>
          
          {/* ******  Pokemon  ******* */}
          <Grid container item xs ={ 4 }>
            <Pokemon />
          </Grid>
        </Grid>
      </Grid>
    
  )
}
