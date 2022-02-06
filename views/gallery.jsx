import React from 'react'
import Image  from 'next/image'
import Card from '../components/gallery/Card';
// styles
import styled from 'styled-components';

const StyledGallery = styled.div`
  display:grid;
  grid-template-columns: repeat(4,1fr);
  gap: 0.5rem 1rem;
`;
export default function Gallery({ pokemonList }) {
  return (
    <StyledGallery  >
        {pokemonList?.map( pokemon => (
          <Card
            key = { pokemon.id }
            pokemon = { pokemon }
          />
         ) )
        }  
    </StyledGallery>
  )
}
