import React from 'react';
//redux
import { useDispatch } from 'react-redux';
import { setScreen } from '../redux/actions/screenActions'
// material ui
import { Button } from '@material-ui/core';
// styles
import styled from 'styled-components';

const StyledButton = styled(Button)`
width: 5rem;
  margin: 0 0.5rem 0 0.5rem !important;
  color : ${ props => props.theme.primary } !important;
  border-color : ${ props => props.theme.primary } !important;
`;

const ViewButtons = () => {
  const dispatch = useDispatch();
  // set as list, gallery or table
  const setNewScreen = ( newScreen ) => {
    dispatch( setScreen( newScreen ) );
  }
  return ( 
    <div>
      <StyledButton variant = 'outlined' onClick = { () => setNewScreen( 'list' ) }>List</StyledButton>
      <StyledButton variant = 'outlined' onClick = { () => setNewScreen( 'table' ) }>Table</StyledButton>
      <StyledButton variant = 'outlined' onClick = { () => setNewScreen( 'gallery' ) }>Gallery</StyledButton>
    </div>
   );
}
 
export default ViewButtons;