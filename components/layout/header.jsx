import React from 'react'
// material Ui
import { Grid } from '@material-ui/core';
// componentes
import ViewButtons from '../ViewButtons';
// styles
import styled from 'styled-components'

const StyledHeader = styled(Grid)`
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
