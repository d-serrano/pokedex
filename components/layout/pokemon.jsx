import React, { useEffect } from 'react'
// styles
import styles from '../../styles/pokemon.module.scss'
//Material UI
import { Card, Container, FilledInput, Grid } from '@material-ui/core';
import Image  from 'next/image'
//styles
import styled from 'styled-components';

const StyledPokemon = styled(Grid)`

  height: 100px;
  position: sticky;
  top: 20px;
  #pokemon-img{

    width: 50% !important;
    div{
    position: relative !important;
     aspect-ratio: 1 / 1;
    }
  }
  h3{
    font-size: 2rem;
  }
  .type {
    margin: 1rem;
  }
  `;

const StyledPokemonImage = styled(Image)`
 
  aspect-ratio: 1 / 1;
`;

export default function pokemon({ focusPokemon }) {


 const { name, description, hires, gender, type } = focusPokemon
 const { english } = name ;

  return (
    <StyledPokemon container  justify = 'center' >
      <Grid id = 'pokemon-img' xs = {12}>
        <StyledPokemonImage
          src={ hires } 
          alt="pokemon" 
          layout ='fill'
          objectFit ='contain'
         />
      </Grid>
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
