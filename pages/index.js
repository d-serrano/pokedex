import Head from 'next/head'
// layout
import Header from '../components/layout/header';
import Content from '../components/layout/content';
import Pokemon from '../components/layout/pokemon';
// redux
import { Provider } from 'react-redux'
import store from '../redux/store';
// Material UI
import { Grid } from '@material-ui/core'

export default function Home() {
  return (
    <Provider store = { store }>
      <Grid container >
        {/* ******  header  ******* */}
        <Grid container xs = { 12 } justify = 'center'>
          <Header/>
        </Grid>
        {/* ******  Content  ******* */}
        <Grid container xs = { 12 } justify = 'space-around'>
          {/* ******  Pokemons List  ******* */}
          <Grid container xs ={ 8 }>
            <Content/>
          </Grid>
          
          {/* ******  Pokemon  ******* */}
          <Grid container xs ={ 4 }>
            <Pokemon />
          </Grid>
        </Grid>
      </Grid>
    </Provider>
  )
}
