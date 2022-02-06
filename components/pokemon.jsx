import React, { useEffect } from 'react';
import Image  from 'next/image';
import {useRecoilValue} from 'recoil';
import {pokemonAtom} from '../config/atoms';
//styles
import styled from 'styled-components';
import PokemonTypes from './ui/pokemonTypes';

const StyledPokemon = styled.section`
position: sticky;
top: 20px;
align-self: start;

div{
  display:flex;
  flex-direction:column;
  align-items:center;
  background-color: ${props=>props.theme['text-color-secondary']};

  border-radius:8px;
  padding: 2rem 0.5rem 1rem 0.5rem;
    h3{
      font-size: 2rem;
    }
    div{
      width:100%;
    }
  }
  `;

const StyledPokemonImage = styled.div`
  position: relative ;
  aspect-ratio: 1 / 1;
  width: 100%;
  min-height:10rem;
  max-height:15rem;
`;
export default function Pokemon() {
  
  const pokemon = useRecoilValue(pokemonAtom);
  
  useEffect(()=>{
    console.log({pokemon});
  },[pokemon]);

  if(!pokemon){return null}
  console.log({pokemon})
  const {name,id,sprites,types} = pokemon;
  const artwork = sprites.other['official-artwork'].front_default ;
  return (
    <StyledPokemon >
        {pokemon&&
          <div>
            <StyledPokemonImage>
              <Image 
                src={ artwork }
                alt="pokemon" 
                layout='fill'
                objectFit ='cover'
                />
            </StyledPokemonImage>
            <div>
                <h1>{pokemon.name}</h1>
                <PokemonTypes types = {types}/>
            </div>
          </div>
        }
    </StyledPokemon>
  )
}
