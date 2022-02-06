import React from 'react'
import Image  from 'next/image'
import Card from '../components/gallery/card';
// styles
import styled from 'styled-components';
import { device } from '../styles/mediaQueries';
const StyledGallery = styled.section`
  display:grid;
  grid-template-columns: repeat(5,1fr);
  gap: 8px 16px;
  
  @media ${device.laptop} { 
    grid-template-columns: repeat(4,1fr);
  }
  @media ${device.mobile} { 
    max-width: 200px;
    grid-template-columns: repeat(2,1fr);
  }
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
