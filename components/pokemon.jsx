import React, { useEffect } from 'react'
//Material UI
import { Card, Container, FilledInput, Grid } from '@material-ui/core';
import Image  from 'next/image'
//styles
import styled from 'styled-components';

const StyledPokemon = styled(Grid)`

  height: 100px;
  position: sticky;
  top: 20px;

  h3{
    font-size: 2rem;
  }
  .type {
    margin: 1rem;
  }
  `;

const StyledPokemonImage = styled(Grid)`
 width: 50% !important;
  div{
    position: relative !important;
   aspect-ratio: 1 / 1;
  }
`;

export default function pokemon({ focusPokemon }) {


 const { name, description, hires, gender, type } = focusPokemon
 const { english } = name ;

  return (
    <StyledPokemon container  justify = 'center' >
      <StyledPokemonImage  xs = {12}>
        <Image
          src={ hires } 
          alt="pokemon" 
          layout ='fill'
          objectFit ='contain'
         />
      </StyledPokemonImage>
      <h3>{ english }</h3>
      <p>{ description }</p>
      <Grid container>
        {
          type?.map( ( type, index ) => (
            <h4 className = 'type' key = { index }>{ type }</h4>
          ) )
        }
      </Grid>
    </StyledPokemon>
  )
}
