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
import styled from 'styled-components';

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  width: 10rem;
  align-items: center;
  justify-content: center;
  margin: 2rem 1rem 2rem 1rem;
  img {
    width: 50%;
  }

  .card {
    background-color: blue;
  }
`;  

const StyledPokemonImage = styled.div`
 
 width: 50% !important;
 aspect-ratio: 1 / 1;
  div{
    position: relative !important;
    width: 100%;
   aspect-ratio: 1 / 1;
  }
`;

export default function Gallery({ pokemonList, getPokemon  }) {
  return (
    <Grid fixed xs = {12} container >
    
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
    <Grid container xs ={ 3 } className = 'card' >
      <StyledCard  onMouseOver= { () => getPokemon( id ) }  >
        <StyledPokemonImage>
          <Image 
            src={ thumbnail }
            alt="pokemon" 
            layout = 'fill'
            objectFit ='contain'
          />
        </StyledPokemonImage>
        <CardContent className = 'content'>
          <h3> {english} </h3>
            <p>{ species }</p>
        </CardContent>
      </StyledCard>
     
    </Grid>
      
   );
}
 