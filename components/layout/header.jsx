import React from 'react'
// componentes
import ViewButtons from '../ViewButtons';
// styles
import styled from 'styled-components'

const StyledHeader = styled.div`
  padding: 0.5rem 1rem 0.5rem 1rem ;
  color : ${ props => props.theme.primary };
  background-color : ${ props => props.theme['background-dark'] };
`;

export default function Header() {
  return (
    <StyledHeader  container item xs = { 12 } justify = 'space-between' alignItems ='center'>
      <h1> Pokedex  </h1> 
     
      <ViewButtons/>
    </StyledHeader>
  )
}
