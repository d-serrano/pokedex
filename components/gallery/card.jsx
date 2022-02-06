import { description } from "platform";
import React from "react";
import useSetPokemonState from "../../hooks/useSetPokemonState";
import styled from "styled-components";
import Image from 'next/image'
import PokemonTypes from '../ui/pokemonTypes'
const StyledCard = styled.section`
  display:flex;
  flex-direction:column;
  padding: 1rem;
  border-radius : 0.5rem;
  background-color: ${props=>props.theme['text-color-secondary']};
  max-height: 300px;
`;

const StyledPokemonImage = styled.div`
  position: relative ;
  aspect-ratio: 1 / 1;
  width: 100%;
  min-height:10rem;
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
            <PokemonTypes types = {types}/>
            
        </div>  
    </StyledCard>
  );
}
 
export default Card
;