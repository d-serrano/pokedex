import React from 'react'
import Image  from 'next/image'
import { 
  Card , 
  CardContent, 
  CardMedia,
  Typography , 
  Paper , 
  Avatar,
  Grid
  } from '@material-ui/core';
// styles
import styles from '../../styles/screens.module.scss'

export default function gallery({ pokemonList, getPokemon  }) {
  return (
    <Grid fixed xs = {12} container className =  { styles.gallery }>
    
        {
         pokemonList.map( pokemon => (
          <PokemonCard
            key = { pokemon.id }
            pokemon = { pokemon }
            getPokemon = { getPokemon }
          />
         ) )
        }  
    </Grid>
  )
}


const PokemonCard = ({ pokemon, getPokemon } ) => {
  const {
    name, 
    id,
    species,
    thumbnail
  } = pokemon;
  const { english } = name;

  return (
    <Grid container xs ={ 3 } className = {styles.card} >
      <Paper>
        <Card  onMouseOver= { () => getPokemon( id ) }  >
        <Image 
          src={ thumbnail }
          alt="pokemon" 
          width = { 100 }
          height = { 100 }
        />
          <CardContent className = 'content'>
            <h3> {english} </h3>
              <p>{ species }</p>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
      
   );
}
 