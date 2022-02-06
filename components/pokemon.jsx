import React, { useEffect } from 'react';
import Image  from 'next/image';
import {useRecoilValue} from 'recoil';
import {pokemonAtom} from '../config/atoms';
//styles
import styled from 'styled-components';

const StyledPokemon = styled.div`

  height: 100px;
  
  top: 20px;

  h3{
    font-size: 2rem;
  }
  .type {
    margin: 1rem;
  }
  `;

const StyledPokemonImage = styled.div`
 width: 50% ;
 position: relative;
  div{
    
   aspect-ratio: 1 / 1;
  }
`;

export default function Pokemon() {
  
  const pokemon = useRecoilValue(pokemonAtom);
  useEffect(()=>{
    console.log({pokemon});
  },[pokemon]);
  return (
    <StyledPokemon >
      {pokemon&&
        <h1>{pokemon.name}</h1>
      }
    </StyledPokemon>
  )
}
