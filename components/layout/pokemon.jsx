import React, { useEffect } from 'react'
//Material UI
import { Card, Container, FilledInput, Grid } from '@material-ui/core';
import Image  from 'next/image'
//styles
import styled from 'styled-components';

const StyledPokemon = styled(Grid)`
  border-right-color: red;
  background-color: red;
  color : ${ props => props.theme.primary };
  height: fit-content;
  position: sticky;
  top: 20px;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 0.2rem;
  P{
    color : ${ props => props.theme['text-color-primary'] };
    
  }
  h3{
    font-size: 2rem;
  }
  .type {
    margin: 1rem;
  }
  `;

const StyledPokemonImage = styled(Grid)`
  display: flex;
  justify-content: center;
  width: 90% !important;
  max-height: 15rem !important;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 0.2rem;

  div{
    width: 90%;
    background-color: blue;
    position: relative !important;
   aspect-ratio: 1 / 1;
  }
`;

export default function pokemon({ focusPokemon }) {


 const { name, description, hires, gender, type } = focusPokemon
 const { english } = name ;

  return (
    <StyledPokemon container  justify = 'center' >
      <StyledPokemonImage item xs = {12}>
        <Image
          src={ hires } 
          alt="pokemon" 
          layout ='fill'
          objectFit ='contain'
         />
      </StyledPokemonImage>
      <Grid item xs ={12}>
        <h3>{ english }</h3>
      </Grid>
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
