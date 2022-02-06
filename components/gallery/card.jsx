import { description } from "platform";
import React from "react";
import useSetPokemonState from "../../hooks/useSetPokemonState";
import styled from "styled-components";
import Image from 'next/image'
import PokemonTypes from '../ui/pokemonTypes'
const StyledCard = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  cursor:pointer;
  padding: 0.5rem;
  border-radius : 8px;
  background-color: ${props=>props.theme['background-light']};
  max-height: 300px;
`;

const StyledPokemonImage = styled.div`
  position: relative ;
  width: 4rem;
  aspect-ratio: 1 / 1;
  div{
    width:120%;
    height:120%;
    
  }
`;

const Card = ({ pokemon }) => {
  const {name,id,sprites,types} = pokemon;
  const {front_default} = sprites;
  
  const {setPokemonState} = useSetPokemonState();
  return (
    <StyledCard onClick= { () => setPokemonState( id ) } >
        <StyledPokemonImage>
          <Image 
            src={ front_default }
            alt="pokemon" 
            layout='fill'
            objectFit ='cover'
          />
        </StyledPokemonImage>
        <div className = 'content'>
          <h3> {name} </h3>   
        </div>  
    </StyledCard>
  );
}
 
export default Card
;